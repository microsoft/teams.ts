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
  TokenStatus,
  toActivityParams,
  TypingActivity,
} from '@microsoft/teams.api';
import { EventEmitter, Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';
import { BotApiCredential, GraphCredential } from '../files/download';
import { FilesAccessor } from '../files/files-accessor';
import { IFilesAccessor } from '../files/types';
import { OAuthSignInOptions, startOAuthSignIn } from '../oauth';
import { Plan } from '../plan';
import { TurnStateContainer } from '../state';
import { IStreamer, ReplyMode, ReplyOptions } from '../types';
import { IActivitySender } from '../types/plugin/sender';

/**
 * Constructor arguments for ActivityContext
 * Internal implementation details not exposed in public interface
 */
export interface IActivityContextConstructorArgs {
  /**
   * Graph credential used by the file path, selected per actor and resolved at fetch time.
   *
   * Constructor-only, and deliberately absent from {@link IBaseActivityContextOptions}: it exists so `ctx.files` can reach bytes the pre-authorized download URL cannot, and a handler has no reason to hold it. Declaring it here keeps it off the public context type and out of the instance, rather than advertising a property that is always `undefined`.
   */
  filesCredential?: GraphCredential;

  /**
   * Bot API credential used by the file path to read inline images, resolved at fetch time.
   *
   * Constructor-only for the same reason as {@link filesCredential}.
   */
  filesBotApiCredential?: BotApiCredential;

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

  /**
   * Gets corrected connection status through the app's OAuth registry.
   * @internal
   */
  getOAuthConnectionStatus?: (
    context: IActivityContext
  ) => Promise<TokenStatus[]>;

  /**
   * The app's `activity.replyMode` setting, read by `reply` when the call passes no `replyMode`.
   * @default 'combined'
   * @internal
   */
  replyMode?: ReplyMode;
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
   *
   * The first message of the stream goes to the reply chain (thread) where `send` would place a response.
   * In a chat the stream starts in the thread when the inbound activity is in a thread, and at top level otherwise.
   * In a channel the stream starts in the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, the first message of the stream is created in the inbound conversation instead.
   * Without `channelData.replyChain.id` the stream is not placed in a reply chain.
   */
  stream: IStreamer;

  /**
   * the uploaded files on the current inbound activity, i.e. `contentType: file.download.info` subset of `activity.attachments`, plus images pasted inline, mapped to `IncomingFile`. See {@link IFilesAccessor}.
   */
  files: IFilesAccessor;

  /**
   * Get the Plan bound to this inbound activity. Use new Plan(options) for a saved prompt.
   * In a chat thread, a standalone `complete()` is posted to the reply chain, as `ctx.send` does.
   * Typing updates, completions in a channel, and prompts outside a thread use the conversation.
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsPlan
   */
  plan(): Plan;

  /**
   * call the next event/middleware handler
   */
  next: (
    context?: IActivityContext & TExtraCtx
  ) => (void | InvokeResponse) | Promise<void | InvokeResponse>;

  /**
   * send an activity to the conversation
   * @param activity activity to send
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  send(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity to the conversation
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * Inbound activities without `channelData.replyChain.id`, and other inbound activities, are not placed, and the activity is sent to the inbound conversation.
   * To quote the inbound message, or in a chat start a thread under it, use {@link reply}.
   *
   * @param activity activity to send
   * @throws Error in chat scope when the service rejects the thread; the activity is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the activity with a status other than HTTP 404, or the retry after a 404 fails.
   */
  send(activity: ActivityLike): Promise<SentActivity>;
  /**
   * send an activity to the conversation
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * Inbound activities without `channelData.replyChain.id`, and other inbound activities, are not placed, and the activity is sent to the inbound conversation.
   * To quote the inbound message, or in a chat start a thread under it, use {@link reply}.
   *
   * @param activity activity to send
   * @throws Error in chat scope when the service rejects the thread; the activity is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the activity with a status other than HTTP 404, or the retry after a 404 fails.
   */
  send(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a `DeprecatedInputActivity` is deprecated. Use MessageActivityInput or TypingActivityInput instead.
   * Passing a conversation reference is also deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * reply to the inbound activity, quoting it by default
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one.
   * When the inbound activity is at top level, starts a thread under the message it is about (e.g. the user's message, the message the user reacted to, or the card the user clicked).
   * If the message cannot be a thread root (e.g. a card button message whose id is not a message id), the reply remains at top level.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * For inbound activities without `channelData.replyChain.id`, and other inbound activities, the reply is sent to the inbound conversation.
   * A typing activity never starts a new thread.
   * The reply quotes the inbound activity only when that activity can be quoted, so a reply to a card action or another invoke is sent without a quote.
   * `options.replyMode` overrides the app's `activity.replyMode` setting.
   * In `thread` mode the quote is left out when the reply lands in a thread, and in a chat `quote` mode keeps the reply at the level of the inbound activity. See {@link ReplyMode}.
   *
   * @param activity the activity to send
   * @param options options for this reply
   * @throws Error in chat scope when the service rejects the thread; the reply is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the reply with a status other than HTTP 404, or the retry after a 404 fails.
   */
  reply(activity: ActivityLike, options?: ReplyOptions): Promise<SentActivity>;
  /**
   * reply to the inbound activity, quoting it by default
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one.
   * When the inbound activity is at top level, starts a thread under the message it is about (e.g. the user's message, the message the user reacted to, or the card the user clicked).
   * If the message cannot be a thread root (e.g. a card button message whose id is not a message id), the reply remains at top level.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * For inbound activities without `channelData.replyChain.id`, and other inbound activities, the reply is sent to the inbound conversation.
   * A typing activity never starts a new thread.
   * The reply quotes the inbound activity only when that activity can be quoted, so a reply to a card action or another invoke is sent without a quote.
   * In a chat, setting the app's `activity.replyMode` to `quote` keeps the reply at the level of the inbound activity. See {@link ReplyMode}.
   *
   * @param activity the activity to send
   * @throws Error in chat scope when the service rejects the thread; the reply is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the reply with a status other than HTTP 404, or the retry after a 404 fails.
   */
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

  /**
   * Gets token status for every registered OAuth connection.
   *
   * Connections reported as disconnected after silent SSO are verified with a
   * direct token lookup. A connected flow omitted by the status endpoint is
   * returned with an empty `serviceProviderDisplayName` because that value is
   * unavailable from the token response.
   */
  getConnectionStatus: () => Promise<TokenStatus[]>;
}

export type IActivityContext<T extends Activity = Activity, TExtraContext = unknown> =
  IBaseActivityContext<T> & (TExtraContext extends Record<string, any> ? TExtraContext : {});

type MessageActivityParams = ActivityParams & Partial<IMessageActivity> & { type: 'message' };

type ReplyChainPlacement = { chatOrChannelId: string; replyChainId: string; inChannel: boolean };

type SendCoreOptions = {
  /** The conversation to send to, by default the inbound conversation. */
  conversationRef?: ConversationReference;
  /** At top level in a chat, start a thread under the origin message (see `canUseOriginAsRoot`). */
  useOriginAsRoot?: boolean;
};

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

  /**
   * Emits `sent` once for each activity this context sends with `send`, `reply` or `quote`.
   * @internal
   */
  readonly events: EventEmitter<{ sent: { ref: ConversationReference; activity: SentActivity } }>;

  private activitySender: IActivitySender;
  private _plan?: Plan;
  private readonly validateOAuthConnection?: IActivityContextConstructorArgs['validateOAuthConnection'];
  private readonly onOAuthSignInInitiated?: IActivityContextConstructorArgs['onOAuthSignInInitiated'];
  private readonly getOAuthConnectionStatus?: IActivityContextConstructorArgs['getOAuthConnectionStatus'];
  private readonly replyMode?: ReplyMode;

  constructor(value: IBaseActivityContextOptions & IActivityContextConstructorArgs) {
    // Extract activitySender and next before Object.assign to avoid overwriting methods
    const {
      activitySender,
      next,
      validateOAuthConnection,
      onOAuthSignInInitiated,
      getOAuthConnectionStatus,
      replyMode,
      filesCredential,
      filesBotApiCredential,
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
    this.events = new EventEmitter();
    this.activitySender = activitySender;
    this.validateOAuthConnection = validateOAuthConnection;
    this.onOAuthSignInInitiated = onOAuthSignInInitiated;
    this.getOAuthConnectionStatus = getOAuthConnectionStatus;
    this.replyMode = replyMode;
    this.next = next;
    const placement = this.getInboundReplyChainPlacement();
    this.stream = activitySender.createStream(
      value.ref,
      placement
        ? {
            replyChain: {
              chatOrChannelId: placement.chatOrChannelId,
              replyChainId: placement.replyChainId,
            },
          }
        : undefined
    );
    this.connectionName = value.connectionName;
    this.files = new FilesAccessor(
      this.activity,
      this.log.child('files'),
      value.client,
      filesCredential,
      filesBotApiCredential
    );
    this._plan = undefined;
  }

  /**
   * Get the Plan bound to this inbound activity, scoping its client on first access.
   * In a chat thread, a standalone `complete()` is posted to the reply chain, as `ctx.send` does.
   * Typing updates, completions in a channel, and prompts outside a thread use the conversation.
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsPlan
   */
  plan(): Plan {
    if (!this._plan) {
      const placement = this.getInboundReplyChainPlacement();
      this._plan = new Plan({
        conversationId: this.ref.conversation.id,
        replyToId: this.activity.id,
        replyChain:
          placement && !placement.inChannel
            ? { chatOrChannelId: placement.chatOrChannelId, replyChainId: placement.replyChainId }
            : undefined,
        apiClient: this.api.fromServiceUrl({ serviceUrl: this.ref.serviceUrl }),
      });
    }
    return this._plan;
  }

  /**
   * send an activity in the current conversation without quoting.
   *
   * @param activity the activity to send
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async send(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity in the current conversation without quoting.
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * Inbound activities without `channelData.replyChain.id`, and other inbound activities, are not placed, and the activity is sent to the inbound conversation.
   * To quote the inbound message, or in a chat start a thread under it, use {@link reply}.
   *
   * @param activity the activity to send
   * @throws Error in chat scope when the service rejects the thread; the activity is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the activity with a status other than HTTP 404, or the retry after a 404 fails.
   */
  async send(activity: ActivityLike): Promise<SentActivity>;
  /**
   * send an activity in the current conversation without quoting.
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * Inbound activities without `channelData.replyChain.id`, and other inbound activities, are not placed, and the activity is sent to the inbound conversation.
   * To quote the inbound message, or in a chat start a thread under it, use {@link reply}.
   *
   * @param activity the activity to send
   * @throws Error in chat scope when the service rejects the thread; the activity is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the activity with a status other than HTTP 404, or the retry after a 404 fails.
   */
  async send(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a `DeprecatedInputActivity` is deprecated. Use MessageActivityInput or TypingActivityInput instead.
   * Passing a conversation reference is also deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  async send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  async send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` uses `options.serviceUrl` or the app's configured URL. Context methods use the conversation reference's `serviceUrl` (by default, the inbound activity's).
   */
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference) {
    return this.sendCore(toActivityParams(activity), { conversationRef });
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * reply to the inbound activity, quoting it by default
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one.
   * When the inbound activity is at top level, starts a thread under the message it is about (e.g. the user's message, the message the user reacted to, or the card the user clicked).
   * If the message cannot be a thread root (e.g. a card button message whose id is not a message id), the reply remains at top level.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * For inbound activities without `channelData.replyChain.id`, and other inbound activities, the reply is sent to the inbound conversation.
   * A typing activity never starts a new thread.
   * The reply quotes the inbound activity only when that activity can be quoted, so a reply to a card action or another invoke is sent without a quote.
   * `options.replyMode` overrides the app's `activity.replyMode` setting.
   * In `thread` mode the quote is left out when the reply lands in a thread, and in a chat `quote` mode keeps the reply at the level of the inbound activity. See {@link ReplyMode}.
   *
   * @param activity the activity to send
   * @param options options for this reply
   * @throws Error in chat scope when the service rejects the thread; the reply is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the reply with a status other than HTTP 404, or the retry after a 404 fails.
   */
  async reply(activity: ActivityLike, options?: ReplyOptions): Promise<SentActivity>;
  /**
   * reply to the inbound activity, quoting it by default
   *
   * In a chat, sends into the reply chain (thread) when the inbound activity is inside one.
   * When the inbound activity is at top level, starts a thread under the message it is about (e.g. the user's message, the message the user reacted to, or the card the user clicked).
   * If the message cannot be a thread root (e.g. a card button message whose id is not a message id), the reply remains at top level.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * For inbound activities without `channelData.replyChain.id`, and other inbound activities, the reply is sent to the inbound conversation.
   * A typing activity never starts a new thread.
   * The reply quotes the inbound activity only when that activity can be quoted, so a reply to a card action or another invoke is sent without a quote.
   * In a chat, setting the app's `activity.replyMode` to `quote` keeps the reply at the level of the inbound activity. See {@link ReplyMode}.
   *
   * @param activity the activity to send
   * @throws Error in chat scope when the service rejects the thread; the reply is not sent elsewhere.
   * @throws Error in channel scope when the service rejects the reply with a status other than HTTP 404, or the retry after a 404 fails.
   */
  async reply(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  async reply(activity: ActivityLike | DeprecatedInputActivity, options?: ReplyOptions) {
    const mode = options?.replyMode ?? this.replyMode ?? 'combined';
    const params = toActivityParams(activity);
    const isMessage = params.type === 'message';
    const shouldQuote = isMessage && isQuotableActivity(this.activity) && !(mode === 'thread' && this.isThreadModeReplyThreaded());
    const toSend = shouldQuote ? this.withQuote(params, this.activity.id) : params;
    return this.sendCore(toSend, { useOriginAsRoot: isMessage && mode !== 'quote' });
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
      return this.send(this.withQuote(activity, messageId));
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

  async getConnectionStatus(): Promise<TokenStatus[]> {
    if (!this.getOAuthConnectionStatus) {
      throw new Error('OAuth connection status is unavailable.');
    }

    return this.getOAuthConnectionStatus(this.toInterface());
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
      plan: this.plan.bind(this),
      isSignedIn: this.isSignedIn,
      connectionName: this.connectionName,
      userToken: this.userToken,
      next: this.next.bind(this),
      reply: this.reply.bind(this),
      quote: this.quote.bind(this),
      send: this.send.bind(this),
      signin: this.signin.bind(this),
      signout: this.signout.bind(this),
      getConnectionStatus: this.getConnectionStatus.bind(this),
    };
  }

  /**
   * Sends an activity for `send`, `reply` and `quote`, and emits `sent` once it is sent.
   * Applies targeting, then sends to the reply chain from `getChatReplyChainPlacement`, or else to `conversationRef` (by default the inbound conversation).
   * `useOriginAsRoot` lets a response at top level in a chat start a thread under the origin message.
   */
  private async sendCore(
    params: ActivityParams,
    { conversationRef, useOriginAsRoot }: SendCoreOptions = {}
  ): Promise<SentActivity> {
    // Targeting below changes `recipient` and `entities`; work on a copy so the caller's object stays unchanged.
    const copy = Object.assign(Object.create(Object.getPrototypeOf(params)), params) as ActivityParams;
    if (copy.entities) {
      copy.entities = [...copy.entities];
    }
    params = copy;

    if (this.shouldOutboundBeAutoTargeted(params, conversationRef)) {
      this.applyTargetedRecipient(params);
    }

    if (this.isTargetedOutbound(params)) {
      // `targetedMessageInfo` points at the original targeted inbound message for prompt preview.
      // Do not add it for generic targeted sends; Teams can reject it if the referenced activity
      // was not itself delivered as a targeted message.
      // The quote of the inbound message is removed only together with it, so a generic targeted send keeps an explicit quote.
      if (this.isIncomingTargeted()) {
        this.stripQuotedReplyMetadata(params);
        this.addTargetedMessageInfo(params);
      }
    }

    const ref = conversationRef ?? this.ref;
    const placement = this.getChatReplyChainPlacement(params, { conversationRef, useOriginAsRoot });
    let sent: SentActivity | undefined;
    if (placement) {
      try {
        sent = await this.activitySender.send(
          params,
          { ...ref, conversation: { ...ref.conversation, id: placement.chatOrChannelId } },
          { replyChainId: placement.replyChainId }
        );
      } catch (err: any) {
        if (!placement.inChannel || err?.response?.status !== 404) {
          throw err;
        }
      }
    }

    if (!sent) {
      sent = await this.activitySender.send(params, ref);
    }

    this.events.emit('sent', { ref, activity: sent });
    return sent;
  }

  /**
   * Prepends the quote of `messageId` to a copy of the message, leaving the caller's message unchanged.
   * @returns a copy of the message with the quote prepended and its own `entities` array
   */
  private withQuote(params: Extract<ActivityParams, { type: 'message' }>, messageId: string) {
    const message = MessageActivityInput.from(params);
    message.entities = [...(message.entities ?? [])];
    message.prependQuote(messageId);
    return message;
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

  /**
   * Finds the chat or channel and reply chain (thread) a response to the inbound activity is posted to.
   *
   * In a channel a response to a message always goes to the reply chain of the inbound message: `channelData.replyChain.id` is the root message of the thread, and it equals the inbound message's own id for a top-level post.
   * The destination is the channel, `channelData.channel.id`.
   * Other inbound activities in a channel are not placed.
   *
   * In a chat see `isInsideThread` for which activities are inside a thread.
   * The destination is the chat, `channelData.chat.id`.
   * When the inbound activity is on a top-level message the response is sent as a top-level message, unless `useOriginAsRoot` is set and `canUseOriginAsRoot` is true: then the response starts a thread under the origin message.
   *
   * Placement depends only on the payload: without `channelData.replyChain.id` and the chat or channel id the activity is not placed.
   * Returns undefined when an id is missing or blank, so the send goes to the inbound conversation.
   */
  private getInboundReplyChainPlacement({ useOriginAsRoot = false }: Pick<SendCoreOptions, 'useOriginAsRoot'> = {}): ReplyChainPlacement | undefined {
    const channelData = this.activity.channelData;
    const replyChainId = channelData?.replyChain?.id;
    if (!isPresent(replyChainId)) {
      return undefined;
    }

    if (this.activity.conversation?.conversationType === 'channel') {
      const channelId = channelData?.channel?.id;
      return this.activity.type === 'message' && isPresent(channelId)
        ? { chatOrChannelId: channelId, replyChainId, inChannel: true }
        : undefined;
    }

    const chatId = channelData?.chat?.id;
    return isPresent(chatId) && (this.isInsideThread(replyChainId) || (useOriginAsRoot && this.canUseOriginAsRoot()))
      ? { chatOrChannelId: chatId, replyChainId, inChannel: false }
      : undefined;
  }

  /**
   * Whether the inbound activity in a chat is inside a thread, by activity type:
   * - `message` (without `channelData.source`), `messageUpdate`, `messageDelete`: the origin message id differs from `channelData.replyChain.id`.
   * - `messageReaction`, and a `message` with `channelData.source` (e.g. sent by a card button): the origin message id is a plain number that differs from `channelData.replyChain.id`.
   * - `invoke`: as for a reaction, or always when the invoke is not tied to a message (e.g. a compose-box extension or a `task/fetch` from a bot command).
   * - Any other type: never.
   *
   * A plain number excludes ids like a service-generated `f:` id or an encrypted id.
   * See `getOriginMessageId` for which id is the origin message id.
   */
  private isInsideThread(replyChainId: string): boolean {
    const activity: Activity = this.activity;
    const originId = this.getOriginMessageId();
    const isOtherPlainId = (id?: string) => isPlainMessageId(id) && id !== replyChainId;

    switch (activity.type) {
      case 'message':
        return hasSource(activity.channelData) ? isOtherPlainId(originId) : originId !== replyChainId;
      case 'messageUpdate':
      case 'messageDelete':
        return originId !== replyChainId;
      case 'messageReaction':
        return isOtherPlainId(originId);
      case 'invoke':
        return originId === undefined ? true : isOtherPlainId(originId);
      default:
        return false;
    }
  }

  /**
   * The id of the message the inbound activity is about (the origin message):
   * - `activity.id` for a message, an edit and a delete.
   * - `replyToId` (the reacted message) for a reaction and for a message with `channelData.source` (e.g. sent by a card button).
   * - `value.messagePayload.id` for a message action, and `replyToId` (the message the user acted on, for example a card or a message with feedback buttons) for any other invoke.
   *
   * A `source` without a non-empty string `name` and a `replyToId` that is null count as absent.
   * @returns the origin message id, or undefined for an invoke that is not tied to a message and for other inbound activities
   */
  private getOriginMessageId(): string | undefined {
    const activity: Activity = this.activity;

    switch (activity.type) {
      case 'message':
        return (hasSource(activity.channelData) ? activity.replyToId : activity.id) ?? undefined;
      case 'messageUpdate':
      case 'messageDelete':
        return activity.id;
      case 'messageReaction':
        return activity.replyToId ?? undefined;
      case 'invoke': {
        const payloadId =
          typeof activity.value === 'object' && activity.value !== null && 'messagePayload' in activity.value
            ? activity.value.messagePayload?.id
            : undefined;
        return (typeof payloadId === 'string' ? payloadId : undefined) ?? activity.replyToId ?? undefined;
      }
      default:
        return undefined;
    }
  }

  /**
   * Whether a response at top level in a chat can start a thread under the origin message: the origin message id is a plain number equal to `channelData.replyChain.id`.
   * For a reaction or a card action the origin message is the message the user acted on, not the inbound activity.
   */
  private canUseOriginAsRoot(): boolean {
    const originId = this.getOriginMessageId();
    return isPlainMessageId(originId) && originId === this.activity.channelData?.replyChain?.id;
  }

  private getChatReplyChainPlacement(
    params: ActivityParams,
    { conversationRef, useOriginAsRoot }: SendCoreOptions = {}
  ) {
    if ((params.type !== 'message' && params.type !== 'typing') || params.id || !this.isSameConversation(conversationRef)) {
      return undefined;
    }

    return this.getInboundReplyChainPlacement({ useOriginAsRoot });
  }

  /**
   * Whether a `thread` mode reply lands in a thread, so `thread` mode leaves the quote out.
   * In a channel every reply goes into the thread of the inbound message, through the reply chain or the inbound conversation, so the inbound needs only `channelData.replyChain.id` and `channelData.channel.id`.
   * In a chat the reply must be placed in a reply chain (see `getInboundReplyChainPlacement`).
   */
  private isThreadModeReplyThreaded(): boolean {
    if (this.activity.conversation?.conversationType === 'channel') {
      const channelData = this.activity.channelData;
      return isPresent(channelData?.replyChain?.id) && isPresent(channelData?.channel?.id);
    }

    return this.getInboundReplyChainPlacement({ useOriginAsRoot: true }) !== undefined;
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

/**
 * Whether a response to the inbound activity is automatically quoted.
 * That happens only when the inbound activity id is a plain numeric message id that is not all zeros.
 * Other ids, such as the service-generated `f:<guid>` ids on invokes and card button messages, are never quoted automatically.
 * The check looks only at the shape of the id and does not verify that the message exists.
 */
function isQuotableActivity(activity: Activity): boolean {
  return isPlainMessageId(activity.id);
}

// A plain numeric message id that is not all zeros.
function isPlainMessageId(id: string | undefined): id is string {
  return !!id && /^\d+$/.test(id) && !/^0+$/.test(id);
}

// An absent, null or nameless source means the activity was not sent by a card or a message action.
function hasSource(channelData: Activity['channelData']): boolean {
  const name = channelData?.source?.name;
  return typeof name === 'string' && name !== '';
}

// A blank id is treated like a missing one.
function isPresent(id: string | undefined | null): id is string {
  return typeof id === 'string' && id.trim() !== '';
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
