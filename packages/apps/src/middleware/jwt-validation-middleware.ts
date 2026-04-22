import express from 'express';

import { Activity, CloudEnvironment, Credentials, IToken } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { ServiceTokenValidator } from './auth/service-token-validator';

export type JwtValidationParams = {
  credentials?: Credentials;
  logger: ILogger;
  cloud?: CloudEnvironment;
};

export type JwtValidatedRequest = express.Request & {
  validatedToken?: IToken;
};

export function withJwtValidation(params: JwtValidationParams) {
  const { credentials, logger: inputLogger, cloud } = params;
  const logger = inputLogger?.child('jwt-validation-middleware') ?? new ConsoleLogger('jwt-validation-middleware');

  // Create service token validator if credentials are provided
  let validator: ServiceTokenValidator | null;
  if (credentials?.clientId) {
    validator = new ServiceTokenValidator(
      credentials.clientId,
      credentials.tenantId,
      undefined,
      logger,
      undefined, // additionalAllowedDomains
      cloud
    );
  } else {
    logger.debug('No credentials provided, skipping service token validation');
    validator = null;
  }

  return async (
    req: JwtValidatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    if (!validator) {
      logger.debug('No service token validator configured, skipping validation');
      next();
      return;
    }

    const authHeader = req.headers.authorization;
    if (!authHeader) {
      res.status(401).send('unauthorized');
      return;
    }

    const activity: Activity = req.body;

    try {
      const token = await validator.check(authHeader, activity);
      logger.debug(`validated service token for activity ${activity.id}`);
      // Store the validated token in the request for use in subsequent handlers
      req.validatedToken = token;
      next();
    } catch (err) {
      logger.error('Token validation failed:', err);
      res.status(401).send('Invalid token');
    }
  };
}