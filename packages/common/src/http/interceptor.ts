import { AxiosInterceptorOptions, InternalAxiosRequestConfig, AxiosResponse } from 'axios';

import { Logger } from '../logging';

export interface Interceptor {
  options?: AxiosInterceptorOptions;
  request?: RequestInterceptor;
  response?: ResponseInterceptor;
  error?: ErrorInterceptor;
}

export interface ErrorContext<T = any> {
  /**
   * The error
   */
  readonly error: T;

  /**
   * The clients logger instance
   */
  readonly log: Logger;
}

/**
 * A method called to intercept a request that failed
 */
export type ErrorInterceptor<T = any> = (ctx: ErrorContext<T>) => any;

export interface RequestContext<D = any> {
  /**
   * The outgoing request config
   */
  readonly config: InternalAxiosRequestConfig<D>;

  /**
   * The clients logger instance
   */
  readonly log: Logger;
}

/**
 * A method called to intercept a successful request
 */
export type RequestInterceptor<D = any> = (
  ctx: RequestContext<D>
) => InternalAxiosRequestConfig | Promise<InternalAxiosRequestConfig>;

export interface ResponseContext<T = any, D = any> {
  /**
   * The response
   */
  readonly res: AxiosResponse<T, D>;

  /**
   * The clients logger instance
   */
  readonly log: Logger;
}

/**
 * A method called to intercept a successful response
 */
export type ResponseInterceptor<T = any, D = any> = (
  ctx: ResponseContext<T, D>
) => AxiosResponse | Promise<AxiosResponse>;
