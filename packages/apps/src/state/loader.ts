import { ILogger, IStorage, LocalStorage } from '@microsoft/teams.common';

import { APP_SPAN_NAMES } from '../diagnostics/constants';
import {
  getTeamsBotApplicationTracer,
  recordTeamsBotApplicationException,
} from '../diagnostics/helpers';

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
  private readonly storage: IStorage<string, string>;
  private readonly keyPrefix: string;
  private readonly logger?: ILogger;

  /**
   * Creates a state loader.
   * @param storage Storage for serialized state JSON.
   * @param options State storage and key options.
   * @param logger Optional logger for malformed persisted values.
   */
  constructor(
    storage: IStorage<string, string>,
    options: StateOptions = {},
    logger?: ILogger
  ) {
    this.storage = storage;
    this.keyPrefix = options.keyPrefix ?? 'ts';
    this.logger = logger;
  }

  /**
   * Returns the persisted conversation-scope key.
   *
   * The conversation ID is percent-encoded as one key segment.
   * @param conversationId Conversation ID.
   */
  conversationKey(conversationId: string): string {
    return `${this.keyPrefix}:conv:${encodeKeySegment(conversationId)}`;
  }

  /**
   * Returns the persisted user-within-conversation key.
   *
   * The conversation and user IDs are independently percent-encoded so
   * delimiter characters cannot make distinct ID pairs share a key.
   * @param conversationId Conversation ID.
   * @param userId User ID.
   */
  userKey(conversationId: string, userId: string): string {
    return `${this.keyPrefix}:user:${encodeKeySegment(conversationId)}:${encodeKeySegment(userId)}`;
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

    const conversationKey = this.conversationKey(conversationId);
    const userKey = userId ? this.userKey(conversationId, userId) : undefined;
    return traceStateOperation(APP_SPAN_NAMES.stateLoad, async () => {
      const conversation = await this.loadScope(conversationKey);
      const user = userKey ? await this.loadScope(userKey) : undefined;

      return new TurnStateContainer(
        conversation,
        user,
        () => this.delete(conversationId, userId),
        conversationKey,
        userKey
      );
    });
  }

  /**
   * Persists dirty scopes to the same storage keys from which they were loaded.
   *
   * Manually constructed containers are not bound to storage and cannot be
   * saved. Dirty empty scopes delete their backing keys; clean scopes perform
   * no I/O. Each successfully persisted scope is marked clean independently.
   * @param container Loaded state container to persist.
   */
  async save(container: TurnStateContainer): Promise<void> {
    const conversationKey = container.conversationKey;
    if (!conversationKey) {
      throw new Error(
        'Turn state can only be saved after it has been loaded.'
      );
    }

    await traceStateOperation(APP_SPAN_NAMES.stateSave, async () => {
      await this.saveScope(conversationKey, container.conversation);

      if (container.user && container.userKey) {
        await this.saveScope(container.userKey, container.user);
      }
    });
  }

  /**
   * Deletes persisted conversation and user scopes without loading them.
   * @param conversationId Conversation ID to delete.
   * @param userId Optional user ID to delete within the conversation.
   */
  async delete(conversationId: string, userId?: string): Promise<void> {
    await traceStateOperation(APP_SPAN_NAMES.stateDelete, async () => {
      await this.storage.delete(this.conversationKey(conversationId));
      if (userId) {
        await this.storage.delete(this.userKey(conversationId, userId));
      }
    });
  }

  private async loadScope(key: string): Promise<TurnState> {
    const value = await this.storage.get(key);
    if (value === undefined) {
      return new TurnState();
    }

    const data = deserializeState(value);
    if (!data) {
      this.logger?.warn(
        'Ignoring malformed persisted turn state; expected a JSON object string.'
      );
      return new TurnState();
    }
    return new TurnState(data);
  }

  private async saveScope(key: string, state: TurnState): Promise<void> {
    if (!state.isDirty) {
      return;
    }
    if (state.isEmpty) {
      await this.storage.delete(key);
      state.markClean();
      return;
    }

    const value = JSON.stringify(state.toRecord());
    await this.storage.set(key, value);
    state.markClean();
  }
}

/**
 * Creates the app state loader when state is enabled.
 * @param state `true` for defaults, options for custom behavior, or a falsy value to disable state.
 * @param logger Logger used to warn about process-local storage.
 */
export function createStateLoader(
  state: boolean | StateOptions | undefined,
  logger: ILogger
): TurnStateLoader | undefined {
  if (!state) {
    return undefined;
  }

  const options = state === true ? {} : state;
  const storage = options.storage ?? new LocalStorage<string>();
  if (storage instanceof LocalStorage) {
    logger.warn(
      'Per-turn state is using LocalStorage and will not be shared across processes. Configure state.storage for production.'
    );
  }

  return new TurnStateLoader(storage, options, logger);
}

function deserializeState(value: string): Record<string, unknown> | undefined {
  try {
    const data: unknown = JSON.parse(value);
    return isStateRecord(data) ? data : undefined;
  } catch {
    return undefined;
  }
}

function isStateRecord(value: unknown): value is Record<string, unknown> {
  return !!value && typeof value === 'object' && !Array.isArray(value);
}

function encodeKeySegment(value: string): string {
  return encodeURIComponent(value).replace(
    /[!'()*]/g,
    (character) => `%${character.charCodeAt(0).toString(16).toUpperCase()}`
  );
}

async function traceStateOperation<T>(
  name: string,
  execute: () => Promise<T>
): Promise<T> {
  return getTeamsBotApplicationTracer().startActiveSpan(
    name,
    {},
    async (span) => {
      try {
        return await execute();
      } catch (error) {
        recordTeamsBotApplicationException(span, error);
        throw error;
      } finally {
        span.end();
      }
    }
  );
}
