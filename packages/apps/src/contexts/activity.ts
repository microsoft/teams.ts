import {
  Activity,
  ActivityLike,
  ActivityParams,
  cardAttachment,
  ConversationReference,
  DeprecatedInputActivity,
  InvokeResponse,
  IMessageActivity,
  MessageActivity,
  MessageActivityInput,
  MessageDeleteActivity,
  MessageUpdateActivity,
  SentActivity,
  toActivityParams,
  TokenExchangeResource,
  TokenExchangeState,
  TokenPostResource,
  TypingActivity,
} from '@microsoft/teams.api';
import { ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';
import { TurnStateContainer } from '../state';
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
   *
   * @deprecated Use `state` for conversation or user state. Applications that
   * need general persistence should own and use their storage provider directly.
   */
  storage: IStorage;

  /**
   * Conversation and user state loaded for this activity turn.
   *
   * This is undefined when state is disabled or the activity has no conversation ID.
   * Do not retain the container after the handler completes; its scopes are sealed.
   */
  state?: TurnStateContainer;

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
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;

  /**
   * reply to the inbound activity, automatically quoting the inbound message
   * @param activity activity to send
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  reply(activity: ActivityLike): Promise<SentActivity>;
  reply(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;

  /**
   * send a reply quoting a specific message by ID
   * @param messageId the ID of the message to quote
   * @param activity activity to send
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  quote(messageId: string, activity: DeprecatedInputActivity): Promise<SentActivity>;
  quote(messageId: string, activity: ActivityLike): Promise<SentActivity>;
  quote(messageId: string, activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;

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

type MessageActivityParams = ActivityParams & Partial<IMessageActivity> & { type: 'message' };

export class ActivityContext<T extends Activity = Activity, TExtraCtx extends {} = {}>
  implements IBaseActivityContext<T, TExtraCtx> {
  appId!: string;
  activity!: T;
  ref!: ConversationReference;
  log!: ILogger;
  api!: ApiClient;
  appGraph!: GraphClient;
  userGraph!: GraphClient;
  /**
   * @deprecated Use `state` for conversation or user state.
   */
  storage!: IStorage;
  state?: TurnStateContainer;
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

    // Rehydrate the inbound payload into its activity instance so computed
    // accessors (channel/team/meeting/notification/tenant) resolve. Do NOT
    // call `toInterface()` here: it flattens the instance to a plain object via
    // `Object.assign`, which drops the prototype getters and makes those
    // accessors silently return `undefined`.
    if (rest.activity.type === 'message') {
      rest.activity = MessageActivity.from(rest.activity);
    }

    if (rest.activity.type === 'messageUpdate') {
      rest.activity = MessageUpdateActivity.from(rest.activity);
    }

    if (rest.activity.type === 'messageDelete') {
      rest.activity = MessageDeleteActivity.from(rest.activity);
    }

    if (rest.activity.type === 'typing') {
      rest.activity = TypingActivity.from(rest.activity);
    }

    // SECURITY: drop any keys in `rest` that would shadow prototype methods.
    // Plugin-supplied context can add new properties via the [key: string]: any
    // index signature, but must not overwrite methods that callers rely on for
    // trust (send, reply, quote, signin, signout).
    for (const key of PROTECTED_METHOD_NAMES) {
      if (key in rest) {
        delete (rest as Record<string, unknown>)[key];
      }
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
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  async send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference) {
    const params = toActivityParams(activity);

    if (this.shouldOutboundBeAutoTargeted(params, conversationRef)) {
      this.applyTargetedRecipient(params);
    }

    if (this.isTargetedOutbound(params)) {
      this.stripQuotedReplyMetadata(params);

      // `targetedMessageInfo` points at the original targeted inbound message for prompt preview.
      // Do not add it for generic targeted sends; Teams can reject it if the referenced activity
      // was not itself delivered as a targeted message.
      if (this.isIncomingTargeted()) {
        this.addTargetedMessageInfo(params);
      }
    }

    const ref = conversationRef ?? this.ref;
    return this.activitySender.send(params, ref);
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
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  async reply(activity: ActivityLike): Promise<SentActivity>;
  async reply(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  async reply(activity: ActivityLike | DeprecatedInputActivity) {
    if (this.activity.id) {
      return this.quote(this.activity.id, activity);
    }
    return this.send(activity);
  }

  /**
   * Send a message to the conversation with a quoted message reference prepended to the text.
   * Teams renders the quoted message as a preview bubble above the response text.
   * @param messageId - The ID of the message to quote
   * @param activity - The activity to send — a quote placeholder for messageId will be prepended to its text
   */
  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async quote(messageId: string, activity: DeprecatedInputActivity): Promise<SentActivity>;
  async quote(messageId: string, activity: ActivityLike): Promise<SentActivity>;
  async quote(messageId: string, activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  async quote(messageId: string, activity: ActivityLike | DeprecatedInputActivity) {
    activity = toActivityParams(activity);

    if (activity.type === 'message') {
      const message = MessageActivityInput.from(activity);
      message.prependQuote(messageId);
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
      const res = await this.api.users.getToken({
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

    const state = Buffer.from(JSON.stringify(tokenExchangeState)).toString(
      'base64'
    );
    const resource = await this.api.bots.signIn.getResource({ state });

    // In group conversations (group chats and channels) the OAuth card is sent as a
    // targeted message so it is visible only to the requesting user rather than the
    // whole conversation.
    const isChannel = this.activity.conversation.conversationType === 'channel';
    const isGroup = this.activity.conversation.isGroup === true;
    const recipient = isGroup
      ? { ...this.activity.from, isTargeted: true }
      : this.activity.from;

    // Channels cannot perform the silent SSO token exchange, so omit the token
    // exchange resource there to render the sign-in button (OAuth card flow). This is
    // applied to both the default card and any custom override so an override cannot
    // accidentally trigger an exchange that Teams can't complete in a channel.
    const tokenExchangeResource = isChannel
      ? undefined
      : resource.tokenExchangeResource;

    await this.send(
      overrideSignInActivity?.(
        tokenExchangeResource,
        resource.tokenPostResource,
        resource.signInLink
      ) ?? {
        type: 'message',
        recipient,
        attachments: [
          cardAttachment('oauth', {
            text: oauthCardText,
            connectionName: connectionName || this.connectionName,
            tokenExchangeResource,
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
    await this.api.users.signOut({
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
      state: this.state,
      stream: this.stream,
      isSignedIn: this.isSignedIn,
      connectionName: this.connectionName,
      userToken: this.userToken,
      next: this.next.bind(this),
      reply: this.reply.bind(this),
      quote: this.quote.bind(this),
      send: this.send.bind(this),
      signin: this.signin.bind(this),
      signout: this.signout.bind(this),
    };
  }

  private isIncomingTargeted() {
    return this.activity.recipient?.isTargeted === true;
  }

  private shouldOutboundBeAutoTargeted(params: ActivityParams, conversationRef?: ConversationReference) {
    if (params.type !== 'message') {
      return false;
    }

    if (!this.isIncomingTargeted()) {
      return false;
    }

    if (!this.isSameConversation(conversationRef)) {
      return false;
    }

    return !params.id && !params.recipient;
  }

  private isSameConversation(conversationRef?: ConversationReference) {
    return !conversationRef || conversationRef.conversation?.id === this.ref.conversation?.id;
  }

  private applyTargetedRecipient(params: ActivityParams) {
    params.recipient = {
      ...this.activity.from,
      isTargeted: true,
    };
  }

  private isTargetedOutbound(params: ActivityParams): params is MessageActivityParams {
    return params.type === 'message' && params.recipient?.isTargeted === true;
  }

  private stripQuotedReplyMetadata(params: MessageActivityParams) {
    if (params.entities) {
      params.entities = params.entities.filter((e) => e.type !== 'quotedReply');
    }

    if (params.text) {
      params.text = params.text.replace(`<quoted messageId="${this.activity.id}"/>`, '').trim();
    }
  }

  private addTargetedMessageInfo(params: MessageActivityParams) {
    if (params.entities?.some((e) => e.type === 'targetedMessageInfo')) {
      return;
    }

    if (!params.entities) {
      params.entities = [];
    }

    params.entities.push({
      type: 'targetedMessageInfo',
      messageId: this.activity.id,
    });
  }

}

// Names of prototype methods (and getters) on ActivityContext that must not be
// shadowed by instance properties from external context. Computed once from the
// prototype chain at module load, so any method or accessor added to the class
// in the future is protected automatically with no maintenance.
const PROTECTED_METHOD_NAMES: ReadonlySet<string> = (() => {
  const names = new Set<string>();
  let proto: object | null = ActivityContext.prototype;
  while (proto && proto !== Object.prototype) {
    for (const name of Object.getOwnPropertyNames(proto)) {
      if (name === 'constructor') continue;
      const descriptor = Object.getOwnPropertyDescriptor(proto, name);
      if (!descriptor) continue;
      if (typeof descriptor.value === 'function' || typeof descriptor.get === 'function') {
        names.add(name);
      }
    }
    proto = Object.getPrototypeOf(proto);
  }
  return names;
})();
