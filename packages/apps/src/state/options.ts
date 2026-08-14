import type { IStorage, IStorageSetOptions } from '@microsoft/teams.common';

/** Configures per-turn conversation and user state. */
export type StateOptions = {
  /**
   * Storage used for persisted JSON-native state records.
   *
   * The provider owns serialization and encoding. Defaults to the app's storage.
   */
  readonly storage?: IStorage<string, Record<string, unknown>>;

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
