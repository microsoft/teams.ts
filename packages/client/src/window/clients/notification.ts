import { NotificationType } from '../types';
import { WindowClient } from '../window-client';

export type ShowNotificationParams = {
  message: string;
  notificationType: NotificationType;
};

export class NotificationClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async show(params: ShowNotificationParams) {
    await this.window.send('notifications.showNotification', params);
  }
}
