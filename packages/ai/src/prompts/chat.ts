import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { Function, FunctionHandler } from '../function';
import { LocalMemory } from '../local-memory';
import { IMemory } from '../memory';
import { ContentPart, Message, ModelMessage, SystemMessage, UserMessage } from '../message';
import { IChatModel, TextChunkHandler } from '../models';
import { Schema } from '../schema';
import { ITemplate } from '../template';
import { StringTemplate } from '../templates';
import { WithRequired } from '../utils/types';

import { IAiPlugin } from './plugin';

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
   * of the prompt. This is commonly used to provide a system prompt.
   * If you supply the system prompt as part of the messages,
   * you do not need to supply this option.
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

  /**
   * Logger instance to use for logging
   * If not provided, a ConsoleLogger will be used
   */
  logger?: ILogger;
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

/**
 * a prompt that can interface with a
 * chat model that provides utility like
 * streaming and function calling
 */
export interface IChatPrompt<
  TOptions extends Record<string, any> = Record<string, any>,
  TChatPromptPlugins extends readonly ChatPromptPlugin<string, any>[] = [],
> {
  /**
   * the prompt name
   */
  readonly name: string;

  /**
   * the prompt description
   */
  readonly description: string;

  /**
   * the chat history
   */
  readonly messages: IMemory;

  /**
   * the registered functions
   */
  readonly functions: Array<Function>;

  /**
   * the chat model
   */
  plugins: TChatPromptPlugins;
  /**
   * add another chat prompt as a
   */
  use(prompt: IChatPrompt): this;
  use(name: string, prompt: IChatPrompt): this;

  /**
   * add a function that can be called
   * by the model
   */
  function(name: string, description: string, handler: FunctionHandler): this;
  function(name: string, description: string, parameters: Schema, handler: FunctionHandler): this;

  usePlugin<TPluginName extends TChatPromptPlugins[number]['name']>(
    name: TPluginName,
    args: Extract<TChatPromptPlugins[number], { name: TPluginName }>['onUsePlugin'] extends
      | ((args: infer U) => void)
      | undefined
      ? U
      : never
  ): this;

  /**
   * call a function
   */
  call<A extends Record<string, any>, R = any>(name: string, args?: A): Promise<R>;

  /**
   * send a message to the model and get a response
   */
  send(
    input: string | ContentPart[],
    options?: ChatPromptSendOptions<TOptions>
  ): Promise<Pick<ModelMessage, 'content'> & Omit<ModelMessage, 'content'>>;
}

export type ChatPromptPlugin<TPluginName extends string, TPluginUseArgs extends {}> = IAiPlugin<
  TPluginName,
  TPluginUseArgs,
  Parameters<IChatPrompt['send']>[0],
  ReturnType<IChatPrompt['send']>
> & {
  /**
   * Optionally passed in to modify the functions array that
   * is passed to the model
   * @param functions
   * @returns Functions
   */
  onBuildFunctions?: (functions: Function[]) => Function[] | Promise<Function[]>;
};

/**
 * a prompt that can interface with a
 * chat model that provides utility like
 * streaming and function calling
 */
export class ChatPrompt<
  TOptions extends Record<string, any> = Record<string, any>,
  TChatPromptPlugins extends readonly ChatPromptPlugin<string, any>[] = [],
