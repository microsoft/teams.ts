import jwt from 'jsonwebtoken';

import { JsonWebToken } from '@microsoft/teams.api';

import { App } from './app';
import { HttpPlugin } from './plugins';
import { IPluginStartEvent } from './types';

const REFRESH_TOKEN_BUFFER_MS = 1000 * 60 * 5;

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
  public get testTokens() {
    return this._tokens;
  }

  public async testRefreshTokens() {
    return this.refreshTokens();
  }
}

describe('App', () => {
  describe('token refresh', () => {
    let app: TestApp;
    const mockGraphToken = jwt.sign({ access_token: 'mock-graph-token' }, 'test-secret');
    const mockBotToken = jwt.sign({ access_token: 'mock-bot-token' }, 'test-secret');

    beforeEach(() => {
      app = new TestApp({
        clientId: 'test-client-id',
        clientSecret: 'test-client-secret',
        plugins: [new TestHttpPlugin()],
      });

      app.api.bots.token.getGraph = jest.fn().mockResolvedValue({ access_token: mockGraphToken });
      app.api.bots.token.get = jest.fn().mockResolvedValue({ access_token: mockBotToken });
    });

    it('should refresh bot token when expired', async () => {
      // Set expired token with expiration in payload
      const expiredToken = jwt.sign(
        {
          exp: Math.floor((Date.now() - 1000) / 1000),
          aud: 'test-audience',
          iss: 'test-issuer',
        },
        'test-secret',
        { algorithm: 'HS256' }
      );
      app.testTokens.bot = new JsonWebToken(expiredToken);

      await app.testRefreshTokens();

      expect(app.api.bots.token.get).toHaveBeenCalledWith(app.credentials);
      expect(app.testTokens.bot?.toString()).toBe(mockBotToken);
    });

    it('should refresh bot token when not expired but within buffer', async () => {
      // Set expired token with expiration in payload
      const expiredToken = jwt.sign(
        {
          exp: Math.floor((Date.now() + REFRESH_TOKEN_BUFFER_MS - 1) / 1000),
          aud: 'test-audience',
          iss: 'test-issuer',
        },
        'test-secret',
        { algorithm: 'HS256' }
      );
      app.testTokens.bot = new JsonWebToken(expiredToken);

      await app.testRefreshTokens();

      expect(app.api.bots.token.get).toHaveBeenCalledWith(app.credentials);
      expect(app.testTokens.bot?.toString()).toBe(mockBotToken);
    });

    it('should refresh graph token when expired', async () => {
      // Set expired token with expiration in payload
      const expiredToken = jwt.sign(
        {
          exp: Math.floor((Date.now() - 1000) / 1000),
          aud: 'test-audience',
          iss: 'test-issuer',
        },
        'test-secret',
        { algorithm: 'HS256' }
      );
      app.testTokens.graph = new JsonWebToken(expiredToken);

      await app.testRefreshTokens();

      expect(app.api.bots.token.getGraph).toHaveBeenCalledWith(app.credentials);
      expect(app.testTokens.graph?.toString()).toBe(mockGraphToken);
    });

    it('should refresh graph token when not expired but within buffer', async () => {
      // Set expired token with expiration in payload
      const expiredToken = jwt.sign(
        {
          exp: Math.floor((Date.now() + REFRESH_TOKEN_BUFFER_MS - 1) / 1000),
          aud: 'test-audience',
          iss: 'test-issuer',
        },
        'test-secret',
        { algorithm: 'HS256' }
      );
      app.testTokens.graph = new JsonWebToken(expiredToken);

      await app.testRefreshTokens();

      expect(app.api.bots.token.getGraph).toHaveBeenCalledWith(app.credentials);
      expect(app.testTokens.graph?.toString()).toBe(mockGraphToken);
    });

    it('should not refresh bot token if not expired', async () => {
      const existingToken = jwt.sign(
        {
          exp: Math.floor((Date.now() + 1000000) / 1000),
          aud: 'test-audience',
          iss: 'test-issuer',
        },
        'test-secret',
        { algorithm: 'HS256' }
      );
      app.testTokens.bot = new JsonWebToken(existingToken);

      // the function should never be called
      app.api.bots.token.get = jest.fn();

      await app.testRefreshTokens();

      expect(app.api.bots.token.get).not.toHaveBeenCalled();
      expect(app.testTokens.bot?.toString()).toBe(existingToken);
    });

    it('should refresh both tokens on app start', async () => {
      app.api.bots.token.get = jest.fn().mockResolvedValue({ access_token: mockBotToken });
      app.api.bots.token.getGraph = jest.fn().mockResolvedValue({ access_token: mockGraphToken });

      await app.start();

      expect(app.api.bots.token.get).toHaveBeenCalled();
      expect(app.api.bots.token.getGraph).toHaveBeenCalled();
    });
  });
});