import { ILogger, IStorage, LocalStorage } from '@microsoft/teams.common';

import { TurnStateContainer } from './container';
import { StateOptions } from './options';
import { TurnState } from './turn-state';

type StateEnvelope = {
  readonly ts: number;
  readonly data: Record<string, unknown>;
};

/**
 * Loads and saves per-turn state scopes using app storage.
 *
 * Each save replaces one complete scope. Concurrent turns therefore use
 * last-writer-wins semantics.
 */
export class TurnStateLoader {
  private readonly storage: IStorage<string, string>;
  private readonly keyPrefix: string;
  private readonly ttl?: number;

  /**
   * Creates a state loader.
   * @param storage Storage for JSON state envelopes.
   * @param options State key and expiration options.
   */
  constructor(storage: IStorage<string, string>, options: StateOptions = {}) {
    this.storage = storage;
    this.keyPrefix = options.keyPrefix ?? 'ts';
    this.ttl = options.ttl;
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

    try {
      const envelope: unknown = JSON.parse(value);
      if (!isStateEnvelope(envelope)) {
        return new TurnState();
      }
      if (this.ttl !== undefined && Date.now() / 1000 - envelope.ts > this.ttl) {
        return new TurnState();
      }
      return new TurnState(envelope.data);
    } catch {
      return new TurnState();
    }
  }

  private async saveScope(key: string, state: TurnState): Promise<void> {
    if (!state.isDirty) {
      return;
    }
    if (state.isEmpty) {
      await this.storage.delete(key);
      return;
    }

    const envelope: StateEnvelope = {
      ts: Date.now() / 1000,
      data: state.toRecord(),
    };
    await this.storage.set(key, JSON.stringify(envelope));
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
  const storage = options.storage ?? fallbackStorage as IStorage<string, string>;
  if (storage instanceof LocalStorage) {
    logger.warn(
      'Per-turn state is using LocalStorage and will not be shared across processes. Configure state.storage for production.'
    );
  }

  return new TurnStateLoader(storage, options);
}

function isStateEnvelope(value: unknown): value is StateEnvelope {
  if (!value || typeof value !== 'object') {
    return false;
  }

  const envelope = value as Record<string, unknown>;
  return (
    typeof envelope.ts === 'number' &&
    !!envelope.data &&
    typeof envelope.data === 'object' &&
    !Array.isArray(envelope.data)
  );
}
