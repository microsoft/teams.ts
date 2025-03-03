import { Permission } from '../types';
import { WindowClient } from '../window-client';

export class PermissionClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async has(permission: Permission) {
    const [ok] = await this.window.send<[boolean]>('permissions.has', permission);

    return ok;
  }

  async request(permission: Permission) {
    const [ok] = await this.window.send<[boolean]>('permissions.request', permission);

    return ok;
  }
}
