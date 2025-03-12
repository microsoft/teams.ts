import { Function, FunctionHandler } from '../function';
import { LocalMemory } from '../local-memory';
import { IMemory } from '../memory';
import { ContentPart, Message, SystemMessage, UserMessage } from '../message';
import { IChatModel, TextChunkHandler } from '../models';
import { Schema } from '../schema';
import { ITemplate } from '../template';
import { StringTemplate } from '../templates';

export type ChatPromptOptions<TOptions = Record<string, any>> = {
  readonly model: IChatModel<TOptions>;
  readonly instructions?: string | string[] | ITemplate;
  readonly role?: 'system' | 'user';
  readonly messages?: Message[] | IMemory;
};

export type ChatPromptSendOptions<TOptions = Record<string, any>> = {
  readonly messages?: Message[] | IMemory;
  readonly onChunk?: TextChunkHandler;
  readonly options?: TOptions;
};

export class ChatPrompt<TOptions = Record<string, any>> {
  get messages() {
    return this._messages;
  }
  protected readonly _messages: IMemory;

  protected readonly _role: 'system' | 'user';
  protected readonly _model: IChatModel<TOptions>;
  protected readonly _template: ITemplate;
  protected readonly _functions: Record<string, Function> = {};

  constructor(options: ChatPromptOptions<TOptions>) {
    this._role = options.role || 'system';
    this._model = options.model;
    this._template = Array.isArray(options.instructions)
      ? new StringTemplate(options.instructions.join('\n'))
      : typeof options.instructions !== 'object'
        ? new StringTemplate(options.instructions)
        : options.instructions;

    this._messages =
      typeof options.messages === 'object' && !Array.isArray(options.messages)
        ? options.messages
        : new LocalMemory({ messages: options.messages || [] });
  }

  function(name: string, description: string, handler: FunctionHandler): this;
  function(name: string, description: string, parameters: Schema, handler: FunctionHandler): this;
  function(...args: any[]) {
    const name: string = args[0];
    const description: string = args[1];
    const parameters: Schema | null = args.length === 3 ? null : args[2];
    const handler: FunctionHandler = args[args.length - 1];
    this._functions[name] = {
      name,
      description,
      parameters: parameters || {},
      handler,
    };

    return this;
  }

  async call<A extends { [key: string]: any }, R = any>(name: string, args?: A): Promise<R> {
    const fn = this._functions[name];

    if (!fn) {
      throw new Error(`function "${name}" not found`);
    }

    return await fn.handler(args || {});
  }

  async send(input: string | ContentPart[], options: ChatPromptSendOptions<TOptions> = {}) {
    const { onChunk } = options;

    if (typeof input === 'string') {
      input = input.trim();
    }

    const messages = !Array.isArray(options.messages)
      ? options.messages || this._messages
      : new LocalMemory({ messages: options.messages || [] });

    let buffer = '';
    let system: SystemMessage | UserMessage | undefined = undefined;
    const prompt = await this._template.render();

    if (prompt) {
      system = {
        role: this._role,
        content: prompt,
      };
    }

    const res = await this._model.send(
      {
        role: 'user',
        content: input,
      },
      {
        system,
        messages,
        options: options.options,
        functions: this._functions,
        onChunk: async (chunk) => {
          if (!chunk || !onChunk) return;
          buffer += chunk;

          try {
            await onChunk(buffer);
            buffer = '';
          } catch (err) {
            return;
          }
        },
      }
    );

    return res.content || '';
  }
}
