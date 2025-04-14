import express from 'express';

import { ILogger } from '@microsoft/spark.common';
import { Credentials } from '@microsoft/spark.api';

import { IClientContext } from '../contexts';
import { EntraTokenValidator } from './entra-token-validator';

export type WithClientAuthParams = Partial<Credentials> & {
  entraTokenValidator?: Pick<EntraTokenValidator, 'validateAccessToken' | 'getTokenPayload'>;
  readonly logger: ILogger;
};

export type ClientAuthRequest = express.Request & {
  context?: IClientContext;
};

export function withClientAuth(params: WithClientAuthParams) {
  const entraTokenValidator = params.entraTokenValidator;
  const log = params.logger;

  return async (req: ClientAuthRequest, res: express.Response, next: express.NextFunction) => {
    const appSessionId = req.header('X-Spark-App-Session-Id');
    const pageId = req.header('X-Spark-Page-Id');
    const authorization = req.header('Authorization')?.split(' ');
    const authToken =
      authorization?.length === 2 && authorization[0].toLowerCase() === 'bearer'
        ? authorization[1]
        : '';

    const validatedToken = !entraTokenValidator
      ? null
      : await entraTokenValidator.validateAccessToken(log, authToken);

    if (!pageId || !appSessionId || !validatedToken || !entraTokenValidator) {
      log.debug('unauthorized');
      res.status(401).send('unauthorized');
      return;
    }

    const tokenPayload = entraTokenValidator.getTokenPayload(validatedToken);

    req.context = {
      appId: tokenPayload?.['appId'],
      appSessionId,
      authToken,
      channelId: req.header('X-Spark-Channel-Id'),
      chatId: req.header('X-Spark-Chat-Id'),
      meetingId: req.header('X-Spark-Meeting-Id'),
      messageId: req.header('X-Spark-Message-Id'),
      pageId,
      subPageId: req.header('X-Spark-Sub-Page-Id'),
      teamId: req.header('X-Spark-Team-Id'),
      tenantId: tokenPayload?.['tid'],
      userId: tokenPayload?.['oid'],
    };

    next();
  };
}