> implements IChatPrompt<TOptions, TChatPromptPlugins> {
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

  get plugins() {
    return this._plugins;
  }
  protected readonly _plugins: TChatPromptPlugins;

  protected readonly _role: 'system' | 'user';
  protected readonly _template: ITemplate;
  protected readonly _model: IChatModel<TOptions>;
  protected readonly _log: ILogger;

  constructor(options: ChatPromptOptions<TOptions>, plugins?: TChatPromptPlugins) {
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

    this._plugins = plugins || ([] as unknown as TChatPromptPlugins);
    this._log = options.logger || new ConsoleLogger(`@microsoft/teams.ai/prompts/${this._name}`);
  }

  use(prompt: IChatPrompt): this;
  use(name: string, prompt: IChatPrompt): this;
  use(...args: any[]) {
    const prompt: IChatPrompt = args.length === 1 ? args[0] : args[1];
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

  usePlugin<K extends TChatPromptPlugins[number]['name']>(
    name: K,
    args: Extract<TChatPromptPlugins[number], { name: K }>['onUsePlugin'] extends
      | ((args: infer U) => void)
      | undefined
      ? U
      : never
  ): this {
    const plugin = this._plugins.find((p) => p.name === name);
    if (!plugin) {
      this._log.debug(`Plugin "${name}" not found`);
      throw new Error(`Plugin "${name}" not found`);
    }

    if (plugin.onUsePlugin) {
      this._log.debug(`Using plugin "${name}" with args:`, args);
      plugin.onUsePlugin(args);
      this._log.debug(`Successfully initialized plugin "${name}"`);
    }

    return this;
  }

  async call<A extends { [key: string]: any }, R = any>(name: string, args?: A): Promise<R> {
    const fn = this._functions[name];
    if (!fn) {
      throw new Error(`function "${name}" not found`);
    }
    return this.executeFunction(name, fn, args);
  }

  async send(input: string | ContentPart[], options: ChatPromptSendOptions<TOptions> = {}) {
    this._log.debug(`Processing plugins before send (${this.plugins.length} plugins found)`);
    for (const plugin of this.plugins) {
      if (plugin.onBeforeSend) {
        this._log.debug(`Running onBeforeSend for plugin "${plugin.name}"`);
        input = await plugin.onBeforeSend(input);
      }
    }

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
      this._log.debug('System instructions for LLM:', prompt);
    }

    let functions = Object.values(this._functions);
    const pluginsWithOnBuildFunctions = this._plugins.filter(
      (plugin): plugin is WithRequired<TChatPromptPlugins[number], 'onBuildFunctions'> =>
        plugin.onBuildFunctions != null
    );
    for (const plugin of pluginsWithOnBuildFunctions) {
      functions = await plugin.onBuildFunctions(functions);
    }

    const fnMap = functions.reduce(
      (acc, fn) => {
        acc[fn.name] = {
          ...fn,
          handler: (args: any) => this.executeFunction(fn.name, fn, args),
        };
        return acc;
      },
      {} as Record<string, Function>
    );

    if (Object.keys(fnMap).length > 0) {
      this._log.debug(
        'Available functions for LLM:',
        Object.keys(fnMap).map((name) => {
          const fn = fnMap[name];
          const paramDescriptions =
            'properties' in fn.parameters && fn.parameters.properties
              ? Object.entries(
                fn.parameters.properties as Record<string, { description?: string }>
              ).reduce(
                (acc, [key, prop]) => ({
                  ...acc,
                  [key]: prop.description,
                }),
                {} as Record<string, string | undefined>
              )
              : {};

          return {
            name,
            description: fn.description,
            parameters: {
              schema: fn.parameters,
              descriptions: paramDescriptions,
            },
          };
        })
      );
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
        functions: fnMap,
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

    let output: Awaited<ReturnType<typeof this._model.send>> = {
      ...res,
      content: res.content || '',
    };

    // Log function calls if present
    if (output.function_calls && output.function_calls.length > 0) {
      this._log.debug(
        'LLM requested function calls:',
        output.function_calls.map((call) => ({
          name: call.name,
          id: call.id,
          arguments: call.arguments,
        }))
      );
    }

    this._log.debug(`Processing plugins after send (${this.plugins.length} plugins found)`);
    for (const plugin of this.plugins) {
      if (plugin.onAfterSend) {
        this._log.debug(`Running onAfterSend for plugin "${plugin.name}"`);
        output = await plugin.onAfterSend(output);
      }
    }

    return output;
  }

  protected async executeFunction<R = any>(
    name: string,
    fn: Function,
    args?: Record<string, any>
  ): Promise<R> {
    const processedArgs = args || {};

    // Execute beforeFunctionCall hooks
    for (const plugin of this.plugins) {
      if (plugin.onBeforeFunctionCall) {
        await plugin.onBeforeFunctionCall(name, processedArgs);
      }
    }

    // Call the function
    let result = await fn.handler(processedArgs);

    // Execute afterFunctionCall hooks
    for (const plugin of this.plugins) {
      if (plugin.onAfterFunctionCall) {
        result = await plugin.onAfterFunctionCall(name, processedArgs, result);
      }
    }

    return result;
  }
}
