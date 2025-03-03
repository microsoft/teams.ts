/**
 * Object representing error information
 */
export interface HttpError {
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
}

/**
 * Object representing inner http error
 */
export interface InnerHttpError {
  /**
   * HttpStatusCode from failed request
   */
  statusCode: number;

  /**
   * Body from failed request
   */
  body: any;
}

/**
 * An HTTP API response
 */
export interface HttpErrorResponse {
  /**
   * Error message
   */
  error: HttpError;
}
