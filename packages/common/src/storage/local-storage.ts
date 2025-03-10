import { IStorage } from './storage';

export type LocalStorageOptions = {
  /**
   * max number of records.
   */
  readonly max?: number;
};

export class LocalStorage<T = any> implements IStorage<T> {
  protected readonly _store: Map<string, T>;
  protected readonly _keys: string[];
  protected readonly _options: LocalStorageOptions;

  get keys() {
    return this._keys;
  }

  get size() {
    return this._store.size;
  }

  constructor(data: Record<string, T> = {}, options: LocalStorageOptions = {}) {
    this._store = new Map<string, T>(Object.entries(data));
    this._keys = Object.keys(data);
    this._options = options;
  }

  get(key: string) {
    this._hit(key);
    return this._store.get(key);
  }

  set(key: string, value: T) {
    if (!this._hit(key)) {
      this._keys.push(key);
    }

    if (this._options.max) {
      if (this._keys.length > this._options.max) {
        const k = this._keys.shift();

        if (k) {
          this._store.delete(k);
        }
      }
    }

    this._store.set(key, value);
  }

  delete(key: string) {
    const i = this._keys.findIndex((k) => key === k);

    if (i > -1) {
      this._keys.splice(i, 1);
    }

    this._store.delete(key);
  }

  toString() {
    return JSON.stringify(
      Array.from(this._store.entries()).map(([key, value]) => ({
        key,
        value,
      })),
      null,
      2
    );
  }

  protected _hit(key: string) {
    if (!this._store.has(key)) return false;
    if (this._keys[this._keys.length - 1] === key) return true;

    const idx = this._keys.findIndex((k) => key === k);

    /* istanbul ignore next */
    if (idx < 0) return false;

    for (let i = idx + 1; i < this._keys.length; i++) {
      const tmp = this._keys[i - 1];
      this._keys[i - 1] = this._keys[i];
      this._keys[i] = tmp;
    }

    return true;
  }
}
