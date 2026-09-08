import type { IStorage } from '@microsoft/teams.common';

/** Configures per-turn conversation and user state. */
export type StateOptions = {
  /**
   * Storage used for persisted state JSON strings.
   *
   * Providers may encode the strings to UTF-8 or another native representation.
   * Defaults to dedicated process-local storage.
   */
  readonly storage?: IStorage<string, string>;

  /**
   * Prefix applied to conversation and user storage keys.
   * @default 'ts'
   */
  readonly keyPrefix?: string;
};
