import { NotificationType } from '../types';
import { WindowClient } from '../window-client';

export interface ShowNotificationParameters {
  message: string;
  notificationType: NotificationType;
}

export class NotificationClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async show(params: ShowNotificationParameters) {
    await this.window.send('notifications.showNotification', params);
  }
}
