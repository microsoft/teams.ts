/**
 * a storage container that can
 * get/set/delete items by a unique key
 */
export interface IStorage<TKey = any, TValue = any> {
  get(key: TKey): TValue | undefined | Promise<TValue | undefined>;
  set(key: TKey, value: TValue): void | Promise<void>;
  delete(key: TKey): void | Promise<void>;
}

/**
 * a list storage container that can
 * store/query iterable data
 *
 * @deprecated Use `IStorage` for persistence and keep ordered collection
 * semantics in an application-specific abstraction.
 */
export interface IListStorage<TValue = any> extends IStorage<number, TValue> {
  push(value: TValue): void | Promise<void>;
  pop(): (TValue | undefined) | Promise<TValue | undefined>;
  values(): Array<TValue> | Promise<Array<TValue>>;
  length(): number | Promise<number>;
  where(predicate: (value: TValue, index: number) => boolean): Array<TValue>;
}
