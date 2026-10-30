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
import { Client as HttpClient, ILogger, IStorage } from '@microsoft/teams.common';

import { ApiClient, GraphClient } from '../api';
import { BotApiCredential, GraphCredential } from '../files/download';
import { FilesAccessor } from '../files/files-accessor';
import { IFilesAccessor } from '../files/types';
import { OAuthSignInOptions, startOAuthSignIn } from '../oauth';
import { Plan } from '../plan';
import { TurnStateContainer } from '../state';
import { IStreamer } from '../types';
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
   * In a 1:1 chat the stream starts in the thread when the inbound activity is in a thread, and at top level otherwise.
   * In a channel the stream starts in the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, the first message of the stream is created in the inbound conversation instead.
   * In a group chat the stream is not placed in a reply chain.
   */
  stream: IStreamer;

  /**
   * the uploaded files on the current inbound activity, i.e. `contentType: file.download.info` subset of `activity.attachments`, plus images pasted inline, mapped to `IncomingFile`. See {@link IFilesAccessor}.
   */
  files: IFilesAccessor;

  /**
   * Get the Plan bound to this inbound activity. Use new Plan(options) for a saved prompt.
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
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   *
   * @param activity activity to send
   */
  send(activity: ActivityLike): Promise<SentActivity>;
  /**
   * send an activity to the conversation
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   *
   * @param activity activity to send
   */
  send(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a `DeprecatedInputActivity` is deprecated. Use MessageActivityInput or TypingActivityInput instead.
   * Passing a conversation reference is also deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`
   * @param activity activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * reply to the inbound activity, automatically quoting the inbound message
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   *
   * @param activity activity to send
   */
  reply(activity: ActivityLike): Promise<SentActivity>;
  /**
   * reply to the inbound activity, automatically quoting the inbound message
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   *
   * @param activity activity to send
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
  private _plan?: Plan;
  private readonly validateOAuthConnection?: IActivityContextConstructorArgs['validateOAuthConnection'];
  private readonly onOAuthSignInInitiated?: IActivityContextConstructorArgs['onOAuthSignInInitiated'];
  private readonly getOAuthConnectionStatus?: IActivityContextConstructorArgs['getOAuthConnectionStatus'];

  constructor(value: IBaseActivityContextOptions & IActivityContextConstructorArgs) {
    // Extract activitySender and next before Object.assign to avoid overwriting methods
    const {
      activitySender,
      next,
      validateOAuthConnection,
      onOAuthSignInInitiated,
      getOAuthConnectionStatus,
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
    this.activitySender = activitySender;
    this.validateOAuthConnection = validateOAuthConnection;
    this.onOAuthSignInInitiated = onOAuthSignInInitiated;
    this.getOAuthConnectionStatus = getOAuthConnectionStatus;
    this.next = next;
    const placement = this.getInboundReplyChainPlacement();
    this.stream = activitySender.createStream(
      value.ref,
      placement
        ? {
            replyChain: {
              chatOrChannelId: placement.chatOrChannelId,
              replyChainId: placement.replyChainId,
              ...(placement.inChannel ? { inChannel: true } : {}),
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
   *
   * @experimental This API is in preview and may change in the future.
   * Diagnostic: ExperimentalTeamsPlan
   */
  plan(): Plan {
    if (!this._plan) {
      this._plan = new Plan({
        conversationId: this.ref.conversation.id,
        replyToId: this.activity.id,
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
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   * To send with a visual quote of the inbound message, use {@link reply}.
   *
   * @param activity the activity to send
   */
  async send(activity: ActivityLike): Promise<SentActivity>;
  /**
   * send an activity in the current conversation without quoting.
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   * To send with a visual quote of the inbound message, use {@link reply}.
   *
   * @param activity the activity to send
   */
  async send(activity: ActivityLike | DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a `DeprecatedInputActivity` is deprecated. Use MessageActivityInput or TypingActivityInput instead.
   * Passing a conversation reference is also deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  async send(activity: DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  async send(activity: ActivityLike, conversationRef?: ConversationReference): Promise<SentActivity>;
  /**
   * send an activity to the conversation referenced by `conversationRef`.
   *
   * @param activity the activity to send
   * @param conversationRef conversation reference to send to
   * @deprecated Passing a conversation reference is deprecated and will be removed in a future release. Use `App.send()` to send to a different conversation.
   * `App.send()` sends through the `serviceUrl` the app is configured with, unlike the context methods, which use the `serviceUrl` of the conversation reference (by default, the inbound activity's).
   */
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference): Promise<SentActivity>;
  async send(activity: ActivityLike | DeprecatedInputActivity, conversationRef?: ConversationReference) {
    const params = toActivityParams(activity);

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
    const placement = this.getChatReplyChainPlacement(params, conversationRef);
    if (placement) {
      try {
        return await this.activitySender.send(
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

    return this.activitySender.send(params, ref);
  }

  /**
   * @deprecated Use MessageActivityInput or TypingActivityInput instead.
   */
  async reply(activity: DeprecatedInputActivity): Promise<SentActivity>;
  /**
   * send an activity in the current conversation with a visual quote
   * of the inbound message.
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   * To send without quoting, use {@link send}.
   *
   * @param activity the activity to send
   */
  async reply(activity: ActivityLike): Promise<SentActivity>;
  /**
   * send an activity in the current conversation with a visual quote
   * of the inbound message.
   *
   * In a 1:1 chat, sends into the reply chain (thread) when the inbound activity is inside one, and at top level otherwise.
   * The inbound activity can be a message, a card action, an invoke, a reaction, an edit or a delete.
   * In a channel, sends into the reply chain of the inbound message.
   * In a channel, when the service answers HTTP 404, sends to the inbound conversation instead.
   * Group chats, meetings and other inbound activities are not placed, and the activity is sent to the inbound conversation.
   * To send without quoting, use {@link send}.
   *
   * @param activity the activity to send
   */
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
   * When the inbound activity is on a top-level message the response is sent as a top-level message.
   *
   * Group chats and meetings are not placed.
   * Returns undefined when an id is missing or blank, so the send goes to the inbound conversation.
   */
  private getInboundReplyChainPlacement() {
    if (this.activity.conversation?.conversationType === 'groupChat') {
      return undefined;
    }

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
    return isPresent(chatId) && this.isInsideThread(replyChainId) ? { chatOrChannelId: chatId, replyChainId, inChannel: false } : undefined;
  }

  /**
   * Whether the inbound activity in a chat is inside a thread: `channelData.replyChain.id` differs from the id of the message the activity acts on.
   * The message it acts on is:
   * - `activity.id` for a message, an edit, a delete and a reaction.
   * - `replyToId` (the card's message) for a message sent by a card button (a message with `channelData.source`).
   * - `value.messagePayload.id` for a message action, and `replyToId` (the message the user acted on, for example a card or a message with feedback buttons) for any other invoke.
   *
   * An invoke that is not tied to a message (for example a compose-box extension or a `task/fetch` from a bot command) is inside a thread when `channelData.replyChain.id` is present.
   * A `replyToId` or `messagePayload.id` that is not a plain number is never inside a thread, and neither are other inbound activities.
   * A `source` without a non-empty string `name` and a `replyToId` that is null count as absent.
   */
  private isInsideThread(replyChainId: string): boolean {
    const activity: Activity = this.activity;
    const isOtherPlainId = (id?: string | null) => !!id && /^\d+$/.test(id) && id !== '0' && id !== replyChainId;

    switch (activity.type) {
      case 'message':
        return hasSource(activity.channelData) ? isOtherPlainId(activity.replyToId) : activity.id !== replyChainId;
      case 'messageUpdate':
      case 'messageDelete':
      case 'messageReaction':
        return activity.id !== replyChainId;
      case 'invoke': {
        const payloadId =
          typeof activity.value === 'object' && activity.value !== null && 'messagePayload' in activity.value
            ? activity.value.messagePayload?.id
            : undefined;
        const messageId = (typeof payloadId === 'string' ? payloadId : undefined) ?? activity.replyToId;
        return messageId === undefined || messageId === null ? true : isOtherPlainId(messageId);
      }
      default:
        return false;
    }
  }

  private getChatReplyChainPlacement(params: ActivityParams, conversationRef?: ConversationReference) {
    if (params.type !== 'message' || params.id || !this.isSameConversation(conversationRef)) {
      return undefined;
    }

    return this.getInboundReplyChainPlacement();
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
