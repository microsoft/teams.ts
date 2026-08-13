import type { IStorage } from '@microsoft/teams.common';

/** Configures per-turn conversation and user state. */
export type StateOptions = {
  /** Storage used for persisted state JSON. Defaults to the app's storage. */
  readonly storage?: IStorage<string, string>;

  /**
   * Prefix applied to conversation and user storage keys.
   * @default 'ts'
   */
  readonly keyPrefix?: string;

  /**
   * Maximum age of persisted state in seconds. Omit to disable expiration.
   *
   * Expired values are treated as absent and are not deleted automatically.
   */
  readonly ttl?: number;
};
