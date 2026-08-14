import { ILogger, IStorage, LocalStorage } from '@microsoft/teams.common';

import { TurnStateContainer } from './container';
import { StateOptions } from './options';
import { TurnState } from './turn-state';

/**
 * Loads and saves per-turn state scopes using app storage.
 *
 * Each save replaces one complete scope. Concurrent turns therefore use
 * last-writer-wins semantics.
 */
export class TurnStateLoader {
  private readonly storage: IStorage<string, Record<string, unknown>>;
  private readonly keyPrefix: string;
  private readonly storageOptions: StateOptions['storageOptions'];

  /**
   * Creates a state loader.
   * @param storage Storage for JSON-native state records.
   * @param options State storage and key options.
   */
  constructor(
    storage: IStorage<string, Record<string, unknown>>,
    options: StateOptions = {}
  ) {
    this.storage = storage;
    this.keyPrefix = options.keyPrefix ?? 'ts';
    this.storageOptions = options.storageOptions;
  }

  /**
   * Returns the persisted conversation-scope key.
   * @param conversationId Conversation ID.
   */
  conversationKey(conversationId: string): string {
    return `${this.keyPrefix}:conv:${conversationId}`;
  }

  /**
   * Returns the persisted user-within-conversation key.
   * @param conversationId Conversation ID.
   * @param userId User ID.
   */
  userKey(conversationId: string, userId: string): string {
    return `${this.keyPrefix}:user:${conversationId}:${userId}`;
  }

  /**
   * Loads conversation state and, when a user ID is present, user state.
   * @param conversationId Conversation ID for the activity.
   * @param userId Optional sender ID.
   */
  async load(conversationId: string, userId?: string): Promise<TurnStateContainer> {
    if (!conversationId) {
      throw new Error('A conversation ID is required to load turn state.');
    }

    const conversation = await this.loadScope(this.conversationKey(conversationId));
    const user = userId ? await this.loadScope(this.userKey(conversationId, userId)) : undefined;

    return new TurnStateContainer(
      conversation,
      conversationId,
      (loadedConversationId, loadedUserId) => this.delete(loadedConversationId, loadedUserId),
      user,
      userId
    );
  }

  /**
   * Persists dirty scopes from a loaded container.
   *
   * Dirty empty scopes delete their backing keys; clean scopes perform no I/O.
   * @param container State container to persist.
   */
  async save(container: TurnStateContainer): Promise<void> {
    if (!container.conversationId) {
      throw new Error('A conversation ID is required to save turn state.');
    }

    await this.saveScope(
      this.conversationKey(container.conversationId),
      container.conversation
    );

    if (container.user) {
      if (!container.userId) {
        throw new Error('A user ID is required to save user turn state.');
      }
      await this.saveScope(
        this.userKey(container.conversationId, container.userId),
        container.user
      );
    }
  }

  /**
   * Deletes persisted conversation and user scopes.
   * @param conversationId Conversation ID to delete.
   * @param userId Optional user ID to delete within the conversation.
   */
  async delete(conversationId: string, userId?: string): Promise<void> {
    await this.storage.delete(this.conversationKey(conversationId));
    if (userId) {
      await this.storage.delete(this.userKey(conversationId, userId));
    }
  }

  private async loadScope(key: string): Promise<TurnState> {
    const value = await this.storage.get(key);
    if (!value) {
      return new TurnState();
    }

    if (!isStateRecord(value)) {
      return new TurnState();
    }
    return new TurnState(structuredClone(value));
  }

  private async saveScope(key: string, state: TurnState): Promise<void> {
    if (!state.isDirty) {
      return;
    }
    if (state.isEmpty) {
      await this.storage.delete(key);
      return;
    }

    const value = structuredClone(state.toRecord());
    if (this.storageOptions) {
      await this.storage.set(key, value, this.storageOptions);
    } else {
      await this.storage.set(key, value);
    }
  }
}

/**
 * Creates the app state loader when state is enabled.
 * @param state `true` for defaults, options for custom behavior, or a falsy value to disable state.
 * @param fallbackStorage App storage used when no dedicated state storage is set.
 * @param logger Logger used to warn about process-local storage.
 */
export function createStateLoader(
  state: boolean | StateOptions | undefined,
  fallbackStorage: IStorage<string, unknown>,
  logger: ILogger
): TurnStateLoader | undefined {
  if (!state) {
    return undefined;
  }

  const options = state === true ? {} : state;
  const storage = options.storage ??
    fallbackStorage as IStorage<string, Record<string, unknown>>;
  if (storage instanceof LocalStorage) {
    logger.warn(
      'Per-turn state is using LocalStorage and will not be shared across processes. Configure state.storage for production.'
    );
  }

  return new TurnStateLoader(storage, options);
}

function isStateRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}
