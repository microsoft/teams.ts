import { ChatModel, ChatParams, LocalMemory, ModelMessage } from '@microsoft/spark.ai';
import { ConsoleLogger, Logger } from '@microsoft/spark.common/logging';

import OpenAI, { AzureOpenAI } from 'openai';
import { Fetch } from 'openai/core';
import { Stream } from 'openai/streaming';

export interface OpenAIChatModelOptions {
  readonly model: (string & {}) | OpenAI.Chat.ChatModel;
  readonly apiKey?: string;
  readonly baseUrl?: string;
  readonly organization?: string;
  readonly project?: string;
  readonly headers?: { [key: string]: string };
  readonly fetch?: Fetch;
  readonly timeout?: number;
  readonly stream?: boolean;
  readonly temperature?: number;
  readonly logger?: Logger;
  readonly requestOptions?:
    | OpenAI.ChatCompletionCreateParams
    | ((
        params: ChatParams
      ) => OpenAI.ChatCompletionCreateParams | Promise<OpenAI.ChatCompletionCreateParams>);
}

export interface AzureOpenAIChatModelOptions extends OpenAIChatModelOptions {
  /**
   * Defaults to process.env['OPENAI_API_VERSION'].
   */
  apiVersion?: string;

  /**
   * Your Azure endpoint, including the resource, e.g. `https://example-resource.azure.openai.com/`
   */
  endpoint?: string;

  /**
   * A function that returns an access token for Microsoft Entra (formerly known as Azure Active Directory),
   * which will be invoked on every request.
   */
  azureADTokenProvider?: () => Promise<string>;
}

export class OpenAIChatModel implements ChatModel {
  private readonly _openai: OpenAI;
  private readonly _log: Logger;

  constructor(readonly options: OpenAIChatModelOptions | AzureOpenAIChatModelOptions) {
    this._log =
      options.logger || new ConsoleLogger(`@microsoft/spark.openai/${this.options.model}`);
    this._openai =
      'endpoint' in options
        ? new AzureOpenAI({
            apiKey: options.apiKey,
            apiVersion: options.apiVersion,
            endpoint: options.endpoint,
            deployment: options.model,
            azureADTokenProvider: options.azureADTokenProvider,
            baseURL: options.baseUrl,
            organization: options.organization,
            project: options.project,
            defaultHeaders: options.headers,
            fetch: options.fetch,
            timeout: options.timeout,
          })
        : new OpenAI({
            apiKey: options.apiKey,
            baseURL: options.baseUrl,
            organization: options.organization,
            project: options.project,
            defaultHeaders: options.headers,
            fetch: options.fetch,
            timeout: options.timeout,
          });
  }

  async chat(
    params: ChatParams,
    onChunk?: (chunk: ModelMessage) => void | Promise<void>
  ): Promise<ModelMessage> {
    const memory = params.messages || new LocalMemory();
    await memory.push(params.input);

    // call functions
    if (params.input.role === 'model' && params.input.function_calls?.length) {
      for (const call of params.input.function_calls) {
        const log = this._log.child(`tools/${call.name}`);
        const fn = (params.functions || {})[call.name];

        if (!fn) {
          throw new Error(`function ${call.name} not found`);
        }

        let content = '';

        try {
          log.debug(call.arguments);
          const output = await fn.handler(call.arguments);
          content = JSON.stringify(output);
          log.debug(content);
        } catch (err) {
          log.error(err);

          if (err instanceof Error) {
            content = `Error: ${err.name} => ${err.message}`;
          }
        }

        await memory.push({
          role: 'function',
          content,
          function_id: call.id,
        });
      }
    }

    const messages = await memory.values();

    if (params.system) {
      messages.push(params.system);
    }

    try {
      let requestOptions = this.options?.requestOptions;

      if (requestOptions) {
        if (typeof requestOptions === 'function') {
          requestOptions = await requestOptions(params);
        }
      }

      const completion = await this._openai.chat.completions.create({
        model: 'endpoint' in this.options ? '' : this.options.model,
        temperature: this.options.temperature,
        stream: this.options.stream,
        ...requestOptions,
        tools:
          Object.keys(params.functions || {}).length === 0
            ? undefined
            : Object.values(params.functions || {}).map((fn) => ({
                type: 'function',
                function: {
                  name: fn.name,
                  description: fn.description,
                  parameters: fn.parameters,
                },
              })),
        messages: messages.map((message) => {
          if (message.role === 'model') {
            return {
              role: 'assistant',
              content: message.content,
              tool_calls: message.function_calls?.map((fn) => ({
                id: fn.id,
                type: 'function',
                function: {
                  name: fn.name,
                  arguments: JSON.stringify(fn.arguments),
                },
              })),
            };
          }

          if (message.role === 'function') {
            return {
              role: 'tool',
              content: message.content || '',
              tool_call_id: message.function_id,
            };
          }

          if (message.role === 'user') {
            if (!message.content) {
              message.content = '';
            }

            return {
              role: 'user',
              content:
                typeof message.content === 'string'
                  ? message.content
                  : message.content.map((p) => {
                      if (p.type === 'image_url') {
                        return {
                          type: p.type,
                          image_url: { url: p.image_url },
                        };
                      }

                      return p;
                    }),
            };
          }

          return message;
        }),
      });

      let message: OpenAI.Chat.ChatCompletionMessage = {
        role: 'assistant',
        content: '',
        refusal: null,
      };

      if (!(completion instanceof Stream)) {
        message = completion.choices[0].message;
      } else {
        for await (const chunk of completion) {
          if (!chunk.choices.length) continue;
          const delta = chunk.choices[0].delta;

          if (delta.tool_calls) {
            if (!message.tool_calls) {
              message.tool_calls = [];
            }

            for (const call of delta.tool_calls) {
              if ('index' in call) {
                if (call.index === message.tool_calls.length) {
                  message.tool_calls.push({
                    id: '',
                    type: 'function',
                    function: {
                      name: '',
                      arguments: '',
                    },
                  });
                }

                if (call.id) {
                  message.tool_calls[call.index].id += call.id;
                }

                if (call.function?.name) {
                  message.tool_calls[call.index].function.name += call.function.name;
                }

                if (call.function?.arguments) {
                  message.tool_calls[call.index].function.arguments += call.function.arguments;
                }
              } else {
                message.tool_calls.push(call);
              }
            }
          }

          if (delta.content) {
            if (message.content) {
              message.content += delta.content;
            } else {
              message.content = delta.content;
            }

            if (onChunk) {
              await onChunk({
                role: 'model',
                content: delta.content,
              });
            }
          }
        }
      }

      const modelMessage: ModelMessage = {
        role: 'model',
        content: message.content || undefined,
        function_calls: message.tool_calls?.map((call) => ({
          id: call.id,
          name: call.function.name,
          arguments: JSON.parse(call.function.arguments || '{}'),
        })),
      };

      if (message.tool_calls && message.tool_calls.length > 0) {
        return this.chat(
          {
            ...params,
            input: modelMessage,
            messages: memory,
          },
          onChunk
        );
      }

      await memory.push(modelMessage);
      return modelMessage;
    } catch (err) {
      this._log.error(err);
      throw err;
    }
  }
}
