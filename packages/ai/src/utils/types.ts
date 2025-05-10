export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: Required<T[P]> };

export type PromiseOrValue<T> = T | Promise<T>;