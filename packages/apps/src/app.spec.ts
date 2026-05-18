import jwt from 'jsonwebtoken';

import { CHINA, JsonWebToken, PUBLIC, US_GOV, US_GOV_DOD, withOverrides } from '@microsoft/teams.api';

import { App } from './app';
import { TestAdapter } from './test-utils';

class TestApp extends App {
  // Expose protected members for testing
  public async testGetBotToken() {
    return this.getBotToken();
  }

  public async testGetAppGraphToken(tenantId?: string) {
    return this.getAppGraphToken(tenantId);
  }

  public async testSend(conversationId: string, activity: any) {
    return this.send(conversationId, activity);
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
      await app.stop();
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        token: jest.fn().mockResolvedValue(mockBotToken),
      });

      const token = await app.testGetBotToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockBotToken);
    });

    it('should acquire graph token via TokenManager', async () => {
      await app.stop();
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        token: jest.fn().mockResolvedValue(mockGraphToken),
      });

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
      await app.stop();
      const token = jest.fn().mockResolvedValue(mockBotToken);
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        tenantId: 'test-tenant-id',
        token,
      });

      await app.start();

      expect(token).not.toHaveBeenCalled();
    });
  });

  describe('send', () => {
    let app: TestApp;

    afterEach(async () => {
      await app.stop();
    });

    it('should send message without manifest.name configured', async () => {
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

      await app.testSend('conversation-id', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.bot.name).toBe('test-client-id'); // Falls back to id when name is not provided
    });

    it('should send message with manifest.name configured', async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter(),
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        manifest: {
          name: { short: 'TestBot', full: 'Test Bot Application' },
        },
      });

      await app.start();

      // Mock the activitySender.send method
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.bot.name).toBe('Test Bot Application');
    });

    it('should throw error when app is not started (no clientId)', async () => {
      app = new TestApp({
        httpServerAdapter: new TestAdapter()
      });

      await app.start();

      await expect(
        app.testSend('conversation-id', { text: 'Hello' })
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
      const spy = jest.spyOn((app.client as any).http, 'get').mockResolvedValueOnce({});

      await app.client.get('/test');

      expect(spy).toHaveBeenCalledWith('/test', {
        headers: {
          'User-Agent': expect.stringMatching(/^teams\.ts\[apps\]\/.* MyApp\/1\.0$/),
        },
      });
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

      await app.testReply('19:abc@thread.skype', '1680000000000', { text: 'Hello thread' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype;messageid=1680000000000');
    });

    it('should pass conversationId as-is when called with two args', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:abc@thread.skype', { text: 'Hello flat' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype');
    });

    it('should pass pre-constructed threaded ID as-is when called with two args', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:abc@thread.skype;messageid=123', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:abc@thread.skype;messageid=123');
    });

    it('should construct threaded ID for any conversation type (three-arg form)', async () => {
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.testActivitySender, 'send').mockImplementation(mockSend);

      await app.testReply('19:meeting_abc@thread.v2', '123', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.conversation.id).toBe('19:meeting_abc@thread.v2;messageid=123');
    });

    it('should throw on invalid messageId in three-arg form', async () => {
      await expect(
        app.testReply('19:abc@thread.skype', 'not-a-number', { text: 'Hello' })
      ).rejects.toThrow('Invalid messageId');
    });

    it('should throw when app has no credentials', async () => {
      const unstartedApp = new TestApp({
        httpServerAdapter: new TestAdapter(),
      });

      await expect(
        unstartedApp.testReply('conv-id', { text: 'Hello' })
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
