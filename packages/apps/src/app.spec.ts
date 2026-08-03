import { ConfidentialClientApplication } from '@azure/msal-node';
import jwt from 'jsonwebtoken';

import { CHINA, JsonWebToken, PUBLIC, US_GOV, US_GOV_DOD, withOverrides } from '@microsoft/teams.api';

import { App } from './app';
import { TestAdapter } from './test-utils';

jest.mock('@azure/msal-node');

/**
 * Stubs the MSAL client `TokenManager` builds internally. `App` no longer holds
 * the manager, so the seam is the auth library rather than the app's internals.
 */
const mockMsalToken = (acquireTokenByClientCredential: jest.Mock) => {
  (ConfidentialClientApplication as unknown as jest.Mock).mockImplementation(
    () => ({ acquireTokenByClientCredential })
  );
};

class TestApp extends App {
  // Expose protected members for testing
  public async testGetBotToken() {
    return this.getBotToken();
  }

  public async testGetAppGraphToken(tenantId?: string) {
    return this.getAppGraphToken(tenantId);
  }

  public async testSend(conversationId: string, activity: any, options?: any) {
    return this.send(conversationId, activity, options);
  }

  public async testReply(conversationId: string, messageId: string, activity: any): Promise<any>;
  public async testReply(conversationId: string, activity: any): Promise<any>;
  public async testReply(conversationId: string, messageId: string | any, activity?: any) {
    if (typeof messageId === 'string' && activity !== undefined) {
      return this.reply(conversationId, messageId, activity);
    }
    return this.reply(conversationId, messageId);
  }

  // Expose activitySender for mocking (it's protected, so we expose it publicly)
  public get testActivitySender() {
    return this.activitySender;
  }
}

