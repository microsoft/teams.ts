import { TurnState } from './turn-state';

type StateDeleter = (conversationId: string, userId?: string) => Promise<void>;

/** Conversation and user state loaded for one activity turn. */
export class TurnStateContainer {
  /** State shared by all users in the current conversation. */
  readonly conversation: TurnState;

  /**
   * State for the current user within the current conversation.
   * Undefined when the activity has no sender ID.
   */
  readonly user?: TurnState;

  /** Conversation ID used to load and persist this container. */
  readonly conversationId: string;

  /** User ID used to load and persist the user scope. */
  readonly userId?: string;

  private readonly deleter: StateDeleter;

  /**
   * Creates a loaded state container.
   * @param conversation Conversation-scoped state.
   * @param conversationId Conversation ID associated with the state.
   * @param deleter Callback that removes persisted scopes.
   * @param user Optional user-within-conversation state.
   * @param userId Optional sender ID associated with the user scope.
   */
  constructor(
    conversation: TurnState,
    conversationId: string,
    deleter: StateDeleter,
    user?: TurnState,
    userId?: string
  ) {
    this.conversation = conversation;
    this.conversationId = conversationId;
    this.deleter = deleter;
    this.user = user;
    this.userId = userId;
  }

  /**
   * Deletes both persisted scopes and clears their in-memory snapshots.
   *
   * The backing delete must succeed before the in-memory state changes. Values
   * written after this call are persisted normally at the end of the turn.
   */
  async delete(): Promise<void> {
    await this.deleter(this.conversationId, this.userId);
    this.conversation.reset();
    this.user?.reset();
  }

  /** Seals both scopes after activity processing completes. */
  seal(): void {
    this.conversation.seal();
    this.user?.seal();
  }
}
