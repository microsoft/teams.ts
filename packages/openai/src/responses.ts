import OpenAI, { AzureOpenAI } from 'openai';
import { Fetch } from 'openai/core';

import {
  ChatSendOptions,
  IChatModel,
  LocalMemory,
  Message,
  ModelMessage,
  FunctionMessage,
  Function,
  FunctionCall,
} from '@microsoft/teams.ai';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common/logging';

// Type aliases for OpenAI Responses API types
type ResponseInputItem = OpenAI.Responses.ResponseInputItem;
type ResponseFunctionToolCall = OpenAI.Responses.ResponseFunctionToolCall;
type FunctionTool = OpenAI.Responses.FunctionTool;
type Tool = OpenAI.Responses.Tool;
type Response = OpenAI.Responses.Response;

export type ResponsesCreateParams = Omit<
  OpenAI.Responses.ResponseCreateParams,
  'model' | 'input' | 'instructions' | 'tools' | 'previous_response_id'
>;

export type OpenAIResponsesModelOptions = {
  readonly model: (string & {}) | OpenAI.Chat.ChatModel;
  readonly apiKey?: string;
  readonly baseUrl?: string;
  readonly organization?: string;
  readonly project?: string;
  readonly headers?: { [key: string]: string };
  readonly fetch?: Fetch;
  readonly timeout?: number;
  readonly requestOptions?: ResponsesCreateParams;
  readonly logger?: ILogger;
  /**
   * Enable stateful mode where OpenAI manages conversation context.
   * When true, uses previous_response_id to maintain conversation state.
   * When false, sends full conversation history with each request.
   * @default true
   */
  readonly stateful?: boolean;
};

export type AzureOpenAIResponsesModelOptions = OpenAIResponsesModelOptions & {
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
};

/**
 * OpenAI Responses API chat model implementation.
 *
 * The Responses API is stateful and manages conversation context automatically,
 * making it simpler for complex multi-turn conversations with tools.
 * Supports both stateful (recommended) and stateless modes.
 */
export class OpenAIResponsesModel implements IChatModel<ResponsesCreateParams> {
  private readonly _openai: OpenAI;
  private readonly _log: ILogger;
  private readonly _stateful: boolean;

  constructor(readonly options: OpenAIResponsesModelOptions | AzureOpenAIResponsesModelOptions) {
    this._log =
      options.logger ||
      new ConsoleLogger(`@microsoft/teams.openai/responses/${this.options.model}`);
    this._stateful = options.stateful ?? true;
    this._openai =
      'endpoint' in options
        ? new AzureOpenAI({
            apiKey: options.apiKey,
            apiVersion: options.apiVersion,
            endpoint: options.endpoint?.replace(/\/$/, ''),
            deployment: options.model,
            azureADTokenProvider: options.azureADTokenProvider,
            baseURL: options.baseUrl?.replace(/\/$/, ''),
            organization: options.organization,
            project: options.project,
            defaultHeaders: options.headers,
            fetch: options.fetch,
            timeout: options.timeout,
          })
        : new OpenAI({
            apiKey: options.apiKey,
            baseURL: options.baseUrl?.replace(/\/$/, ''),
            organization: options.organization,
            project: options.project,
            defaultHeaders: options.headers,
            fetch: options.fetch,
            timeout: options.timeout,
          });
  }

  async send(
    input: Message,
    options: ChatSendOptions<ResponsesCreateParams> = {}
  ): Promise<ModelMessage> {
    const memory = options.messages || new LocalMemory();

    // Execute any pending function calls first
    const functionResults = await this._executeFunctions(input, options.functions);

    if (this._stateful) {
      return this._sendStateful(input, options, memory, functionResults);
    } else {
      return this._sendStateless(input, options, memory, functionResults);
    }
  }

