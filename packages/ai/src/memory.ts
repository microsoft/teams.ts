import { Message } from './message';

export interface IMemory {
  push(message: Message): void | Promise<void>;
  pop(): (Message | undefined) | Promise<Message | undefined>;
  values(): Message[] | Promise<Message[]>;
  length(): number | Promise<number>;
  collapse(): (Message | undefined) | Promise<Message | undefined>;
}
