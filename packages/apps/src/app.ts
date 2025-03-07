import { ILogger, ConsoleLogger } from '@microsoft/spark.common/logging';
import { LocalStorage, IStorage } from '@microsoft/spark.common/storage';
import { EventEmitter } from '@microsoft/spark.common/events';
import * as http from '@microsoft/spark.common/http';

import {
  IToken,
  Credentials,
  ConversationReference,
  JsonWebToken,
  toActivityParams,
  ActivityLike,
  RemoveMentionsTextOptions,
} from '@microsoft/spark.api';

import pkg from '../package.json';

import * as manifest from './manifest';
import * as middleware from './middleware';
import { Router } from './router';
import { IEvents } from './events';
import { HttpPlugin } from './plugins';
import { OAuthSettings } from './oauth';
import { AppClient } from './api';
import { signin } from './events/signin';
import { error } from './events/error';
import { IPlugin } from './types';

import { $process } from './app.process';
import { getPlugin, plugin } from './app.plugins';
import { message, on, use } from './app.routing';
import { configTab, func, tab } from './app.embed';
import { onTokenExchange, onVerifyState } from './app.oauth';
import {
  event,
  onActivityError,
  onActivityReceived,
  onActivitySent,
  onBeforeActivitySent,
  onError,
} from './app.events';

/**
 * App initialization options
 */
export type AppOptions = Partial<Credentials> & {
  /**
   * http client or client options used to make api requests
   */
  readonly client?: http.Client | http.ClientOptions | (() => http.Client);

  /**
   * logger instance to use
   */
  readonly logger?: ILogger;

  /**
   * storage instance to use
   */
  readonly storage?: IStorage;

  /**
   * plugins to extend the apps functionality
   */
  readonly plugins?: Array<IPlugin>;

  /**
   * OAuth Settings
   */
  readonly oauth?: OAuthSettings;

  /**
   * The apps manifest
   */
  readonly manifest?: Partial<manifest.Manifest>;

  /**
   * Activity Options
   */
  readonly activity?: AppActivityOptions;
};

export type AppActivityOptions = {
  readonly mentions?: {
    /**
     * Automatically remove `<at>...</at>` mention
     * from inbound activity `text`
     */
    readonly removeText?: boolean | RemoveMentionsTextOptions;
  };
};

export type AppTokens = {
  /**
   * bot token used to send activities
   */
  bot?: IToken;

  /**
   * graph token used to query the graph api
   */
  graph?: IToken;
};

/**
 * The orchestrator for receiving/sending activities
 */
export class App {
  readonly api: AppClient;
  readonly log: ILogger;
  readonly http: HttpPlugin;
  readonly client: http.Client;
  readonly storage: IStorage;
  readonly credentials?: Credentials;

  /**
   * the apps id
   */
  get id() {
    return this.tokens.bot?.appId || this.tokens.graph?.appId;
  }

  /**
   * the apps name
   */
  get name() {
    return this.tokens.bot?.appDisplayName || this.tokens.graph?.appDisplayName;
  }

  /**
   * the apps manifest
   */
  get manifest(): Partial<manifest.Manifest> {
    return {
      id: this.id,
      name: {
        short: this.name || '??',
        full: this.name || '??',
        ...this._manifest.name,
      },
      bots: [
        {
          botId: this.id || '??',
          scopes: ['personal'],
        },
      ],
      webApplicationInfo: {
        id: this.credentials?.clientId || '??',
        resource: `api://\${{BOT_DOMAIN}}/${this.credentials?.clientId || '??'}`,
        ...this._manifest.webApplicationInfo,
      },
      ...this._manifest,
    };
  }
  protected readonly _manifest: Partial<manifest.Manifest>;

  /**
   * the apps auth tokens
   */
  get tokens() {
    return this._tokens;
  }
  protected _tokens: AppTokens = {};

  protected plugins: Array<IPlugin> = [];
  protected router = new Router();
  protected tenantTokens = new LocalStorage<string>(undefined, { max: 20000 });
  protected events = new EventEmitter<IEvents>();
  protected startedAt?: Date;
  protected port?: number;

  private readonly _userAgent = `spark[apps]/${pkg.version}`;

