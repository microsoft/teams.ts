import express from 'express';

import { Credentials } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { IClientContext } from '../contexts';

import { JwtValidator } from './auth/jwt-validator';
import { RemoteFunctionValidator } from './auth/remote-function-validator';

export type WithRemoteFunctionJwtValidationParams = Partial<Credentials> & {
  entraTokenValidator?: Pick<JwtValidator, 'validateAccessToken'>;
  readonly logger: ILogger;
};

export type JwtRemoteFunctionRequest = express.Request & {
  context?: IClientContext;
};

/**
 * JWT validation middleware used to validate the entra token when remote functions are invoked.
 */
export function withRemoteFunctionJwtValidation(
  params: WithRemoteFunctionJwtValidationParams,
) {
  const entraTokenValidator = params.entraTokenValidator;
  const log = params.logger;

  // Create the validator once
  const validator = entraTokenValidator
    ? new RemoteFunctionValidator(entraTokenValidator, log)
    : null;

  return async (
    req: JwtRemoteFunctionRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!validator) {
      log.debug('unauthorized - no token validator configured');
      res.status(401).send('unauthorized');
      return;
    }

    // Convert Express headers to plain object
    const headers: Record<string, string> = {};
    Object.keys(req.headers).forEach(key => {
      const value = req.headers[key];
      if (typeof value === 'string') {
        headers[key.toLowerCase()] = value;
      }
    });

    const context = await validator.check(headers);
    if (!context) {
      res.status(401).send('unauthorized');
      return;
    }

    req.context = context;
    next();
  };
}
