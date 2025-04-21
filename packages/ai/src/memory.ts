import { IListStorage } from '@microsoft/teams.common';

import { Message } from './message';

export interface IMemory extends IListStorage<Message> {
  collapse(): (Message | undefined) | Promise<Message | undefined>;
}
