/**
 * Object representing error information
 */
export type HttpError = {
  /**
   * Error code
   */
  code: string;

  /**
   * Error message
   */
  message: string;

  /**
   * Error from inner http call
   */
  innerHttpError: InnerHttpError;
};

/**
 * Object representing inner http error
 */
export type InnerHttpError = {
  /**
   * HttpStatusCode from failed request
   */
  statusCode: number;

  /**
   * Body from failed request
   */
  body: any;
};

/**
 * An HTTP API response
 */
export type HttpErrorResponse = {
  /**
   * Error message
   */
  error: HttpError;
};
