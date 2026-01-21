import jwt from 'jsonwebtoken';

import { JsonWebToken } from '@microsoft/teams.api';

import { App } from './app';
import { TestHttpPlugin } from './plugins/http/plugin.spec';

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
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });
    });

    it('should acquire bot token via TokenManager', async () => {
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockBotToken,
      });

      // @ts-expect-error - accessing private method for testing
      jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
        acquireTokenByClientCredential: mockAcquireToken,
      } as any);

      const token = await app.testGetBotToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockBotToken);
    });

    it('should acquire graph token via TokenManager', async () => {
      const mockAcquireToken = jest.fn().mockResolvedValue({
        accessToken: mockGraphToken,
      });

      // @ts-expect-error - accessing private method for testing
      jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
        acquireTokenByClientCredential: mockAcquireToken,
      } as any);

      const token = await app.testGetAppGraphToken();

      expect(token).toBeInstanceOf(JsonWebToken);
      expect(token?.toString()).toBe(mockGraphToken);
    });

    it('should return null when credentials are not provided', async () => {
      const appWithoutCreds = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      const botToken = await appWithoutCreds.testGetBotToken();
      const graphToken = await appWithoutCreds.testGetAppGraphToken();

      expect(botToken).toBeNull();
      expect(graphToken).toBeNull();
    });

    it('should not prefetch tokens on start', async () => {
      const mockAcquireToken = jest.fn();

      // @ts-expect-error - accessing private method for testing
      jest.spyOn(app.tokenManager, 'getConfidentialClient').mockReturnValue({
        acquireTokenByClientCredential: mockAcquireToken,
      } as any);

      await app.start();

      expect(mockAcquireToken).not.toHaveBeenCalled();
    });
  });

  describe('send', () => {
    let app: TestApp;

    it('should send message without manifest.name configured', async () => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        plugins: [new TestHttpPlugin()],
      });

      await app.start();

      // Mock the http.send method
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.http, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.bot.name).toBe('test-client-id'); // Falls back to id when name is not provided
    });

    it('should send message with manifest.name configured', async () => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        tenantId: 'test-tenant-id',
        manifest: {
          name: { short: 'TestBot', full: 'Test Bot Application' },
        },
        plugins: [new TestHttpPlugin()],
      });

      await app.start();

      // Mock the http.send method
      const mockSend = jest.fn().mockResolvedValue({ id: 'activity-id' });
      jest.spyOn(app.http, 'send').mockImplementation(mockSend);

      await app.testSend('conversation-id', { text: 'Hello' });

      expect(mockSend).toHaveBeenCalled();
      const [, ref] = mockSend.mock.calls[0];
      expect(ref.bot.id).toBe('test-client-id');
      expect(ref.bot.name).toBe('Test Bot Application');
    });

    it('should throw error when app is not started (no clientId)', async () => {
      app = new TestApp({
        plugins: [new TestHttpPlugin()],
      });

      await app.start();

      await expect(
        app.testSend('conversation-id', { text: 'Hello' })
      ).rejects.toThrow('app not started');
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
        plugins: [new TestHttpPlugin()],
      });

      expect(app.api.serviceUrl).toBe('https://smba.trafficmanager.net/teams');
    });

    it('should use service URL from environment variable', () => {
      process.env.SERVICE_URL = 'https://custom.service.url/teams';

      const app = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        plugins: [new TestHttpPlugin()],
      });

      expect(app.api.serviceUrl).toBe('https://custom.service.url/teams');
    });

    it('should use service URL from options when provided', () => {
      process.env.SERVICE_URL = 'https://env.service.url/teams';

      const app = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        serviceUrl: 'https://options.service.url/teams',
        plugins: [new TestHttpPlugin()],
      });

      expect(app.api.serviceUrl).toBe('https://options.service.url/teams');
    });

    it('should prioritize options > env > default', () => {
      delete process.env.SERVICE_URL;

      const app1 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        plugins: [new TestHttpPlugin()],
      });
      expect(app1.api.serviceUrl).toBe('https://smba.trafficmanager.net/teams');

      process.env.SERVICE_URL = 'https://env.service.url/teams';
      const app2 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        plugins: [new TestHttpPlugin()],
      });
      expect(app2.api.serviceUrl).toBe('https://env.service.url/teams');

      const app3 = new App({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        serviceUrl: 'https://options.service.url/teams',
        plugins: [new TestHttpPlugin()],
      });
      expect(app3.api.serviceUrl).toBe('https://options.service.url/teams');
    });
  });
});
