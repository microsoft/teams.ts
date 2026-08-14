/**
 * Options applied when writing a storage value.
 */
export interface IStorageSetOptions {
  /**
   * Non-negative, finite time-to-live in seconds. Omit to store without expiration.
   *
   * Setting an existing key without a TTL clears its previous expiration.
   */
  readonly ttl?: number;
}

/**
 * a storage container that can
 * get/set/delete items by a unique key
 */
export interface IStorage<TKey = any, TValue = any> {
  get(key: TKey): TValue | undefined | Promise<TValue | undefined>;
  /**
   * Stores a value.
   *
   * Providers must honor supplied options or throw when an option is unsupported.
   */
  set(key: TKey, value: TValue, options?: IStorageSetOptions): void | Promise<void>;
  delete(key: TKey): void | Promise<void>;
}

/**
 * a list storage container that can
 * store/query iterable data
 */
export interface IListStorage<TValue = any> extends IStorage<number, TValue> {
  push(value: TValue): void | Promise<void>;
  pop(): (TValue | undefined) | Promise<TValue | undefined>;
  values(): Array<TValue> | Promise<Array<TValue>>;
  length(): number | Promise<number>;
  where(predicate: (value: TValue, index: number) => boolean): Array<TValue>;
}
