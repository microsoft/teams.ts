import { Function } from '../function';
import { IMemory } from '../memory';
import { Message, ModelMessage, SystemMessage, UserMessage } from '../message';

export type TextChunkHandler = (chunk: string) => void | Promise<void>;
export type ChatSendOptions<TOptions = Record<string, any>> = {
  readonly system?: SystemMessage | UserMessage;
  readonly messages?: IMemory;
  readonly functions?: Record<string, Function>;
  readonly request?: TOptions;
  readonly onChunk?: TextChunkHandler;
};

export interface IChatModel<TOptions = Record<string, any>> {
  send(input: Message, options?: ChatSendOptions<TOptions>): Promise<ModelMessage>;
}
