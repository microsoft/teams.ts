import { TurnState } from './turn-state';

type StateDeleter = () => Promise<void>;

/** Conversation and user state loaded for one activity turn. */
export class TurnStateContainer {
  /** State shared by all users in the current conversation. */
  readonly conversation: TurnState;

  /**
   * State for the current user within the current conversation.
   * Undefined when the activity has no sender ID.
   */
  readonly user?: TurnState;

  /** @internal Conversation storage key captured when this state was loaded. */
  readonly conversationKey?: string;

  /** @internal User storage key captured when this state was loaded. */
  readonly userKey?: string;

  private readonly deleter?: StateDeleter;

  /**
   * Creates a loaded state container.
   * @param conversation Conversation-scoped state.
   * @param user Optional user-within-conversation state.
   * @param deleter Optional callback that removes persisted scopes. Normally supplied by the app.
   * @param conversationKey Optional conversation storage key. Normally supplied by the app.
   * @param userKey Optional user storage key. Normally supplied by the app.
   */
  constructor(
    conversation: TurnState,
    user?: TurnState,
    deleter?: StateDeleter,
    conversationKey?: string,
    userKey?: string
  ) {
    this.conversation = conversation;
    this.user = user;
    this.deleter = deleter;
    this.conversationKey = conversationKey;
    this.userKey = userKey;
  }

  /**
   * Deletes both persisted scopes and clears their in-memory snapshots.
   *
   * The backing delete must succeed before the in-memory state changes. Values
   * written after this call are persisted normally at the end of the turn.
   */
  async delete(): Promise<void> {
    if (!this.deleter) {
      throw new Error(
        'State deletion is not available for a container that was not loaded by the app.'
      );
    }

    await this.deleter();

    this.conversation.clear();
    this.user?.clear();
    this.conversation.markClean();
    this.user?.markClean();
  }

  /** Seals both scopes after activity processing completes. */
  seal(): void {
    this.conversation.seal();
    this.user?.seal();
  }
}
