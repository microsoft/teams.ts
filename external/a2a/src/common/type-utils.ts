export type Success<T> = {
    success: true;
    data: T;
};

export type Failure = {
    success: false;
    error: Error;
};

export type Result<T> = Success<T> | Failure;

export type PromiseOrValue<T> = T | Promise<T>;
export type ValueOrFactory<T> = T | (() => PromiseOrValue<T>);