import {
  Activity,
  ActivityLike,
  cardAttachment,
  ConversationAccount,
  ConversationReference,
  InvokeResponse,
  IMessageActivity,
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
import { IStreamer } from '../types';
import { IActivitySender } from '../types/plugin/sender';

/**
 * Constructor arguments for ActivityContext
 * Internal implementation details not exposed in public interface
 */
export interface IActivityContextConstructorArgs {
  /**
   * activity sender for sending activities and creating streams
   */
  activitySender: IActivitySender;

  /**
   * call the next event/middleware handler
   */
  next: (
    context?: IActivityContext
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;
}

/**
 * Base activity context options
 * These are the public properties exposed on the context
 */
export interface IBaseActivityContextOptions<T extends Activity = Activity> {
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
}

export type IActivityContextOptions<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>> = IBaseActivityContextOptions<T> & TExtraCtx;

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
  extends IBaseActivityContextOptions<T> {
  /**
   * a stream that can emit activity chunks
   */
  stream: IStreamer;

  /**
   * call the next event/middleware handler
   */
  next: (
    context?: IActivityContext & TExtraCtx
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;

  /**
   * send an activity to the conversation
   * @param activity activity to send
   * @param conversationRef optional conversation reference to send the activity to. By default, it will use the activity's conversation reference.
   */
  send: (activity: ActivityLike, conversationRef?: ConversationReference) => Promise<SentActivity>;

  /**
   * reply to the inbound activity, automatically quoting the inbound message
   * @param activity activity to send
   */
  reply: (activity: ActivityLike) => Promise<SentActivity>;

  /**
   * send a reply quoting a specific message by ID
   * @param messageId the ID of the message to quote
   * @param activity activity to send
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsQuotedReplies
   */
  quoteReply: (messageId: string, activity: ActivityLike) => Promise<SentActivity>;

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
  stream!: IStreamer;
  isSignedIn?: boolean;
  connectionName: string;
  next!: (
    context?: IActivityContext
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;
  [key: string]: any;

  private activitySender: IActivitySender;

  constructor(value: IBaseActivityContextOptions & IActivityContextConstructorArgs) {
    // Extract activitySender and next before Object.assign to avoid overwriting methods
    const { activitySender, next, ...rest } = value;

    if (rest.activity.type === 'message') {
      rest.activity = MessageActivity.from(rest.activity).toInterface();
    }

    if (rest.activity.type === 'messageUpdate') {
      rest.activity = MessageUpdateActivity.from(rest.activity).toInterface();
    }

    if (rest.activity.type === 'messageDelete') {
      rest.activity = MessageDeleteActivity.from(rest.activity).toInterface();
    }

    if (rest.activity.type === 'typing') {
      rest.activity = TypingActivity.from(rest.activity).toInterface();
    }

    Object.assign(this, rest);
    this.activitySender = activitySender;
    this.next = next;
    this.stream = activitySender.createStream(value.ref);
    this.connectionName = value.connectionName;
  }

  /**
   * send an activity in the current conversation without quoting.
   *
   * In channels, sends to the current thread. In scopes that do not
   * support threading (group chat, meetings), sends as a normal message.
   * To send with a visual quote of the inbound message, use {@link reply}.
   *
   * @param activity the activity to send
   * @param conversationRef optional conversation reference to send to a different conversation or thread
   */
  async send(activity: ActivityLike, conversationRef?: ConversationReference) {
    const params = toActivityParams(activity);

    // For targeted send, set the recipient if not already set.
    // For targeted update (params.id exists), we don't update recipient since recipient cannot be changed.
    if (params.type === 'message' && params.recipient?.isTargeted && !params.id) {
      if (!params.recipient) {
        params.recipient = this.activity.from;
      }
    }

    return await this.activitySender.send(params, conversationRef ?? this.ref);
  }

  /**
   * send an activity in the current conversation with a visual quote
   * of the inbound message.
   *
   * In channels, sends to the current thread with a quoted reply.
   * In other scopes, sends with a quoted reply.
   * To send without quoting, use {@link send}.
   *
   * @param activity the activity to send
   */
  async reply(activity: ActivityLike) {
    if (this.activity.id) {
      return this.quoteReply(this.activity.id, activity);
    }
    return this.send(activity);
  }

  /**
   * Send a reply quoting a specific message by ID.
   * @param messageId - The ID of the message to quote
   * @param activity - The activity to send
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsQuotedReplies
   */
  async quoteReply(messageId: string, activity: ActivityLike) {
    activity = toActivityParams(activity);

    if (activity.type === 'message') {
      const message = MessageActivity.from(activity as IMessageActivity);
      message.prependQuotedReply(messageId);
      return this.send(message);
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
      quoteReply: this.quoteReply.bind(this),
      send: this.send.bind(this),
      signin: this.signin.bind(this),
      signout: this.signout.bind(this),
    };
  }

}
