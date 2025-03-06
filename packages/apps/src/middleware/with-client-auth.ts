import express from 'express';

import { ILogger } from '@microsoft/spark.common';
import { Credentials } from '@microsoft/spark.api';

import { IClientContext } from '../contexts';

export type WithClientAuthParams = Partial<Credentials> & {
  readonly logger: ILogger;
};

export type ClientAuthRequest = express.Request & {
  context?: IClientContext;
};

export function withClientAuth(params: WithClientAuthParams) {
  const log = params.logger;
  const clientId = params.clientId;
  const clientSecret = 'clientSecret' in params ? params.clientSecret : undefined;
  const tenantId = 'tenantId' in params ? params.tenantId : undefined;

  return (req: ClientAuthRequest, res: express.Response, next: express.NextFunction) => {
    const appClientId = req.header('X-Spark-App-Client-Id');
    const appClientSecret = req.header('X-Spark-App-Client-Secret');
    const appTenantId = req.header('X-Spark-App-Tenant-Id');
    const appSessionId = req.header('X-Spark-App-Session-Id');
    const pageId = req.header('X-Spark-Page-Id');

    if (
      !pageId ||
      !appSessionId ||
      appClientId !== clientId ||
      appClientSecret !== clientSecret ||
      appTenantId !== tenantId
    ) {
      log.debug('unauthorized');
      res.status(401).send('unauthorized');
      return;
    }

    req.context = {
      pageId,
      appSessionId,
      appId: req.header('X-Spark-App-Id'),
      tenantId: req.header('X-Spark-Tenant-Id'),
      userId: req.header('X-Spark-User-Id'),
      teamId: req.header('X-Spark-Team-Id'),
      messageId: req.header('X-Spark-Message-Id'),
      channelId: req.header('X-Spark-Channel-Id'),
      chatId: req.header('X-Spark-Chat-Id'),
      meetingId: req.header('X-Spark-Meeting-Id'),
      subPageId: req.header('X-Spark-Sub-Page-Id'),
    };

    next();
  };
}
