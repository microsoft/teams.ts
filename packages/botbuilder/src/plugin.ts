import express from 'express';

import { App, HttpPlugin } from '@microsoft/spark.apps';
import { Activity, JsonWebToken } from '@microsoft/spark.api';

import {
  ActivityHandler,
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
} from 'botbuilder';

export type BotBuilderPluginOptions = {
  readonly adapter?: CloudAdapter;
  readonly handler?: ActivityHandler;
};

export class BotBuilderPlugin extends HttpPlugin {
  protected adapter?: CloudAdapter;
  protected handler?: ActivityHandler;

  constructor(options?: BotBuilderPluginOptions) {
    super();
    this.adapter = options?.adapter;
    this.handler = options?.handler;
  }

  onInit(app: App) {
    super.onInit(app);

    if (!this.adapter) {
      const clientId = app.credentials?.clientId;
      const clientSecret =
        app.credentials && 'clientSecret' in app.credentials
          ? app.credentials?.clientSecret
          : undefined;
      const tenantId =
        app.credentials && 'tenantId' in app.credentials ? app.credentials?.tenantId : undefined;

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
    if (!this.app || !this.adapter) {
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

        this.pending[context.activity.id] = res;
        this.events.emit('activity.received', {
          token: new JsonWebToken(authorization),
          activity: context.activity as Activity,
        });
      });
    } catch (err) {
      this.log.error(err);

      if (!res.headersSent) {
        res.status(500).send('internal server error');
      }
    }
  }
}