  /**
   * Handle stateful conversation using OpenAI Responses API state management.
   */
  private async _sendStateful(
    input: Message,
    options: ChatSendOptions<ResponsesCreateParams>,
    memory: { push: (m: Message) => Promise<void>; values: () => Promise<Message[]>; set?: (m: Message[]) => Promise<void> },
    functionResults: FunctionMessage[]
  ): Promise<ModelMessage> {
    // Get messages from memory
    const messages = await memory.values();

    // Extract previous response ID from memory - look for ModelMessage with ID
    let previousResponseId: string | undefined;
    for (let i = messages.length - 1; i >= 0; i--) {
      const msg = messages[i] as ModelMessage & { id?: string };
      if (msg.role === 'model' && msg.id) {
        previousResponseId = msg.id;
        break;
      }
    }
    this._log.debug(`Found previous response ID: ${previousResponseId}`);

    // Push function results to memory
    for (const result of functionResults) {
      await memory.push(result);
      messages.push(result);
    }

    // Convert to Responses API format
    const responsesInput = this._convertToResponsesFormat(input, messages);

    // Convert functions to tools format
    const tools = this._convertFunctionsToTools(options.functions);

    this._log.debug(`Making Responses API call (stateful) with input type: ${input.role}`);

    // Make OpenAI Responses API call
    const response = await this._openai.responses.create({
      ...this.options.requestOptions,
      ...options.request,
      model: 'endpoint' in this.options ? '' : this.options.model,
      input: responsesInput,
      instructions: options.system?.content || undefined,
      tools: tools.length > 0 ? tools : undefined,
      previous_response_id: previousResponseId,
    });

    this._log.debug(`Response API returned with id: ${response.id}`);

    // Convert response to ModelMessage format
    const modelMessage = this._convertFromResponsesFormat(response);

    // Store response ID in the ModelMessage for next call
    (modelMessage as ModelMessage & { id?: string }).id = response.id;

    // In stateful mode, replace memory with just the current response
    if (memory.set) {
      await memory.set([modelMessage]);
    }

    // If response has function calls, recursively execute them
    if (modelMessage.function_calls?.length) {
      this._log.debug(
        `Response has ${modelMessage.function_calls.length} function calls, executing recursively`
      );
      return this.send(modelMessage, {
        ...options,
        messages: memory as any,
      });
    }

    this._log.debug('Stateful Responses API conversation completed');
    return modelMessage;
  }

  /**
   * Handle stateless conversation using standard OpenAI API pattern.
   */
  private async _sendStateless(
    input: Message,
    options: ChatSendOptions<ResponsesCreateParams>,
    memory: { push: (m: Message) => Promise<void>; values: () => Promise<Message[]> },
    functionResults: FunctionMessage[]
  ): Promise<ModelMessage> {
    // Get conversation history from memory
    const messages = await memory.values();
    this._log.debug(`Retrieved ${messages.length} messages from memory`);

    // Push current input to memory
    await memory.push(input);
    messages.push(input);

    // Push function results to memory
    for (const result of functionResults) {
      await memory.push(result);
      messages.push(result);
    }

    // Convert to Responses API format
    const responsesInput = this._convertToResponsesFormat(input, messages);

    // Convert functions to tools format
    const tools = this._convertFunctionsToTools(options.functions);

    this._log.debug(`Making Responses API call (stateless) with input type: ${input.role}`);

    // Make OpenAI Responses API call (stateless - no previous_response_id)
    const response = await this._openai.responses.create({
      ...this.options.requestOptions,
      ...options.request,
      model: 'endpoint' in this.options ? '' : this.options.model,
      input: responsesInput,
      instructions: options.system?.content || undefined,
      tools: tools.length > 0 ? tools : undefined,
    });

    this._log.debug(`Response API returned with id: ${response.id}`);

    // Convert response to ModelMessage format
    const modelMessage = this._convertFromResponsesFormat(response);

    // If response has function calls, recursively execute them
    if (modelMessage.function_calls?.length) {
      if (options.autoFunctionCalling !== false) {
        this._log.debug(
          `Response has ${modelMessage.function_calls.length} function calls, executing recursively`
        );
        return this.send(modelMessage, {
          ...options,
          messages: memory as any,
        });
      } else {
        this._log.debug(
          `Automatic function calling is disabled, skipping function call execution (total calls: ${modelMessage.function_calls.length})`
        );
      }
    }

    // Push response to memory
    await memory.push(modelMessage);

    // Handle streaming if callback provided
    if (options.onChunk && modelMessage.content) {
      await options.onChunk(modelMessage.content);
    }

    this._log.debug('Stateless Responses API conversation completed');
    return modelMessage;
  }

