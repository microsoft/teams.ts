import { IFunction } from '../function';
import { IMemory } from '../memory';
import { Message, IModelMessage, ISystemMessage, IUserMessage } from '../message';

export interface IChatParams {
  readonly system?: ISystemMessage | IUserMessage;
  readonly input: Message;
  readonly messages?: IMemory;
  readonly functions?: Record<string, IFunction>;
}

export interface IChatModel {
  chat(
    params: IChatParams,
    onChunk?: (chunk: IModelMessage) => void | Promise<void>
  ): Promise<IModelMessage>;
}
