import {
  Activity,
  ActivityLike,
  cardAttachment,
  ConversationAccount,
  ConversationReference,
  InvokeResponse,
  MessageActivity,
  MessageDeleteActivity,
  MessageUpdateActivity,
  SentActivity,
  toActivityParams,
  TokenExchangeResource,
  TokenExchangeState,
  TokenPostResource,
  TypingActivity,
} from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common/logging';
import { IStorage } from '@microsoft/teams.common/storage';

import { ApiClient, GraphClient } from '../api';
import { ISender, IStreamer } from '../types';

export interface IBaseActivityContextOptions<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>> {
  /**
   * the app id of the bot
   */
  appId: string;

  /**
   * the inbound activity
   */
  activity: T;

  /**
   * the inbound activity conversation reference
   */
  ref: ConversationReference;

  /**
   * the app logger instance
   */
  log: ILogger;

  /**
   * the api client
   */
  api: ApiClient;

  /**
   * the app graph client
   */
  appGraph: GraphClient;

  /**
   * the user graph client
   */
  userGraph: GraphClient;

  /**
   * app storage instance
   */
  storage: IStorage;

  /**
   * whether the user has provided
   * their MSGraph credentials for use
   * via `api.user.*`
   */
  isSignedIn?: boolean;

  /**
   * the default connection name to use for the app
   * @default `graph`
   */
  connectionName: string;

  /**
   * the user token for the activity context
   */
  userToken?: string;

  /**
   * extra data
   */
  [key: string]: any;

