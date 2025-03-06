import { Function, FunctionHandler } from '../function';
import { LocalMemory } from '../local-memory';
import { Memory } from '../memory';
import { ContentPart, Message, SystemMessage, UserMessage } from '../message';
import { ChatModel } from '../models';
import { Schema } from '../schema';
import { Template } from '../template';
import { StringTemplate } from '../templates';

export interface ChatPromptOptions {
  readonly model: ChatModel;
  readonly instructions?: string | Template;
  readonly role?: 'system' | 'user';
  readonly messages?: Message[] | Memory;
}

export class ChatPrompt {
  readonly messages: Memory;

  protected readonly _role: 'system' | 'user';
  protected readonly _model: ChatModel;
  protected readonly _template: Template;
  protected readonly _functions: Record<string, Function> = {};

  constructor(options: ChatPromptOptions) {
    this._role = options.role || 'system';
    this.messages =
      typeof options.messages === 'object' && !Array.isArray(options.messages)
        ? options.messages
        : new LocalMemory({ messages: options.messages || [] });

    this._model = options.model;
    this._template =
      typeof options.instructions !== 'object'
        ? new StringTemplate(options.instructions)
        : options.instructions;
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

  async chat(input: string | ContentPart[], onChunk?: (chunk: string) => void | Promise<void>) {
    if (typeof input === 'string') {
      input = input.trim();
    }

    let buffer = '';
    let system: SystemMessage | UserMessage | undefined = undefined;
    const prompt = await this._template.render();

    if (prompt) {
      system = {
        role: this._role,
        content: prompt,
      };
    }

    const res = await this._model.chat(
      {
        input: {
          role: 'user',
          content: input,
        },
        system,
        messages: this.messages,
        functions: this._functions,
      },
      async (chunk) => {
        if (!chunk.content || !onChunk) return;
        buffer += chunk.content;

        try {
          await onChunk(buffer);
          buffer = '';
        } catch (err) {
          return;
        }
      }
    );

    return res.content || '';
  }
}
