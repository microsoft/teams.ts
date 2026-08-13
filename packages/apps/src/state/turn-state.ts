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
 * Mutable key/value state scoped to one activity turn.
 *
 * Values are persisted as JSON at the end of the turn when the state is dirty.
 * Instances are not thread-safe and must not be retained after the handler completes.
 */
export class TurnState implements Iterable<[string, unknown]> {
  private readonly data: Map<string, unknown>;
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
  get<T = unknown>(key: string): T | undefined {
    this.ensureActive();
    return this.data.get(key) as T | undefined;
  }

  /**
   * Writes a value and marks this scope dirty.
   *
   * Values must be JSON-serializable when the turn is saved.
   * @param key Stable key used to persist the value.
   * @param value Value to store.
   */
  set<T>(key: string, value: T): this {
    this.ensureActive();
    this.data.set(key, value);
    this.dirty = true;
    return this;
  }

  /**
   * Removes a value. The scope is marked dirty only when the key existed.
   * @param key Key to remove.
   */
  delete(key: string): boolean {
    this.ensureActive();
    const deleted = this.data.delete(key);
    this.dirty ||= deleted;
    return deleted;
  }

  /**
   * Tests whether a key exists in this scope.
   * @param key Key to test.
   */
  has(key: string): boolean {
    this.ensureActive();
    return this.data.has(key);
  }

  /** Removes every value. An already-empty scope remains clean. */
  clear(): void {
    this.ensureActive();
    if (this.data.size === 0) {
      return;
    }
    this.data.clear();
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
    this.dirty = false;
  }

  private ensureActive(): void {
    if (this.sealed) {
      throw new TurnStateSealedError();
    }
  }
}
