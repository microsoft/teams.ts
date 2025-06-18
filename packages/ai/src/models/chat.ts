import { Function } from '../function';
import { IMemory } from '../memory';
import { Message, ModelMessage, SystemMessage, UserMessage } from '../message';

export type TextChunkHandler = (chunk: string) => void | Promise<void>;
export type ChatSendOptions<TOptions = Record<string, any>> = {
  /**
   * the initial system/user message that defines
   * model behavior
   */
  readonly system?: SystemMessage | UserMessage;

  /**
   * the conversation history
   */
  readonly messages?: IMemory;

  /**
   * the registered functions
   */
  readonly functions?: Record<string, Function>;

  /**
   * the request option overrides
   */
  readonly request?: TOptions;

  /**
   * the handler to call with each
   * stream chunk
   */
  readonly onChunk?: TextChunkHandler;

  /**
   * enable/disable automatic function calling
   * @default true
   */
  readonly autoFunctionCalling?: boolean;
};

/**
 * a conversational model for sending and receiving
 * messages
 */
export interface IChatModel<TOptions = Record<string, any>> {
  /**
   * send a message to the model
   * @param input the message to send
   * @param options the send options
   */
  send(input: Message, options?: ChatSendOptions<TOptions>): Promise<ModelMessage>;
}
