import { WindowClient } from '../window-client';

export class AppEntityClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async select(threadId: string, categories: string[], subEntityId: string) {
    await this.window.send('appEntity.selectAppEntity', threadId, categories, subEntityId);
  }
}
