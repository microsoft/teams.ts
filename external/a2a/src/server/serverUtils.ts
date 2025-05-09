import { Response } from 'express';

import * as schema from '../common/schema';

import { A2AError } from './types/a2a-error';

const isType =
  <T extends schema.A2ARequest['method']>(type: T) =>
    (
      req: schema.A2ARequest
    ): req is Extract<schema.A2ARequest, { method: T }> => {
      return req.method === type;
    };

/**
 * Validates if the reqest is of the expected type.
 * If not, it sends a 400 response with an error message.
 */
export const validateRequest = <T extends schema.A2ARequest['method']>(
  type: T,
  req: schema.A2ARequest,
  res: Response
): req is Extract<schema.A2ARequest, { method: T }> => {
  if (isType(type)(req)) {
    return true;
  }

  res
    .status(400)
    .send(
      A2AError.invalidRequest(
        'Invalid JSON-RPC request structure'
      ).toJSONRPCError()
    );
  return false;
};

export const createSuccessResponse = <T>(
  taskId: number | string | null,
  result: T
): schema.JSONRPCResponse<T, schema.A2AError> => {
  if (taskId === null) {
    // This shouldn't happen for methods that expect a response, but safeguard
    throw A2AError.internalError('Cannot create success response for null ID.');
  }
  return {
    jsonrpc: '2.0',
    id: taskId,
    result: result,
  };
};

export const createErrorResponse = (
  id: number | string | null | undefined,
  error: schema.JSONRPCError<unknown>
): schema.JSONRPCResponse<null, schema.A2AError> => {
  // For errors, ID should be the same as request ID, or null if that couldn't be determined
  return {
    jsonrpc: '2.0',
    id: id, // Can be null if request ID was invalid/missing
    error: error,
  };
};

/** Normalizes various error types into a JSONRPCResponse containing an error */
export const normalizeError = (
  error: any,
  reqId: number | string | null | undefined,
  taskId?: string
): schema.JSONRPCResponse<null, schema.A2AError> => {
  let a2aError: A2AError;
  if (error instanceof A2AError) {
    a2aError = error;
  } else if (error instanceof Error) {
    // Generic JS error
    a2aError = A2AError.internalError(error.message, { stack: error.stack });
  } else {
    // Unknown error type
    a2aError = A2AError.internalError('An unknown error occurred.', error);
  }

  // Ensure Task ID context is present if possible
  if (taskId && !a2aError.taskId) {
    a2aError.taskId = taskId;
  }

  console.error(
    `Error processing request (Task: ${a2aError.taskId ?? 'N/A'}, ReqID: ${reqId ?? 'N/A'
    }):`,
    a2aError
  );

  return createErrorResponse(reqId, a2aError.toJSONRPCError());
};
