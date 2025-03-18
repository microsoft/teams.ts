/**
 * any type that has a
 * constructor()
 */
export type Constructor<T> = {
  new (...args: any[]): T;
};
