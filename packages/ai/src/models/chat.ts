import { Function } from '../function';
import { Memory } from '../memory';
import { Message, ModelMessage, SystemMessage, UserMessage } from '../message';

export interface ChatParams {
  readonly system?: SystemMessage | UserMessage;
  readonly input: Message;
  readonly messages?: Memory;
  readonly functions?: Record<string, Function>;
}

export interface ChatModel {
  chat(
    params: ChatParams,
    onChunk?: (chunk: ModelMessage) => void | Promise<void>
  ): Promise<ModelMessage>;
}