  /**
   * Execute any pending function calls in the input message.
   */
  private async _executeFunctions(
    input: Message,
    functions?: Record<string, Function>
  ): Promise<FunctionMessage[]> {
    const functionResults: FunctionMessage[] = [];

    if (input.role === 'model' && input.function_calls?.length) {
      for (const call of input.function_calls) {
        const log = this._log.child(`tools/${call.name}`);
        const fn = functions?.[call.name];

        if (!fn) {
          functionResults.push({
            role: 'function',
            content: `Error: function ${call.name} not found`,
            function_id: call.id,
          });
          continue;
        }

        try {
          log.debug(call.arguments);
          const output = await fn.handler(call.arguments);
          const content = JSON.stringify(output);
          log.debug(content);

          functionResults.push({
            role: 'function',
            content,
            function_id: call.id,
          });
        } catch (err) {
          log.error(err);

          let content = 'Error: Unknown error';
          if (err instanceof Error) {
            content = `Error: ${err.name} => ${err.message}`;
          }

          functionResults.push({
            role: 'function',
            content,
            function_id: call.id,
          });
        }
      }
    }

    return functionResults;
  }

  /**
   * Convert messages to Responses API input format.
   */
  private _convertToResponsesFormat(
    input: Message,
    messages: Message[]
  ): ResponseInputItem[] {
    const inputList: ResponseInputItem[] = [];

    // Build a map of function results by ID for efficient lookup
    const resultsById = new Map<string, FunctionMessage>();
    for (const msg of messages) {
      if (msg.role === 'function') {
        resultsById.set(msg.function_id, msg);
      }
    }

    // Include all messages including current input
    const allMessages = [...messages];
    if (!messages.includes(input)) {
      allMessages.push(input);
    }

    for (const message of allMessages) {
      if (message.role === 'user') {
        const content =
          typeof message.content === 'string'
            ? message.content
            : message.content
                .map((p) => (p.type === 'text' ? p.text : ''))
                .join('\n');

        inputList.push({
          type: 'message',
          role: 'user',
          content,
        });
      } else if (message.role === 'system') {
        inputList.push({
          type: 'message',
          role: 'system',
          content: message.content,
        });
      } else if (message.role === 'model') {
        if (message.function_calls?.length) {
          // Add function calls and their results
          for (const call of message.function_calls) {
            inputList.push({
              type: 'function_call',
              call_id: call.id,
              name: call.name,
              arguments: JSON.stringify(call.arguments),
            });

            // Add the matching function result if available
            const result = resultsById.get(call.id);
            if (result) {
              inputList.push({
                type: 'function_call_output',
                call_id: result.function_id,
                output: result.content || '',
              });
            } else {
              this._log.warn(`No associated result found for call id (${call.name} - ${call.id})`);
            }
          }
        } else if (message.content) {
          // ModelMessage with content but no function calls
          inputList.push({
            type: 'message',
            role: 'assistant',
            content: message.content,
          });
        }
      }
      // FunctionMessage is handled as part of ModelMessage function calls above
    }

    return inputList;
  }

  /**
   * Convert functions to Responses API tools format.
   */
  private _convertFunctionsToTools(functions?: Record<string, Function>): Tool[] {
    if (!functions || Object.keys(functions).length === 0) {
      return [];
    }

    const tools: Tool[] = [];

    for (const fn of Object.values(functions)) {
      const tool: FunctionTool = {
        type: 'function',
        name: fn.name,
        description: fn.description,
        parameters: fn.parameters as Record<string, unknown>,
        strict: true,
      };
      tools.push(tool);
    }

    return tools;
  }

  /**
   * Convert Responses API response to ModelMessage format.
   */
  private _convertFromResponsesFormat(response: Response): ModelMessage {
    let content: string | undefined;
    let functionCalls: FunctionCall[] | undefined;

    // Extract text content from response output
    content = response.output_text || undefined;

    // Handle function calls from response
    if (response.output?.length) {
      for (const outputItem of response.output) {
        if (outputItem.type === 'function_call') {
          const fnCall = outputItem as ResponseFunctionToolCall;
          if (!functionCalls) {
            functionCalls = [];
          }
          functionCalls.push({
            id: fnCall.call_id,
            name: fnCall.name,
            arguments: fnCall.arguments ? JSON.parse(fnCall.arguments) : {},
          });
        }
      }
    }

    return {
      role: 'model',
      content,
      function_calls: functionCalls,
    };
  }
}
