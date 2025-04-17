import express from 'express';

import {
  $Activity,
  Activity,
  ConversationReference,
  Credentials,
  IToken,
  JsonWebToken,
} from '@microsoft/teams.api';
import {
  Dependency,
  Event,
  HttpPlugin,
  IActivityEvent,
  IErrorEvent,
  ISender,
  Logger,
  Plugin,
  manifest,
} from '@microsoft/teams.apps';
import { ILogger } from '@microsoft/teams.common';
import * as $http from '@microsoft/teams.common/http';

import {
  ActivityHandler,
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
} from 'botbuilder';

import pkg from '../package.json';

export type BotBuilderPluginOptions = {
  readonly adapter?: CloudAdapter;
  readonly handler?: ActivityHandler;
};

@Plugin({
  name: 'http',
  version: pkg.version,
})
export class BotBuilderPlugin extends HttpPlugin implements ISender {
  @Logger()
  declare readonly logger: ILogger;

  @Dependency()
  declare readonly client: $http.Client;

  @Dependency()
  declare readonly manifest: Partial<manifest.Manifest>;

  @Dependency({ optional: true })
  declare readonly botToken?: IToken;

  @Dependency({ optional: true })
  declare readonly graphToken?: IToken;

  @Dependency({ optional: true })
  readonly credentials?: Credentials;

  @Event('error')
  declare readonly $onError: (event: IErrorEvent) => void;

  @Event('activity')
  declare readonly $onActivity: (event: IActivityEvent) => void;

  protected adapter?: CloudAdapter;
  protected handler?: ActivityHandler;

  constructor(options?: BotBuilderPluginOptions) {
    super();
    this.adapter = options?.adapter;
    this.handler = options?.handler;
  }

  onInit() {
    if (!this.adapter) {
      const clientId = this.credentials?.clientId;
      const clientSecret =
        this.credentials && 'clientSecret' in this.credentials
          ? this.credentials?.clientSecret
          : undefined;
      const tenantId =
        this.credentials && 'tenantId' in this.credentials ? this.credentials?.tenantId : undefined;

      this.adapter = new CloudAdapter(
        new ConfigurationBotFrameworkAuthentication(
          {},
          new ConfigurationServiceClientCredentialFactory({
            MicrosoftAppType: tenantId ? 'SingleTenant' : 'MultiTenant',
            MicrosoftAppId: clientId,
            MicrosoftAppPassword: clientSecret,
            MicrosoftAppTenantId: tenantId,
          })
        )
      );
    }
  }

  protected async onRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!this.adapter) {
      throw new Error('plugin not registered');
    }

    try {
      const authorization = req.headers.authorization?.replace('Bearer ', '');

      if (!authorization) {
        res.status(401).send('unauthorized');
        return;
      }

      await this.adapter.process(req, res, async (context) => {
        if (!context.activity.id) return;

        if (this.handler) {
          await this.handler.run(context);
        }

        if (res.headersSent) {
          return next();
        }

        const token = new JsonWebToken(authorization);
        const activity = new $Activity(context.activity as any) as Activity;
        const ref: ConversationReference = {
          serviceUrl: activity.serviceUrl || token.serviceUrl,
          activityId: activity.id,
          bot: activity.recipient,
          channelId: activity.channelId,
          conversation: activity.conversation,
          locale: activity.locale,
          user: activity.from,
        };

        this.pending[context.activity.id] = res;
        this.$onActivity({
          sender: this,
          token,
          activity,
          ref,
        });
      });
    } catch (err) {
      this.logger.error(err);

      if (!res.headersSent) {
        res.status(500).send('internal server error');
      }
    }
  }
}