describe('App', () => {
  describe('token acquisition', () => {
    let app: TestApp;
    const mockBotToken = jwt.sign(
      {
        exp: Math.floor((Date.now() + 3600000) / 1000),
        aud: 'https://api.botframework.com',
        iss: 'https://login.microsoftonline.com/test-tenant/v2.0',
      },
      'test-secret'
    );
    const mockGraphToken = jwt.sign(
      {
        exp: Math.floor((Date.now() + 3600000) / 1000),
        aud: 'https://graph.microsoft.com',
        iss: 'https://login.microsoftonline.com/test-tenant/v2.0',
      },
      'test-secret'
    );

    beforeEach(() => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });
    });

    afterEach(async () => {
      await app.stop();
    });

    it('should acquire bot token via TokenManager', async () => {
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockBotToken,
      });

      mockMsalToken(mockAcquireToken);

      const token = await app.testGetBotToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockBotToken);
    });

    it('should acquire graph token via TokenManager', async () => {
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockGraphToken,
      });

      mockMsalToken(mockAcquireToken);

      const token = await app.testGetAppGraphToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockGraphToken);
    });

    it('should return null when credentials are not provided', async () => {
      const appWithoutCreds = new TestApp({
        httpServerAdapter: new TestAdapter()
      });

      const botToken = await appWithoutCreds.testGetBotToken();
      const graphToken = await appWithoutCreds.testGetAppGraphToken();

      expect(botToken).toBeNull();
      expect(graphToken).toBeNull();
    });

    it('should not prefetch tokens on start', async () => {
      const mockAcquireToken = jest.fn();

      mockMsalToken(mockAcquireToken);

      await app.start();

      expect(mockAcquireToken).not.toHaveBeenCalled();
    });

    it('should expose token acquisition publicly via app.tokenProvider', async () => {
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockGraphToken,
      });

      mockMsalToken(mockAcquireToken);

      const token = await app.tokenProvider.getAppToken('https://graph.microsoft.com/.default');

      expect(token?.toString()).toBe(mockGraphToken);
    });

    it('should return the same provider on every access', () => {
      // The getter must return a stable object, since callers hand it to
      // long-lived collaborators such as an OTel exporter.
      expect(app.tokenProvider).toBe(app.tokenProvider);
    });

    it('should expose each agentic capability as its own method', () => {
      // A provider that omits a capability fails loudly instead of returning an
      // app-only token under the wrong identity.
      expect(typeof app.tokenProvider.getAppToken).toBe('function');
      expect(typeof app.tokenProvider.getAgenticUserToken).toBe('function');
      expect(typeof app.tokenProvider.getAgenticAppToken).toBe('function');
    });
  });

  describe('getAgenticIdentity', () => {
    const originalTenantId = process.env.TENANT_ID;
    const originalClientId = process.env.CLIENT_ID;

    afterEach(() => {
      // Assigning `undefined` would set the literal string, which later tests
      // read as a configured client id.
      const restore = (key: string, value?: string) => {
        if (value === undefined) delete process.env[key];
        else process.env[key] = value;
      };
      restore('TENANT_ID', originalTenantId);
      restore('CLIENT_ID', originalClientId);
    });

    it('should resolve the tenant and blueprint from the environment when no option is given', () => {
      // The IDs come from resolved credentials, not the raw options, so an app
      // configured entirely through env vars can still build an identity.
      process.env.TENANT_ID = 'env-tenant';
      process.env.CLIENT_ID = 'env-client';
      const app = new App();

      const agenticIdentity = app.getAgenticIdentity();

      expect(agenticIdentity).toEqual({
        agenticAppId: undefined,
        agenticUserId: undefined,
        tenantId: 'env-tenant',
        agenticAppBlueprintId: 'env-client',
      });
    });

    it('should preserve optional app and user IDs when provided', () => {
      const app = new App({ clientId: 'client-id', tenantId: 'tenant-id' });

      const agenticIdentity = app.getAgenticIdentity({
        agenticAppId: 'agentic-app-id',
        agenticUserId: 'agentic-user-id',
      });

      expect(agenticIdentity).toEqual({
        agenticAppBlueprintId: 'client-id',
        agenticAppId: 'agentic-app-id',
        agenticUserId: 'agentic-user-id',
        tenantId: 'tenant-id',
      });
    });

    it('should preserve null app and user IDs for non-user-backed scopes', () => {
      const app = new App({ clientId: 'client-id', tenantId: 'tenant-id' });

      const agenticIdentity = app.getAgenticIdentity({
        agenticAppId: null,
        agenticUserId: null,
      });

      expect(agenticIdentity).toEqual({
        agenticAppBlueprintId: 'client-id',
        agenticAppId: null,
        agenticUserId: null,
        tenantId: 'tenant-id',
      });
    });

    it('should prefer explicit overrides over configured IDs', () => {
      const app = new App({ clientId: 'client-id', tenantId: 'option-tenant' });

      const agenticIdentity = app.getAgenticIdentity({
        tenantId: 'override-tenant',
        agenticAppBlueprintId: 'override-blueprint',
      });

      expect(agenticIdentity.tenantId).toBe('override-tenant');
      expect(agenticIdentity.agenticAppBlueprintId).toBe('override-blueprint');
    });

    it('should throw when no tenant can be resolved', () => {
      delete process.env.TENANT_ID;
      const app = new App({ clientId: 'client-id' });

      expect(() => app.getAgenticIdentity()).toThrow(
        'tenantId is required'
      );
    });

    it('should throw when no agentic app blueprint can be resolved', () => {
      delete process.env.CLIENT_ID;
      const app = new App({ tenantId: 'tenant-id' });

      expect(() => app.getAgenticIdentity()).toThrow(
        'agenticAppBlueprintId is required'
      );
    });
  });

  describe('send', () => {
    let app: TestApp;

    afterEach(async () => {
      await app.stop();
    });

    it('should send message without bot name', async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });

      await app.start();

      // Mock the activitySender.send method
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { type: 'message', text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.bot.name).toBeUndefined();
    });

    it('should forward send agentic identity options', async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });

      await app.start();

      const agenticIdentity = {
        agenticAppBlueprintId: 'agentic-blueprint',
        agenticAppId: 'agent-app',
        agenticUserId: 'agentic-user',
      };
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend(
        'conversation-id',
        { type: 'message', text: 'Hello' },
        { agenticIdentity }
      );

      const [, ref, options] = mockSend.mock.calls[0];
      expect(ref.serviceUrl).toBe(app.api.serviceUrl);
      expect(options).toEqual({ agenticIdentity });
    });

    it('should throw error when app is not started (no clientId)', async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter()
      });

      await app.start();

      await expect(
        app.testSend('conversation-id', { type: 'message', text: 'Hello' })
      ).rejects.toThrow('App has no credentials set up');
    });
  });

  describe('proactive messaging (initialize without start)', () => {
    let app: TestApp;

    it('should send message after initialize() without start()', async () => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        httpServerAdapter: new TestAdapter(),
      });

      // Only initialize - no start(), no HTTP server
      await app.initialize();

      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { text: 'Proactive hello' });

      expect(mockSend).toHaveBeenCalled();
      const [activity, ref] = mockSend.mock.calls[0];
      expect(activity.text).toBe('Proactive hello');
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.conversation.id).toBe('conversation-id');
    });

    it('should send adaptive card after initialize() without start()', async () => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        httpServerAdapter: new TestAdapter(),
      });

      await app.initialize();

      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', {
        type: 'message',
        attachments: [{ contentType: 'application/vnd.microsoft.card.adaptive', content: {} }],
      });

      expect(mockSend).toHaveBeenCalled();
    });

    it('should not initialize twice', async () => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        httpServerAdapter: new TestAdapter(),
      });

      await app.initialize();
      await app.initialize(); // should be a no-op

      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { text: 'hello' });
      expect(mockSend).toHaveBeenCalledTimes(1);
    });
  });

  describe('http client User-Agent', () => {
    it('should merge App User-Agent with User-Agent from client options', async () => {
      const app = new App({
        httpServerAdapter: new TestAdapter(),
        client: {
          headers: {
            'user-agent': 'MyApp/1.0',
          },
        },
      });
      let seenConfig: any;
      (app.client as any).http.defaults.adapter = async (config: any) => {
        seenConfig = config;
        return { data: {}, status: 200, statusText: 'OK', headers: {}, config };
      };

      await app.client.get('/test');

      const userAgent = seenConfig.headers.get?.('User-Agent') ?? seenConfig.headers['User-Agent'];
      expect(userAgent).toEqual(expect.stringMatching(/^teams\.ts\[apps\]\/.* MyApp\/1\.0$/));
    });
  });

  describe('service URL configuration', () => {
    const originalEnv = process.env.SERVICE_URL;

    afterEach(() => {
      if (originalEnv === undefined) {
        delete process.env.SERVICE_URL;
      } else {
        process.env.SERVICE_URL = originalEnv;
      }
    });

    it('should use default service URL when no configuration provided', () => {
      delete process.env.SERVICE_URL;

      const app = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        httpServerAdapter: new TestAdapter(),
      });

      expect(app.api.serviceUrl).toBe('https://smba.trafficmanager.net/teams');
    });

    it('should use service URL from environment variable', () => {
      process.env.SERVICE_URL = 'https://custom.service.url/teams';

      const app = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        httpServerAdapter: new TestAdapter(),
      });

      expect(app.api.serviceUrl).toBe('https://custom.service.url/teams');
    });

    it('should use service URL from options when provided', () => {
      process.env.SERVICE_URL = 'https://env.service.url/teams';

      const app = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        serviceUrl: 'https://options.service.url/teams',
        httpServerAdapter: new TestAdapter(),
      });

      expect(app.api.serviceUrl).toBe('https://options.service.url/teams');
    });

    it('should prioritize options > env > default', () => {
      delete process.env.SERVICE_URL;

      const app1 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        httpServerAdapter: new TestAdapter(),
      });
      expect(app1.api.serviceUrl).toBe('https://smba.trafficmanager.net/teams');

      process.env.SERVICE_URL = 'https://env.service.url/teams';
      const app2 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        httpServerAdapter: new TestAdapter(),
      });
      expect(app2.api.serviceUrl).toBe('https://env.service.url/teams');

      const app3 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        serviceUrl: 'https://options.service.url/teams',
        httpServerAdapter: new TestAdapter(),
      });
      expect(app3.api.serviceUrl).toBe('https://options.service.url/teams');
    });
  });

  describe('unauthenticated request configuration', () => {
    const unauthenticatedRequestsEnv = 'DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS';
    const originalUnauthenticatedRequestsEnv = process.env[unauthenticatedRequestsEnv];
    const originalSkipAuthEnv = process.env.SKIP_AUTH;
    const createLogger = () => {
      const logger = {
        debug: jest.fn(),
        error: jest.fn(),
        info: jest.fn(),
        warn: jest.fn(),
        child: jest.fn(),
      };
      logger.child.mockReturnValue(logger);
      return logger as any;
    };

    beforeEach(() => {
      delete process.env[unauthenticatedRequestsEnv];
      delete process.env.SKIP_AUTH;
    });

    afterAll(() => {
      if (originalUnauthenticatedRequestsEnv === undefined) {
        delete process.env[unauthenticatedRequestsEnv];
      } else {
        process.env[unauthenticatedRequestsEnv] = originalUnauthenticatedRequestsEnv;
      }
      if (originalSkipAuthEnv === undefined) {
        delete process.env.SKIP_AUTH;
      } else {
        process.env.SKIP_AUTH = originalSkipAuthEnv;
      }
    });

    it('should use dangerouslyAllowUnauthenticatedRequests option', () => {
      const app = new App({
        dangerouslyAllowUnauthenticatedRequests: true,
        httpServerAdapter: new TestAdapter(),
      });

      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(true);
    });

    it('should support deprecated skipAuth option', () => {
      const logger = createLogger();
      const app = new App({
        skipAuth: true,
        httpServerAdapter: new TestAdapter(),
        logger,
      });
      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(true);
      expect(logger.warn).toHaveBeenCalledWith(
        '[DEPRECATED] skipAuth is deprecated. Use dangerouslyAllowUnauthenticatedRequests instead.'
      );
    });

    it('should use environment variable when no option is provided', () => {
      const logger = createLogger();
      process.env[unauthenticatedRequestsEnv] = 'true';

      const app = new App({
        httpServerAdapter: new TestAdapter(),
        logger,
      });

      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(true);
      expect(logger.warn).toHaveBeenCalledWith(
        'DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS is set. ' +
        'Unauthenticated request behavior is configured by the environment.'
      );
    });

    it('should not support SKIP_AUTH environment variable', () => {
      process.env.SKIP_AUTH = 'true';

      const app = new App({
        httpServerAdapter: new TestAdapter(),
      });

      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(false);
    });

    it('should parse false-like environment variable values as false', () => {
      process.env[unauthenticatedRequestsEnv] = 'false';

      const app = new App({
        httpServerAdapter: new TestAdapter(),
      });

      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(false);
    });

    it('should throw for invalid environment variable values', () => {
      process.env[unauthenticatedRequestsEnv] = 'maybe';

      expect(() => new App({
        httpServerAdapter: new TestAdapter(),
      })).toThrow(
        'DANGEROUSLY_ALLOW_UNAUTHENTICATED_REQUESTS must be a boolean value: true/false, 1/0, yes/no, or on/off.'
      );
    });

    it('should let explicit option override environment variable', () => {
      process.env[unauthenticatedRequestsEnv] = 'true';

      const app = new App({
        dangerouslyAllowUnauthenticatedRequests: false,
        httpServerAdapter: new TestAdapter(),
      });

      expect((app.server as any).dangerouslyAllowUnauthenticatedRequests).toBe(false);
    });
  });

  describe('reply', () => {
    let app: TestApp;

    beforeEach(async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
      });
      await app.start();
    });

    afterEach(async () => {
      await app.stop();
    });

    it('should construct threaded ID when called with conversationId, messageId, and activity', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:abc@thread.skype', '1680000000000', { type: 'message', text: 'Hello thread' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype;messageid=1680000000000');
    });

    it('should pass conversationId as-is when called with two args', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:abc@thread.skype', { type: 'message', text: 'Hello flat' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype');
    });

    it('should pass pre-constructed threaded ID as-is when called with two args', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:abc@thread.skype;messageid=123', { type: 'message', text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype;messageid=123');
    });

    it('should construct threaded ID for any conversation type (three-arg form)', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:meeting_abc@thread.v2', '123', { type: 'message', text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:meeting_abc@thread.v2;messageid=123');
    });

    it('should throw on invalid messageId in three-arg form', async () => {
      await expect(
        app.testReply('19:abc@thread.skype', 'not-a-number', { type: 'message', text: 'Hello' })
      ).rejects.toThrow('Invalid messageId');
    });

    it('should throw when app has no credentials', async () => {
      const unstartedApp = new TestApp({
        httpServerAdapter: new TestAdapter(),
      });

      await expect(
        unstartedApp.testReply('conv-id', { type: 'message', text: 'Hello' })
      ).rejects.toThrow('App has no credentials set up');
    });
  });

  describe('sovereign cloud Graph routing', () => {
    const newApp = (cloud?: any) =>
      new App({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        cloud,
      });

    afterEach(async () => {
      // individual tests await stop themselves
    });

    it('derives graphBaseUrl from PUBLIC cloud scope', async () => {
      const app = newApp(PUBLIC);
      try {
        expect(app.graphBaseUrl).toBe('https://graph.microsoft.com');
      } finally {
        await app.stop();
      }
    });

    it('derives graphBaseUrl from US_GOV cloud scope', async () => {
      const app = newApp(US_GOV);
      try {
        expect(app.graphBaseUrl).toBe('https://graph.microsoft.us');
      } finally {
        await app.stop();
      }
    });

    it('derives graphBaseUrl from US_GOV_DOD cloud scope', async () => {
      const app = newApp(US_GOV_DOD);
      try {
        expect(app.graphBaseUrl).toBe('https://dod-graph.microsoft.us');
      } finally {
        await app.stop();
      }
    });

    it('derives graphBaseUrl from CHINA cloud scope', async () => {
      const app = newApp(CHINA);
      try {
        expect(app.graphBaseUrl).toBe('https://microsoftgraph.chinacloudapi.cn');
      } finally {
        await app.stop();
      }
    });

    it('defaults to PUBLIC-derived graphBaseUrl when no cloud is specified', async () => {
      const app = newApp();
      try {
        expect(app.graphBaseUrl).toBe('https://graph.microsoft.com');
      } finally {
        await app.stop();
      }
    });

    it('leaves graphBaseUrl undefined when graphScope is not a URL', async () => {
      const customCloud = withOverrides(PUBLIC, { graphScope: 'user.read' });
      const app = newApp(customCloud);
      try {
        expect(app.graphBaseUrl).toBeUndefined();
      } finally {
        await app.stop();
      }
    });
  });
});
