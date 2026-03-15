import {
  ActivityHandler,
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
} from 'botbuilder';

import express from 'express';

import { Credentials, IToken } from '@microsoft/teams.api';
import {
  Dependency,
  ExpressAdapter,
  HttpServer,
  IHttpServer,
  IPlugin,
  Logger,
  Plugin,
  manifest,
} from '@microsoft/teams.apps';
import { ILogger } from '@microsoft/teams.common';
import * as $http from '@microsoft/teams.common/http';

import pkg from '../package.json';

export type BotBuilderPluginOptions = {
  readonly adapter?: CloudAdapter;
  readonly handler?: ActivityHandler;
};

@Plugin({
  name: 'botbuilder',
  version: pkg.version,
})
export class BotBuilderPlugin implements IPlugin {
  @Logger()
  declare readonly logger: ILogger;

  @Dependency()
  declare readonly client: $http.Client;

  @HttpServer()
  declare readonly httpServer: IHttpServer;

  @Dependency()
  declare readonly manifest: Partial<manifest.Manifest>;

  // Even though we don't use this in this plugin, the plugin chain
  // has it, and the dependency injection system only looks at the surface
  // level dependencies of the plugin.
  @Dependency({ optional: true })
  declare readonly credentials?: Credentials;

  @Dependency({ optional: true })
  declare readonly botToken?: () => IToken;

  protected cloudAdapter?: CloudAdapter;
  protected handler?: ActivityHandler;

  constructor(options?: BotBuilderPluginOptions) {
    this.cloudAdapter = options?.adapter;
    this.handler = options?.handler;
  }

  async onInit() {
    const adapter = this.httpServer.adapter;
    if (!(adapter instanceof ExpressAdapter)) {
      throw new Error(
        'BotBuilderPlugin requires ExpressAdapter. ' +
        'Please use: new App({ httpServerAdapter: new ExpressAdapter() })'
      );
    }

    if (!this.cloudAdapter) {
      const clientId = this.credentials?.clientId;
      const clientSecret =
        this.credentials && 'clientSecret' in this.credentials
          ? this.credentials?.clientSecret
          : undefined;
      const tenantId =
        this.credentials && 'tenantId' in this.credentials ? this.credentials?.tenantId : undefined;

      this.cloudAdapter = new CloudAdapter(
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

    // Register /api/messages route with BotBuilder handler
    adapter.post(
      '/api/messages',
      express.json(),
      (req: express.Request, res: express.Response, next: express.NextFunction) => {
        this.onRequest(req, res, next).catch(next);
      }
    );
  }

  protected async onRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!this.cloudAdapter) {
      throw new Error('plugin not registered');
    }

    try {
      await this.cloudAdapter.process(req, res, async (context) => {
        if (!context.activity.id) return;

        if (this.handler) {
          await this.handler.run(context);
        }

        if (res.headersSent) {
          this.logger.debug('Request handled by botbuilder. Not sending to TeamsSDK');
          return next();
        }

        // Now send it to the TeamsSDK handler
        const response = await this.httpServer.handleRequest({
          body: req.body,
          headers: req.headers as Record<string, string>,
        });

        res.status(response.status || 200).send(response.body);
      });
    } catch (err) {
      this.logger.error(err);

      if (!res.headersSent) {
        res.status(500).send('internal server error');
      }
    }
  }
}
