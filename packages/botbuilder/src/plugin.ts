import http from 'http';

import {
  ActivityHandler,
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
} from 'botbuilder';

import express from 'express';

import { $Activity, Activity, Credentials, IToken } from '@microsoft/teams.api';
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
import { JwtValidatedRequest } from '@microsoft/teams.apps/dist/middleware';
import { ILogger } from '@microsoft/teams.common';
import * as $http from '@microsoft/teams.common/http';

import pkg from '../package.json';

export type BotBuilderPluginOptions = {
  readonly adapter?: CloudAdapter;
  readonly handler?: ActivityHandler;
  readonly server?: http.Server;
  readonly skipAuth?: boolean;
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

  // Even though we don't use this in this plugin, the plugin chain
  // has it, and the dependency injection system only looks at the surface
  // level dependencies of the plugin.
  @Dependency({ optional: true })
  declare readonly credentials?: Credentials;

  @Dependency({ optional: true })
  declare readonly botToken?: () => IToken;

  @Event('error')
  declare readonly $onError: (event: IErrorEvent) => void;

  @Event('activity')
  declare readonly $onActivity: (event: IActivityEvent) => void;

  protected adapter?: CloudAdapter;
  protected handler?: ActivityHandler;

  constructor(options?: BotBuilderPluginOptions) {
    super(options?.server, { skipAuth: options?.skipAuth });
    this.adapter = options?.adapter;
    this.handler = options?.handler;
  }

  onInit() {
    super.onInit();
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
    req: JwtValidatedRequest,
    res: express.Response,
    next: express.NextFunction
  ) {
    if (!this.adapter) {
      throw new Error('plugin not registered');
    }

    const activity: Activity = req.body;
    try {
      let token: IToken | undefined;
      if (req.validatedToken) {
        token = req.validatedToken;
      } else {
        token = {
          appId: '',
          from: 'azure',
          fromId: '',
          serviceUrl: activity.serviceUrl || '',
          isExpired: () => false,
        };
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
        this.$onActivity({
          sender: this,
          token,
          activity: new $Activity(context.activity as any) as Activity,
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
