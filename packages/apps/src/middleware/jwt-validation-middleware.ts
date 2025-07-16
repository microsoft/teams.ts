import express from 'express';

import { Activity, Credentials, IToken, JsonWebToken } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { createServiceTokenValidator } from './auth/jwt-validator';

export type JwtValidationParams = {
  credentials?: Credentials;
  logger: ILogger;
};

export type JwtValidatedRequest = express.Request & {
  validatedToken?: IToken;
};

export function withJwtValidation(params: JwtValidationParams) {
  const { credentials, logger } = params;

  // Create service token validator if credentials are provided and not in local env
  const serviceTokenValidator = (process.env.NODE_ENV !== 'local' && credentials?.clientId)
    ? createServiceTokenValidator(
      credentials.clientId,
      credentials.tenantId,
      undefined,
      logger
    )
    : null;

  return async (
    req: JwtValidatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const authorization = req.headers.authorization?.replace('Bearer ', '');

    if (!authorization && process.env.NODE_ENV !== 'local') {
      res.status(401).send('unauthorized');
      return;
    }

    if (serviceTokenValidator) {
      if (!authorization) {
        res.status(401).send('unauthorized no authorization header');
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
        return;
      }
    } else {
      // For local development, create a mock token
      const activity: Activity = req.body;
      req.validatedToken = {
        appId: '',
        from: 'azure',
        fromId: '',
        serviceUrl: activity.serviceUrl || '',
        isExpired: () => false,
      };
      next();
    }
  };
}