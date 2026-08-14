import type { IStorage } from '@microsoft/teams.common';

/** Configures per-turn conversation and user state. */
export type StateOptions = {
  /**
   * Storage used for persisted JSON-native state records.
   *
   * The provider owns serialization and must honor or reject TTL write options.
   * Defaults to the app's storage.
   */
  readonly storage?: IStorage<string, Record<string, unknown>>;

  /**
   * Prefix applied to conversation and user storage keys.
   * @default 'ts'
   */
  readonly keyPrefix?: string;

  /**
   * Non-negative, finite time-to-live passed to the storage provider when state is written.
   * Omit to store state without expiration.
   */
  readonly ttl?: number;
};
