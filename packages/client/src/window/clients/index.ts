import { ILogger } from '@microsoft/teams.common';

import { Context, FrameContext, HostClientType, Theme } from '../types';
import { WindowClient } from '../window-client';
import { Runtime } from '../runtime';

import { AppInitializationClient } from './app-initialization';
import { AppInstallDialogClient } from './app-install-dialog';
import { AuthenticationClient } from './authentication';
import { AppEntityClient } from './app-entity';
import { BarCodeClient } from './bar-code';
import { CalendarClient } from './calendar';
import { CallClient } from './call';
import { ClipboardClient } from './clipboard';
import { ConversationsClient } from './conversation';
import { DialogClient } from './dialog';
import { LocationClient } from './location';
import { PermissionClient } from './permission';
import { NotificationClient } from './notification';
import { MediaClient } from './media';

/**
 * the window client used to execute
 * functions and receive events from the
 * parent window
 */
export class Client {
  readonly window: WindowClient;
  readonly appEntity: AppEntityClient;
  readonly appInitialization: AppInitializationClient;
  readonly appInstallDialog: AppInstallDialogClient;
  readonly authentication: AuthenticationClient;
  readonly barCode: BarCodeClient;
  readonly calendar: CalendarClient;
  readonly call: CallClient;
  readonly clipboard: ClipboardClient;
  readonly conversation: ConversationsClient;
  readonly dialog: DialogClient;
  readonly location: LocationClient;
  readonly permission: PermissionClient;
  readonly notification: NotificationClient;
  readonly media: MediaClient;

  constructor(logger?: ILogger) {
    this.window = new WindowClient(logger);
    this.appEntity = new AppEntityClient(this.window);
    this.appInitialization = new AppInitializationClient(this.window);
    this.appInstallDialog = new AppInstallDialogClient(this.window);
    this.authentication = new AuthenticationClient(this.window);
    this.barCode = new BarCodeClient(this.window);
    this.calendar = new CalendarClient(this.window);
    this.call = new CallClient(this.window);
    this.clipboard = new ClipboardClient(this.window);
    this.conversation = new ConversationsClient(this.window);
    this.dialog = new DialogClient(this.window);
    this.location = new LocationClient(this.window);
    this.permission = new PermissionClient(this.window);
    this.notification = new NotificationClient(this.window);
    this.media = new MediaClient(this.window);
  }

  async initialize() {
    const [frameContext, clientType, runtimeVersion, runtime] =
      await this.window.send<[FrameContext, HostClientType, string, string]>('initialize');

    return {
      frameContext,
      clientType,
      runtimeVersion,
      runtime: JSON.parse(runtime) as Runtime,
    };
  }

  async getContext() {
    const [context] = await this.window.send<[Context]>('getContext');
    return context;
  }

  async deepLink(url: string) {
    await this.window.send('executeDeepLink', url);
  }

  onThemeChange(handler: (theme: Theme) => any) {
    this.window.on('themeChange', handler);
  }
}

export * from './app-initialization';
export * from './app-install-dialog';
export * from './authentication';
export * from './app-entity';
export * from './bar-code';
export * from './calendar';
export * from './call';
export * from './clipboard';
export * from './conversation';
export * from './dialog';
export * from './location';
export * from './permission';
export * from './notification';
export * from './media';
