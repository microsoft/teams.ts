import express from 'express';

import { Activity, Credentials, IToken, JsonWebToken } from '@microsoft/teams.api';
import { ConsoleLogger, ILogger } from '@microsoft/teams.common';

import { createServiceTokenValidator, JwtValidator } from './auth/jwt-validator';

export type JwtValidationParams = {
  credentials?: Credentials;
  logger: ILogger;
};

export type JwtValidatedRequest = express.Request & {
  validatedToken?: IToken;
};

export function withJwtValidation(params: JwtValidationParams) {
  const { credentials, logger: inputLogger } = params;
  const logger = inputLogger?.child('jwt-validation-middleware') ?? new ConsoleLogger('jwt-validation-middleware');

  // Create service token validator if credentials are provided
  let serviceTokenValidator: JwtValidator | null;
  if (credentials?.clientId) {
    serviceTokenValidator = createServiceTokenValidator(
      credentials.clientId,
      credentials.tenantId,
      undefined,
      logger
    );
  } else {
    logger.debug('No credentials provided, skipping service token validation');
    serviceTokenValidator = null;
  }

  return async (
    req: JwtValidatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const authorization = req.headers.authorization?.replace('Bearer ', '');

    if (!authorization) {
      res.status(401).send('unauthorized');
      return;
    }

    if (!serviceTokenValidator) {
      logger.debug('No service token validator configured, skipping validation');
      next();
      return;
    }

    const activity: Activity = req.body;
    // Use cached validator with per-request service URL validation
    const validationResult = await serviceTokenValidator.validateAccessToken(authorization, activity.serviceUrl ? {
      validateServiceUrl: { expectedServiceUrl: activity.serviceUrl }
    } : undefined);

    if (validationResult) {
      logger.debug(`validated service token for activity ${activity.id}`);
      // Store the validated token in the request for use in subsequent handlers
      req.validatedToken = new JsonWebToken(authorization);
      next();
    } else {
      res.status(401).send('Invalid token');
    }
  };
}