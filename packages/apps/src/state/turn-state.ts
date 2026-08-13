/**
 * Error thrown when code accesses turn state after its activity turn has ended.
 */
export class TurnStateSealedError extends Error {
  constructor() {
    super('Turn state is no longer available because the activity turn has completed.');
    this.name = 'TurnStateSealedError';
  }
}

/**
 * Stable runtime token for a typed state value.
 *
 * The name is persisted with a `$` prefix and must remain stable across
 * deployments. Use a globally unique, versioned name to avoid collisions.
 */
export interface IStateKey<T> {
  /**
   * Stable logical name for the persisted value.
   */
  readonly name: string;

  /**
   * Creates the default value when the state entry does not exist.
   */
  readonly create: () => T;

  /**
   * Rehydrates a JSON value loaded from storage.
   *
   * Omit when the persisted JSON value already has the desired runtime shape.
   */
  readonly deserialize?: (value: unknown) => T;
}

/**
 * Creates a stable runtime token for typed state.
 *
 * TypeScript generic types do not exist at runtime, so callers must use an
 * explicit stable name rather than relying on a constructor or class name.
 *
 * @param name Stable, globally unique logical name. It is persisted as `$${name}`.
 * @param create Factory for a missing value.
 * @param deserialize Optional rehydration function for values loaded from JSON.
 */
export function createStateKey<T>(
  name: string,
  create: () => T,
  deserialize?: (value: unknown) => T
): IStateKey<T> {
  if (!name) {
    throw new Error('A typed state key name is required.');
  }

  return Object.freeze({ name, create, deserialize });
}

/**
 * Mutable key/value state scoped to one activity turn.
 *
 * Values are persisted as JSON at the end of the turn when the state is dirty.
 * Instances are not thread-safe and must not be retained after the handler completes.
 */
export class TurnState implements Iterable<[string, unknown]> {
  private readonly data: Map<string, unknown>;
  private readonly hydrated = new Set<string>();
  private dirty = false;
  private sealed = false;

  /**
   * Creates turn state from an optional persisted snapshot.
   * @param data Initial values. Loading values does not mark the state dirty.
   */
  constructor(data: Readonly<Record<string, unknown>> = {}) {
    this.data = new Map(Object.entries(data));
  }

  /** Whether this scope changed during the current turn. */
  get isDirty(): boolean {
    return this.dirty;
  }

  /** Whether this scope contains no values. */
  get isEmpty(): boolean {
    return this.data.size === 0;
  }

  /** Whether this scope has been sealed after turn processing. */
  get isSealed(): boolean {
    return this.sealed;
  }

  /** Number of values in this scope. */
  get size(): number {
    return this.data.size;
  }

  /**
   * Reads a value from this scope.
   * @param key Stable key used to persist the value.
   */
  get<T>(key: IStateKey<T>): T;
  get<T = unknown>(key: string): T | undefined;
  get<T = unknown>(key: string | IStateKey<T>): T | undefined {
    this.ensureActive();
    if (typeof key === 'string') {
      return this.data.get(key) as T | undefined;
    }

    const persistedKey = this.persistedKey(key);
    if (!this.data.has(persistedKey)) {
      const value = key.create();
      this.data.set(persistedKey, value);
      this.hydrated.add(persistedKey);
      this.dirty = true;
      return value;
    }

    const value = this.data.get(persistedKey);
    if (key.deserialize && !this.hydrated.has(persistedKey)) {
      const hydrated = key.deserialize(value);
      this.data.set(persistedKey, hydrated);
      this.hydrated.add(persistedKey);
      this.dirty = true;
      return hydrated;
    }

    return value as T;
  }

  /**
   * Writes a value and marks this scope dirty.
   *
   * Values must be JSON-serializable when the turn is saved.
   * @param key Stable key used to persist the value.
   * @param value Value to store.
   */
  set<T>(key: IStateKey<T>, value: T): this;
  set<T>(key: string, value: T): this;
  set<T>(key: string | IStateKey<T>, value: T): this {
    this.ensureActive();
    const persistedKey = typeof key === 'string' ? key : this.persistedKey(key);
    this.data.set(persistedKey, value);
    if (typeof key !== 'string') {
      this.hydrated.add(persistedKey);
    }
    this.dirty = true;
    return this;
  }

  /**
   * Removes a value. The scope is marked dirty only when the key existed.
   * @param key Key to remove.
   */
  delete(key: string | IStateKey<unknown>): boolean {
    this.ensureActive();
    const persistedKey = typeof key === 'string' ? key : this.persistedKey(key);
    const deleted = this.data.delete(persistedKey);
    this.hydrated.delete(persistedKey);
    this.dirty ||= deleted;
    return deleted;
  }

  /**
   * Tests whether a key exists in this scope.
   * @param key Key to test.
   */
  has(key: string | IStateKey<unknown>): boolean {
    this.ensureActive();
    return this.data.has(
      typeof key === 'string' ? key : this.persistedKey(key)
    );
  }

  /** Removes every value. An already-empty scope remains clean. */
  clear(): void {
    this.ensureActive();
    if (this.data.size === 0) {
      return;
    }
    this.data.clear();
    this.hydrated.clear();
    this.dirty = true;
  }

  /** Returns a snapshot iterator over the keys in this scope. */
  keys(): IterableIterator<string> {
    this.ensureActive();
    return new Map(this.data).keys();
  }

  /** Returns a snapshot iterator over the values in this scope. */
  values(): IterableIterator<unknown> {
    this.ensureActive();
    return new Map(this.data).values();
  }

  /** Returns a snapshot iterator over the entries in this scope. */
  entries(): IterableIterator<[string, unknown]> {
    this.ensureActive();
    return new Map(this.data).entries();
  }

  /**
   * Invokes a callback for each value in a snapshot of this scope.
   * @param callback Callback invoked with each value, key, and this state object.
   * @param thisArg Optional callback receiver.
   */
  forEach(
    callback: (value: unknown, key: string, state: TurnState) => void,
    thisArg?: unknown
  ): void {
    this.ensureActive();
    for (const [key, value] of new Map(this.data)) {
      callback.call(thisArg, value, key, this);
    }
  }

  /**
   * Returns a shallow record snapshot for persistence.
   *
   * This remains available after sealing so storage adapters can finish a save.
   */
  toRecord(): Record<string, unknown> {
    return Object.fromEntries(this.data);
  }

  /** Seals this scope so handlers cannot access it after the turn completes. */
  seal(): void {
    this.sealed = true;
  }

  /** Returns a snapshot iterator over this scope. */
  [Symbol.iterator](): IterableIterator<[string, unknown]> {
    return this.entries();
  }

  /** @internal Clears state after persisted records are deleted. */
  reset(): void {
    this.ensureActive();
    this.data.clear();
    this.hydrated.clear();
    this.dirty = false;
  }

  private persistedKey(key: IStateKey<unknown>): string {
    return `$${key.name}`;
  }

  private ensureActive(): void {
    if (this.sealed) {
      throw new TurnStateSealedError();
    }
  }
}