  /**
   * call the next event/middleware handler
   */
  next: (
    context?: IActivityContext & TExtraCtx
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;
}

export type IActivityContextOptions<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>> = IBaseActivityContextOptions<T, TExtraCtx> & TExtraCtx;

type SignInOptions = {
  /**
   * The text to display on the oauth card
   * @default `Please Sign In...`
   */
  oauthCardText: string;

  /**
   * The text to display on the sign in button
   * @default `Sign In`
   */
  signInButtonText: string;

  /**
   * The sign in link to use in the card
   */
  signInLink?: string;

  /**
   * The connection name to use
   */
  connectionName?: string;

  /**
   * Construct your own sign in activity
   * By default, we create a simple oauth card with a sign in button.
   * Only use this if you need to fully customize the sign in experience.
   */
  overrideSignInActivity?: (
    tokenExchangeResource?: TokenExchangeResource,
    tokenPostResource?: TokenPostResource,
    signInLink?: string
  ) => ActivityLike;
};

export interface IBaseActivityContext<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>>
  extends IBaseActivityContextOptions<T, TExtraCtx> {
  /**
   * a stream that can emit activity chunks
   */
  stream: IStreamer;

  /**
   * send an activity to the conversation
   * @param activity activity to send
   * @param conversationRef optional conversation reference to send the activity to. By default, it will use the activity's conversation reference.
   */
  send: (activity: ActivityLike, conversationRef?: ConversationReference) => Promise<SentActivity>;

  /**
   * reply to the inbound activity
   * @param activity activity to send
   */
  reply: (activity: ActivityLike) => Promise<SentActivity>;

  /**
   * trigger user signin flow for the activity sender
   * @param options options for the signin flow
   */
  signin: (options?: Partial<SignInOptions>) => Promise<string | undefined>;

  /**
   * sign the activity sender out
   * @param name auth connection name, defaults to `graph`
   */
  signout: (name?: string) => Promise<void>;
}

export type IActivityContext<T extends Activity = Activity, TExtraContext = unknown> =
  IBaseActivityContext<T> & (TExtraContext extends Record<string, any> ? TExtraContext : {});

export class ActivityContext<T extends Activity = Activity, TExtraCtx extends {} = {}>
  implements IBaseActivityContext<T, TExtraCtx> {
  appId!: string;
  activity!: T;
  ref!: ConversationReference;
  log!: ILogger;
  api!: ApiClient;
  appGraph!: GraphClient;
  userGraph!: GraphClient;
  storage!: IStorage;
  stream: IStreamer;
  isSignedIn?: boolean;
  connectionName: string;
  next!: (
    context?: IActivityContext
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;
  [key: string]: any;

  protected _plugin: ISender;
  protected _next?: (
    context?: IActivityContext
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;

  constructor(plugin: ISender, value: IBaseActivityContextOptions) {
    Object.assign(this, value);
    this._plugin = plugin;
    this.stream = plugin.createStream(value.ref);
    this.connectionName = value.connectionName;

    if (value.activity.type === 'message') {
      value.activity = MessageActivity.from(value.activity).toInterface();
    }

    if (value.activity.type === 'messageUpdate') {
      value.activity = MessageUpdateActivity.from(value.activity).toInterface();
    }

    if (value.activity.type === 'messageDelete') {
      value.activity = MessageDeleteActivity.from(value.activity).toInterface();
    }

    if (value.activity.type === 'typing') {
      value.activity = TypingActivity.from(value.activity).toInterface();
    }
  }

  async send(activity: ActivityLike, conversationRef?: ConversationReference) {
    return await this._plugin.send(toActivityParams(activity), conversationRef ?? this.ref);
  }

  async reply(activity: ActivityLike) {
    activity = toActivityParams(activity);
    activity.replyToId = this.activity.id;

    if (activity.type === 'message' && activity.text) {
      const blockQuote = this.buildBlockQuoteForActivity();

      if (blockQuote) {
        activity.text = `${blockQuote}\r\n${activity.text}`;
      }
    }

    return this.send(activity);
  }

  async signin(options?: Partial<SignInOptions>) {
    const {
      oauthCardText,
      signInButtonText,
      connectionName,
      signInLink,
      overrideSignInActivity
    }: SignInOptions = {
      oauthCardText: 'Please Sign In...',
      signInButtonText: 'Sign In',
      ...options,
    };

    const convo = { ...this.ref };

    try {
      const res = await this.api.users.token.get({
        channelId: this.activity.channelId,
        userId: this.activity.from.id,
        connectionName: connectionName || this.connectionName,
      });

      return res.token;
    } catch (err) {
      // noop
    }

    const tokenExchangeState: TokenExchangeState = {
      connectionName: connectionName || this.connectionName,
      conversation: convo,
      relatesTo: this.activity.relatesTo,
      msAppId: this.appId,
    };

    if (this.activity.conversation.isGroup) {
      // create new 1:1 conversation with user to do SSO
      // because groupchats don't support it.
      const res = await this.api.conversations.create({
        tenantId: this.activity.conversation.tenantId,
        isGroup: false,
        bot: { id: this.activity.recipient.id },
        members: [this.activity.from],
      });

      await this.send({ type: 'message', text: oauthCardText });
      convo.conversation = { id: res.id } as ConversationAccount;
    }

    const state = Buffer.from(JSON.stringify(tokenExchangeState)).toString(
      'base64'
    );
    const resource = await this.api.bots.signIn.getResource({ state });

    await this.send(
      overrideSignInActivity?.(
        resource.tokenExchangeResource,
        resource.tokenPostResource,
        resource.signInLink
      ) ?? {
        type: 'message',
        inputHint: 'acceptingInput',
        recipient: this.activity.from,
        conversation: convo.conversation,
        attachments: [
          cardAttachment('oauth', {
            text: oauthCardText,
            connectionName: connectionName || this.connectionName,
            tokenExchangeResource: resource.tokenExchangeResource,
            tokenPostResource: resource.tokenPostResource,
            buttons: [
              {
                type: 'signin',
                title: signInButtonText,
                value: signInLink || resource.signInLink,
              },
            ],
          }),
        ],
      }, convo
    );
  }

  async signout(connectionName?: string) {
    await this.api.users.token.signOut({
      channelId: this.activity.channelId,
      userId: this.activity.from.id,
      connectionName: connectionName || this.connectionName,
    });
  }

  toInterface(): IActivityContext {
    return {
      activity: this.activity,
      api: this.api,
      appGraph: this.appGraph,
      userGraph: this.userGraph,
      appId: this.appId,
      log: this.log,
      ref: this.ref,
      storage: this.storage,
      stream: this.stream,
      isSignedIn: this.isSignedIn,
      connectionName: this.connectionName,
      userToken: this.userToken,
      next: this.next.bind(this),
      reply: this.reply.bind(this),
      send: this.send.bind(this),
      signin: this.signin.bind(this),
      signout: this.signout.bind(this),
    };
  }

  private buildBlockQuoteForActivity(): string | null {
    if (this.activity.type === 'message' && this.activity.text) {
      const maxLength = 120;
      const truncatedText =
        this.activity.text.length > maxLength
          ? `${this.activity.text.substring(0, maxLength)}...`
          : this.activity.text;

      return `<blockquote itemscope="" itemtype="http://schema.skype.com/Reply" itemid="${this.activity.id}">
<strong itemprop="mri" itemid="${this.activity.from.id}">${this.activity.from.name}</strong><span itemprop="time" itemid="${this.activity.id}"></span>
<p itemprop="preview">${truncatedText}</p>
</blockquote>`;
    } else {
      this.log.debug('Skipping building blockquote for activity type:', this.activity.type);
    }

    return null;
  }
}
