/**
 * an Error originating from
 * the parent window
 */
export type ClientError = {
  readonly errorCode?: number | string;
  readonly message: string | Error;
};
