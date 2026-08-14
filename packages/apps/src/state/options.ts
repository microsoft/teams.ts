import type { IStorage, IStorageSetOptions } from '@microsoft/teams.common';

/** Configures per-turn conversation and user state. */
export type StateOptions = {
  /**
   * Storage used for persisted state JSON strings.
   *
   * Providers may encode the strings to UTF-8 or another native representation.
   * Defaults to the app's storage.
   */
  readonly storage?: IStorage<string, string>;

  /**
   * Prefix applied to conversation and user storage keys.
   * @default 'ts'
   */
  readonly keyPrefix?: string;

  /**
   * Provider-defined options passed unchanged on every state write.
   */
  readonly storageOptions?: IStorageSetOptions;

};
