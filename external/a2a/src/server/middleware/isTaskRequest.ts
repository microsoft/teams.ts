import express from 'express';

import * as schema from '../../common/schema';
import { A2AError } from '../types/a2a-error';

export function isTaskRequest() {
  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const valid =
      typeof req.body === 'object' &&
      req.body !== null &&
      req.body.jsonrpc === '2.0' &&
      typeof req.body.method === 'string' &&
      (req.body.id === null ||
        typeof req.body.id === 'string' ||
        typeof req.body.id === 'number') && // ID is required for requests needing response
      (req.body.params === undefined ||
        typeof req.body.params === 'object' || // Allows null, array, or object
        Array.isArray(req.body.params));

    if (!valid) {
      res
        .status(400)
        .send(A2AError.invalidRequest('Invalid JSON-RPC request structure').toJSONRPCError());
      return;
    }

    const request: schema.A2ARequest = req.body;

    if (request.method === 'tasks/send') {
      if (!request.params?.id) {
        res.status(400).send(A2AError.invalidParams('Invalid or missing task ID').toJSONRPCError());
      }
    }

    next();
  };
}