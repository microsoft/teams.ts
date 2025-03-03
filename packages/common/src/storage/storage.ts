export interface Storage<T = any> {
  get(key: string): T | undefined | Promise<T | undefined>;
  set(key: string, value: T): void | Promise<void>;
  delete(key: string): void | Promise<void>;
}