  constructor(readonly options: AppOptions = {}) {
    this.log = this.options.logger || new ConsoleLogger('@spark/app');
    this.storage = this.options.storage || new LocalStorage();
    this._manifest = this.options.manifest || {};

    if (!options.client) {
      this.client = new http.Client({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else if (typeof options.client === 'function') {
      this.client = options.client().clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else if ('request' in options.client) {
      this.client = options.client.clone({
        headers: {
          'User-Agent': this._userAgent,
        },
      });
    } else {
      this.client = new http.Client({
        ...options.client,
        headers: {
          ...options.client.headers,
          'User-Agent': this._userAgent,
        },
      });
    }

    this.api = new AppClient(
      'https://smba.trafficmanager.net/teams',
      this.client.clone({ token: () => this._tokens.bot }),
      this.client.clone({ token: () => this._tokens.graph })
    );

    const clientId = this.options.clientId || process.env.CLIENT_ID;
    const clientSecret =
      ('clientSecret' in this.options ? this.options.clientSecret : undefined) ||
      process.env.CLIENT_SECRET;
    const tenantId =
      ('tenantId' in this.options ? this.options.tenantId : undefined) || process.env.TENANT_ID;
    const token = 'token' in this.options ? this.options.token : undefined;

    if (clientId && clientSecret) {
      this.credentials = {
        clientId,
        clientSecret,
        tenantId,
      };
    }

    if (clientId && token) {
      this.credentials = {
        clientId,
        tenantId,
        token,
      };
    }

    const plugins = this.options.plugins || [];
    let httpPlugin = plugins.find((p) => p.name === 'http');

    if (!httpPlugin) {
      httpPlugin = new HttpPlugin();
      plugins.unshift(httpPlugin);
    }

    if (!(httpPlugin instanceof HttpPlugin)) {
      throw new Error('http plugin must be of type `HttpPlugin`');
    }

    this.http = httpPlugin;

    for (const plugin of plugins) {
      this.plugin(plugin);
    }

    if (this.options.activity?.mentions?.removeText) {
      const options = this.options.activity?.mentions?.removeText;
      this.use(middleware.removeMentionsText(typeof options === 'boolean' ? {} : options));
    }

    // default event handlers
    this.on('signin.token-exchange', this.onTokenExchange.bind(this));
    this.on('signin.verify-state', this.onVerifyState.bind(this));
    this.event('signin', signin);
    this.event('error', error);
  }

  /**
   * start the app
   * @param port port to listen on
   */
  async start(port?: number | string) {
    this.port = +(port || process.env.PORT || 3000);

    try {
      if (this.credentials) {
        const botResponse = await this.api.bots.token.get(this.credentials);
        const graphResponse = await this.api.bots.token.getGraph(this.credentials);
        this._tokens = {
          bot: new JsonWebToken(botResponse.access_token),
          graph: new JsonWebToken(graphResponse.access_token),
        };
      }

      for (const plugin of this.plugins) {
        if (plugin.onStart) {
          await plugin.onStart(this.port);
        }
      }

      this.events.emit('start', this.log);
      this.startedAt = new Date();
    } catch (err: any) {
      this.events.emit('error', { err, log: this.log });
    }
  }

  /**
   * send an activity proactively
   * @param conversationId the conversation to send to
   * @param activity the activity to send
   */
  async send(conversationId: string, activity: ActivityLike) {
    if (!this.id || !this.name) {
      throw new Error('app not started');
    }

    const ref: ConversationReference = {
      channelId: 'msteams',
      serviceUrl: this.api.serviceUrl,
      bot: {
        id: this.id,
        name: this.name,
        role: 'bot',
      },
      conversation: {
        id: conversationId,
        conversationType: 'personal',
      },
    };

    const res = await this.http.onSend(toActivityParams(activity), ref);
    return res;
  }

  /**
   * subscribe to an event
   * @param name event to subscribe to
   * @param cb callback to invoke
   */
  on = on;

  /**
   * subscribe to a message event for a specific pattern
   * @param pattern pattern to match against message text
   * @param cb callback to invoke
   */
  message = message;

  /**
   * register a middleware
   * @param cb callback to invoke
   */
  use = use;

  /**
   * subscribe to an event
   * @param name the event to subscribe to
   * @param cb the callback to invoke
   */
  event = event;

  /**
   * add a plugin
   * @param plugin plugin to add
   */
  plugin = plugin;

  /**
   * get a plugin
   */
  getPlugin = getPlugin;

  /**
   * add/update a function that can be called remotely
   * @param name The unique function name
   * @param cb The callback to handle the function
   */
  function = func;

  /**
   * add/update a static tab.
   * the tab will be hosted at
   * `http://localhost:{{PORT}}/tabs/{{name}}` or `https://{{BOT_DOMAIN}}/tabs/{{name}}`
   * @remark scopes default to `personal`
   * @param name A unique identifier for the entity which the tab displays.
   * @param path The path to the web `dist` folder.
   */
  tab = tab;

  /**
   * add a configurable tab
   * @remark scopes defaults to `team`
   * @param url The url to use when configuring the tab.
   */
  configTab = configTab;

  /**
   * activity handler called when an inbound activity is received
   * @param sender the plugin to use for sending activities
   * @param event the received activity event
   */
  process = $process;

  ///
  /// OAuth
  ///

  protected onTokenExchange = onTokenExchange;
  protected onVerifyState = onVerifyState;

  ///
  /// Events
  ///

  protected onError = onError;
  protected onActivityError = onActivityError;
  protected onActivityReceived = onActivityReceived;
  protected onActivitySent = onActivitySent;
  protected onBeforeActivitySent = onBeforeActivitySent;
}
