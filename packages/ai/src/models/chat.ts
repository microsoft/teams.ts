import { Function } from '../function';
import { IMemory } from '../memory';
import { Message, ModelMessage, SystemMessage, UserMessage } from '../message';

export type ChatParams = {
  readonly system?: SystemMessage | UserMessage;
  readonly input: Message;
  readonly messages?: IMemory;
  readonly functions?: Record<string, Function>;
};

export interface IChatModel {
  chat(
    params: ChatParams,
    onChunk?: (chunk: ModelMessage) => void | Promise<void>
  ): Promise<ModelMessage>;
}
