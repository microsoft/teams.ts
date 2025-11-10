import jwt from 'jsonwebtoken';

import { JsonWebToken } from '@microsoft/teams.api';

import { App } from './app';
import { HttpPlugin } from './plugins';
import { IPluginStartEvent } from './types';

class TestHttpPlugin extends HttpPlugin {
  async onStart(_event: IPluginStartEvent) {
    // No-op for tests
  }

  async onStop() {
    // No-op for tests
  }
}

class TestApp extends App {
  // Expose protected members for testing
  public async testGetBotToken() {
    return this.getBotToken();
  }

  public async testGetAppGraphToken(tenantId?: string) {
    return this.getAppGraphToken(tenantId);
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
});
