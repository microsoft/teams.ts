import express from 'express';

import { Credentials } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { IClientContext } from '../contexts';

import { JwtValidator } from './auth/jwt-validator';

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

  return async (
    req: JwtRemoteFunctionRequest,
    res: express.Response,
    next: express.NextFunction
  ) => {
    const appSessionId = req.header('X-Teams-App-Session-Id');
    const pageId = req.header('X-Teams-Page-Id');
    const authorization = req.header('Authorization')?.split(' ');
    const authToken =
      authorization?.length === 2 && authorization[0].toLowerCase() === 'bearer'
        ? authorization[1]
        : '';

    const tokenPayload = !entraTokenValidator
      ? null
      : await entraTokenValidator.validateAccessToken(authToken);
    if (
      !pageId ||
      !appSessionId ||
      !authToken ||
      !entraTokenValidator ||
      !tokenPayload
    ) {
      log.debug('unauthorized');
      res.status(401).send('unauthorized');
      return;
    }

    req.context = {
      appId: tokenPayload?.['appId'],
      appSessionId,
      authToken,
      channelId: req.header('X-Teams-Channel-Id'),
      chatId: req.header('X-Teams-Chat-Id'),
      meetingId: req.header('X-Teams-Meeting-Id'),
      messageId: req.header('X-Teams-Message-Id'),
      pageId,
      subPageId: req.header('X-Teams-Sub-Page-Id'),
      teamId: req.header('X-Teams-Team-Id'),
      tenantId: tokenPayload['tid'],
      userId: tokenPayload['oid'],
      userName: tokenPayload['name'],
    };

    next();
  };
}
