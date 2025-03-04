import * as http from '@microsoft/spark.common/http';
import { Logger, ConsoleLogger } from '@microsoft/spark.common/logging';
import { Credentials } from '@microsoft/spark.api';

import * as window from './window';
import { Context, mapContext } from './context';

export type AppOptions = Partial<Credentials> & {
  /**
   * the app base url
   */
  readonly baseUrl?: string;

  /**
   * logger instance to use
   */
  readonly logger?: Logger;
};

interface AppConnect {
  /**
   * the app id
   */
  readonly id: string;

  /**
   * the app name
   */
  readonly name: {
    readonly short: string;
    readonly full: string;
  };
}

export class App {
  readonly options: AppOptions;
  readonly http: http.Client;
  readonly parent: window.Client;

  /**
   * the apps logger
   */
  get log() {
    return this._log;
  }
  protected _log: Logger;

  /**
   * the app id
   */
  get id() {
    return this._id;
  }
  protected _id?: string;

  /**
   * the app name
   */
  get name() {
    return this._name;
  }
  protected _name?: string;

  /**
   * the app/window context
   */
  get context() {
    if (!this._context) {
      throw new Error('app not connected');
    }

    return this._context;
  }
  protected _context?: Context;

  /**
   * the date/time when the app
   * successfully connected
   */
  get connectedAt() {
    return this._connectedAt;
  }
  protected _connectedAt?: Date;

  /**
   * the sdk runtime
   */
  get runtime() {
    if (!this._runtime) {
      throw new Error('app not connected');
    }

    return this._runtime;
  }
  protected _runtime?: window.Runtime;

  constructor(options?: AppOptions) {
    this.options = options || {};
    this._log = options?.logger || new ConsoleLogger('@spark/client');
    this.http = new http.Client({ baseUrl: options?.baseUrl });
    this.parent = new window.Client(this.log);
  }

  /**
   * connect to the host app
   */
  async connect() {
    if (this.connectedAt) {
      return this.context;
    }

    const res = await this.http.get<AppConnect>('/');
    this._id = res.data.id;
    this._name = res.data.name.short;

    if (this._name) {
      this._log = this.options.logger || new ConsoleLogger(`@spark/${this._name}`);
    }

    const { runtime } = await this.parent.initialize();
    this._runtime = runtime;

    const context = await this.parent.getContext();
    this._context = mapContext(context);

    this._connectedAt = new Date();
    return this.context;
  }

  /**
   * execute a server-side function
   * @param name the unique function name
   * @param data the data to send
   * @returns the function response
   */
  async exec<T = any>(name: string, data?: any) {
    const res = await this.http.post<T>(`/api/functions/${name}`, data, {
      headers: {
        'x-spark-app-id': this.context.app.id,
        'x-spark-app-session-id': this.context.app.sessionId,
        'x-spark-app-client-id': this.options.clientId,
        'x-spark-app-client-secret':
          'clientSecret' in this.options ? this.options.clientSecret : undefined,
        'x-spark-app-tenant-id': 'tenantId' in this.options ? this.options.tenantId : undefined,
        'x-spark-tenant-id': this.context.user?.tenant?.id,
        'x-spark-user-id': this.context.user?.id,
        'x-spark-team-id': this.context.team?.internalId,
        'x-spark-message-id': this.context.app.parentMessageId,
        'x-spark-channel-id': this.context.channel?.id,
        'x-spark-chat-id': this.context.chat?.id,
        'x-spark-meeting-id': this.context.meeting?.id,
        'x-spark-page-id': this.context.page.id,
        'x-spark-sub-page-id': this.context.page.subPageId,
      },
    });

    return res.data;
  }

  /**
   * get the auth user
   */
  async getUser() {
    const res = await this.parent.authentication.getUser();
    return res;
  }

  /**
   * get the auth users token
   */
  async getUserToken(params?: window.AuthTokenRequestParams) {
    const token = await this.parent.authentication.getToken(params);
    return token;
  }

  /**
   * get chat members
   */
  async getChatMembers() {
    const members = await this.parent.conversation.getMembers();
    return members;
  }
}
