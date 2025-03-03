/**
 * an Error originating from
 * the parent window
 */
export interface ClientError {
  readonly errorCode?: number | string;
  readonly message: string | Error;
}
