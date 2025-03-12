import { Function, FunctionHandler } from '../function';
import { LocalMemory } from '../local-memory';
import { IMemory } from '../memory';
import { ContentPart, Message, SystemMessage, UserMessage } from '../message';
import { IChatModel, TextChunkHandler } from '../models';
import { Schema } from '../schema';
import { ITemplate } from '../template';
import { StringTemplate } from '../templates';

export type ChatPromptOptions<TOptions extends Record<string, any> = Record<string, any>> = {
  /**
   * the name of the prompt
   */
  readonly name?: string;

  /**
   * the description of the prompt
   */
  readonly description?: string;

  /**
   * the model to send messages to
   */
  readonly model: IChatModel<TOptions>;

  /**
   * the defining characteristics/objective
   * of the prompt
   */
  readonly instructions?: string | string[] | ITemplate;

  /**
   * the `role` of the initial message
   */
  readonly role?: 'system' | 'user';

  /**
   * the conversation history
   */
  readonly messages?: Message[] | IMemory;
};

export type ChatPromptSendOptions<TOptions extends Record<string, any> = Record<string, any>> = {
  /**
   * the conversation history
   */
  readonly messages?: Message[] | IMemory;

  /**
   * the models request options
   */
  readonly request?: TOptions;

  /**
   * the callback to be called for each
   * stream chunk
   */
  readonly onChunk?: TextChunkHandler;
};

export class ChatPrompt<TOptions extends Record<string, any> = Record<string, any>> {
  get name() {
    return this._name;
  }
  protected readonly _name: string;

  get description() {
    return this._description;
  }
  protected readonly _description: string;

  get messages() {
    return this._messages;
  }
  protected readonly _messages: IMemory;

  get functions() {
    return Object.values(this._functions);
  }
  protected readonly _functions: Record<string, Function> = {};

  protected readonly _role: 'system' | 'user';
  protected readonly _template: ITemplate;
  protected readonly _model: IChatModel<TOptions>;

  constructor(options: ChatPromptOptions<TOptions>) {
    this._name = options.name || 'chat';
    this._description = options.description || 'an agent you can chat with';
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

  use(prompt: ChatPrompt): this;
  use(name: string, prompt: ChatPrompt): this;
  use(...args: any[]) {
    const prompt: ChatPrompt = args.length === 1 ? args[0] : args[1];
    const name: string = args.length === 1 ? prompt.name : args[0];
    this._functions[name] = {
      name,
      description: prompt.description,
      parameters: {
        type: 'object',
        properties: {
          text: {
            type: 'string',
            description: 'the text to send to the assistant',
          },
        },
        required: ['text'],
      },
      handler: ({ text }: { text: string }) => {
        return prompt.send(text);
      },
    };

    return this;
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
        request: options.request,
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

    return { ...res, content: res.content || '' };
  }
}
