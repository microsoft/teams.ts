import type { IListStorage } from '@microsoft/teams.common';

import type { Message } from './message';

export interface IMemory extends IListStorage<Message> {
  collapse(): (Message | undefined) | Promise<Message | undefined>;
}
