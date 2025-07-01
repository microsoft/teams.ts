import express from 'express';

import { Credentials } from '@microsoft/teams.api';
import { ILogger } from '@microsoft/teams.common';

import { IClientContext } from '../contexts';

import { EntraTokenValidator } from './entra-token-validator';

export type WithClientAuthParams = Partial<Credentials> & {
  entraTokenValidator?: Pick<
    EntraTokenValidator,
    'validateAccessToken' | 'getTokenPayload'
  >;
  readonly logger: ILogger;
};

export type ClientAuthRequest = express.Request & {
  context?: IClientContext;
};

export function withClientAuth(params: WithClientAuthParams) {
  const entraTokenValidator = params.entraTokenValidator;
  const log = params.logger;

  return async (
    req: ClientAuthRequest,
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

    const validatedToken = !entraTokenValidator
      ? null
      : await entraTokenValidator.validateAccessToken(log, authToken);
    const tokenPayload =
      validatedToken && entraTokenValidator?.getTokenPayload(validatedToken);

    if (
      !pageId ||
      !appSessionId ||
      !validatedToken ||
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
