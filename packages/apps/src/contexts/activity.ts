import {
  Activity,
  ActivityLike,
  ActivityParams,
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
  TypingActivity,
} from '@microsoft/teams.api';
import { Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';
import { FilesAccessor } from '../files/files-accessor';
import { IFilesAccessor } from '../files/types';
import { OAuthSignInOptions, startOAuthSignIn } from '../oauth';
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

  /**
   * Validates that a connection used by a deprecated OAuth helper is registered
   * and was named when registered flows require it.
   * @internal
   */
  validateOAuthConnection?: (
    connectionName: string,
    connectionNameProvided: boolean
  ) => void;

  /**
   * Records pending OAuth attribution after the deprecated `signin()` helper
   * sends a card for a registered connection.
   * @internal
   */
  onOAuthSignInInitiated?: (
    context: IActivityContext,
    connectionName: string,
    supportsSso: boolean
  ) => void | Promise<void>;
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
   * the app's shared HTTP client, used for outbound calls that are not part of the Teams API surface
   * (e.g. downloading an inbound file's bytes)
   * They inherit the app's User-Agent, middleware, and configuration.
   */
  client?: HttpClient;

  /**
   * the app graph client
   */
  appGraph: GraphClient;

  /**
   * the user graph client
   *
   * @deprecated Use a registered OAuth flow to acquire the token needed by the
   * Microsoft Graph operation. This property remains available for compatibility.
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
   *
   * @deprecated Use `app.getOAuthFlow(connectionName).isSignedIn(ctx)`.
   */
  isSignedIn?: boolean;

  /**
   * the default connection name to use for the app
   * @default `graph`
   * @deprecated Register and retain the required `OAuthFlow` explicitly.
   */
  connectionName: string;

  /**
   * the user token for the activity context
   *
   * @deprecated Use `app.getOAuthFlow(connectionName).getToken(ctx)`.
   */
  userToken?: string;
}

export type IActivityContextOptions<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>> = IBaseActivityContextOptions<T> & TExtraCtx;

export interface IBaseActivityContext<T extends Activity = Activity, TExtraCtx extends Record<string, any> = Record<string, any>>
  extends IBaseActivityContextOptions<T> {
  /**
   * a stream that can emit activity chunks
   */
  stream: IStreamer;

  /**
   * the uploaded files on the current inbound activity, i.e. `contentType: file.download.info` subset of `activity.attachments`, mapped to `IncomingFile`. See {@link IFilesAccessor}.
   */
  files: IFilesAccessor;

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
   * @deprecated Register a connection with `app.addOAuthFlow(...)` and call
   * `flow.signIn(ctx, options)` instead.
   */
  signin: (options?: OAuthSignInOptions) => Promise<string | undefined>;

  /**
   * sign the activity sender out
   * @param name auth connection name, defaults to `graph`
   * @deprecated Register a connection with `app.addOAuthFlow(...)` and call
   * `flow.signOut(ctx)` instead.
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
  files!: IFilesAccessor;
  isSignedIn?: boolean;
  connectionName: string;
  next!: (
    context?: IActivityContext
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;
  [key: string]: any;

  private activitySender: IActivitySender;
  private readonly validateOAuthConnection?: IActivityContextConstructorArgs['validateOAuthConnection'];
  private readonly onOAuthSignInInitiated?: IActivityContextConstructorArgs['onOAuthSignInInitiated'];

  constructor(value: IBaseActivityContextOptions & IActivityContextConstructorArgs) {
    // Extract activitySender and next before Object.assign to avoid overwriting methods
    const {
      activitySender,
      next,
      validateOAuthConnection,
      onOAuthSignInInitiated,
      ...rest
    } = value;

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
    this.validateOAuthConnection = validateOAuthConnection;
    this.onOAuthSignInInitiated = onOAuthSignInInitiated;
    this.next = next;
    this.stream = activitySender.createStream(value.ref);
    this.connectionName = value.connectionName;
    this.files = new FilesAccessor(this.activity, this.log, value.client);
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

  async signin(options: OAuthSignInOptions = {}) {
    const connectionNameProvided = options.connectionName !== undefined;
    const connectionName = options.connectionName ?? this.connectionName;
    this.validateOAuthConnection?.(connectionName, connectionNameProvided);

    return startOAuthSignIn(
      this.toInterface(),
      connectionName,
      options,
      this.onOAuthSignInInitiated
    );
  }

  async signout(connectionName?: string) {
    this.validateOAuthConnection?.(
      connectionName ?? this.connectionName,
      connectionName !== undefined
    );
    await this.api.users.signOut({
      channelId: this.activity.channelId,
      userId: this.activity.from.id,
      connectionName: connectionName ?? this.connectionName,
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
      files: this.files,
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
