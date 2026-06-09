import {
  Activity,
  ActivityHandler,
  CloudAdapter,
  ConfigurationBotFrameworkAuthentication,
  ConfigurationServiceClientCredentialFactory,
  InvokeResponse,
  TurnContext,
} from 'botbuilder';
import express from 'express';

import type { Credentials } from '@microsoft/teams.api';
import {
  ExpressAdapter,
  type HttpMethod,
  type HttpRouteHandler,
  type IHttpServerAdapter,
} from '@microsoft/teams.apps';

export type BotBuilderAdapterOptions = {
  /**
   * BotBuilder CloudAdapter. If omitted, one is constructed from credentials.
   */
  readonly cloudAdapter?: CloudAdapter;

  /**
   * BotBuilder activity handler to run before the Teams SDK handler.
   */
  readonly handler?: ActivityHandler;

  /**
   * Underlying HTTP adapter. Defaults to ExpressAdapter.
   */
  readonly httpServerAdapter?: IHttpServerAdapter;

  /**
   * Credentials used when constructing the default CloudAdapter.
   */
  readonly credentials?: Credentials;

};

const NOT_IMPLEMENTED = 501;

export class BotBuilderAdapter implements IHttpServerAdapter {
  private readonly httpServerAdapter: IHttpServerAdapter;
  private readonly handler?: ActivityHandler;
  private cloudAdapter?: CloudAdapter;

  constructor(options: BotBuilderAdapterOptions = {}) {
    this.httpServerAdapter = options.httpServerAdapter ?? new ExpressAdapter();
    this.cloudAdapter = options.cloudAdapter;
    this.handler = options.handler;

    if (!this.cloudAdapter) {
      this.cloudAdapter = this.createCloudAdapter(options.credentials);
    }
  }

  registerRoute(method: HttpMethod, path: string, handler: HttpRouteHandler): void {
    if (method !== 'POST') {
      this.httpServerAdapter.registerRoute(method, path, handler);
      return;
    }

    if (!(this.httpServerAdapter instanceof ExpressAdapter)) {
      throw new Error(
        'BotBuilderAdapter requires ExpressAdapter. ' +
        'Pass httpServerAdapter: new ExpressAdapter() or use the default.'
      );
    }

    this.httpServerAdapter.post(
      path,
      express.json(),
      async (req: express.Request, res: express.Response, next: express.NextFunction) => {
        await this.onRequest(req, res, next, handler);
      }
    );
  }

  serveStatic(path: string, directory: string): void {
    this.httpServerAdapter.serveStatic?.(path, directory);
  }

  async start(port: number | string): Promise<void> {
    if (!this.httpServerAdapter.start) {
      throw new Error('Underlying adapter does not implement start().');
    }

    await this.httpServerAdapter.start(port);
  }

  async stop(): Promise<void> {
    if (!this.httpServerAdapter.stop) {
      return;
    }

    await this.httpServerAdapter.stop();
  }

  private createCloudAdapter(credentials?: Credentials): CloudAdapter {
    const env = this.resolveMicrosoftAppEnv();
    const clientId = credentials?.clientId ?? env.clientId;
    const clientSecret = credentials && 'clientSecret' in credentials
      ? credentials.clientSecret
      : env.clientSecret;
    const tenantId = credentials && 'tenantId' in credentials
      ? credentials.tenantId
      : env.tenantId;
    const appType = env.appType ?? (tenantId ? 'SingleTenant' : undefined);

    if (!clientId) {
      throw new Error(
        'BotBuilderAdapter requires credentials when cloudAdapter is not provided. ' +
        'Pass credentials, pass cloudAdapter, or set MicrosoftAppId/MicrosoftAppPassword ' +
        'or CLIENT_ID/CLIENT_SECRET environment variables.'
      );
    }

    return new CloudAdapter(
      new ConfigurationBotFrameworkAuthentication(
        {},
        new ConfigurationServiceClientCredentialFactory({
          MicrosoftAppType: appType ?? 'MultiTenant',
          MicrosoftAppId: clientId,
          MicrosoftAppPassword: clientSecret,
          MicrosoftAppTenantId: tenantId,
        })
      )
    );
  }

  private resolveMicrosoftAppEnv() {
    return {
      appType: process.env.MicrosoftAppType,
      clientId: process.env.MicrosoftAppId ?? process.env.CLIENT_ID,
      clientSecret: process.env.MicrosoftAppPassword ?? process.env.CLIENT_SECRET,
      tenantId: process.env.MicrosoftAppTenantId ?? process.env.TENANT_ID,
    };
  }

  private async onRequest(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
    teamsHandler: HttpRouteHandler
  ): Promise<void> {
    if (!this.cloudAdapter) {
      throw new Error('BotBuilderAdapter is not initialized');
    }

    try {
      const body: any = req.body;
      if (!body || typeof body !== 'object' || typeof body.type !== 'string') {
        await this.forwardToTeams(req, res, teamsHandler);
        return;
      }

      const invokeResponse = await this.processBotBuilder(req, async (context) => {
        if (!context.activity.id) return;

        if (this.handler) {
          await this.handler.run(context);
        }
      });

      if (req.body?.type === 'invoke') {
        if (invokeResponse && invokeResponse.status !== NOT_IMPLEMENTED) {
          res.status(invokeResponse.status ?? 200).send(invokeResponse.body);
          return;
        }

        await this.forwardToTeams(req, res, teamsHandler);
        return;
      }

      if (res.headersSent) {
        return next();
      }

      await this.forwardToTeams(req, res, teamsHandler);
    } catch (err) {
      if (!res.headersSent) {
        res.status(500).send('internal server error');
      }
    }
  }

  private async processBotBuilder(
    req: express.Request,
    logic: (context: TurnContext) => Promise<void>
  ): Promise<InvokeResponse | undefined> {
    const rawAuth = req.headers.authorization ?? (req.headers as any).Authorization ?? '';
    const authHeader = Array.isArray(rawAuth) ? rawAuth[0] : String(rawAuth);
    return await this.cloudAdapter!.processActivity(
      authHeader,
      req.body as Activity,
      logic
    );
  }

  private async forwardToTeams(
    req: express.Request,
    res: express.Response,
    teamsHandler: HttpRouteHandler
  ) {
    const response = await teamsHandler({
      body: req.body,
      headers: req.headers as Record<string, string | string[]>,
    });

    res.status(response.status || 200).send(response.body);
  }
}
