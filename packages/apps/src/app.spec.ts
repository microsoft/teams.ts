import { JsonWebToken } from '@microsoft/spark.api';
import jwt from 'jsonwebtoken';
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
  public get testTokens() {
    return this._tokens;
  }

  public async testRefreshBotToken() {
    return this.refreshBotToken();
  }

  public async testRefreshGraphToken() {
    return this.refreshGraphToken();
  }
}

describe('token refresh', () => {
  let app: TestApp;

  beforeEach(() => {
    app = new TestApp({
      clientId: 'test-client-id',
      clientSecret: 'test-client-secret',
      plugins: [new TestHttpPlugin()],
    });
  });

  it('should refresh bot token when expired', async () => {
    const mockToken = jwt.sign({ access_token: 'mock-bot-token' }, 'test-secret');
    app.api.bots.token.get = jest.fn().mockResolvedValue({ access_token: mockToken });

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

    await app.testRefreshBotToken();

    expect(app.api.bots.token.get).toHaveBeenCalledWith(app.credentials);
    expect(app.testTokens.bot?.toString()).toBe(mockToken);
  });

  it('should refresh graph token when expired', async () => {
    const mockToken = jwt.sign({ access_token: 'mock-graph-token' }, 'test-secret');
    app.api.bots.token.getGraph = jest.fn().mockResolvedValue({ access_token: mockToken });

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

    await app.testRefreshGraphToken();

    expect(app.api.bots.token.getGraph).toHaveBeenCalledWith(app.credentials);
    expect(app.testTokens.graph?.toString()).toBe(mockToken);
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

    await app.testRefreshBotToken();

    expect(app.api.bots.token.get).not.toHaveBeenCalled();
    expect(app.testTokens.bot?.toString()).toBe(existingToken);
  });

  it('should refresh both tokens on app start', async () => {
    const newBotToken = jwt.sign({ access_token: 'new-bot-token' }, 'test-secret');
    const newGraphToken = jwt.sign({ access_token: 'new-graph-token' }, 'test-secret');

    app.api.bots.token.get = jest.fn().mockResolvedValue({ access_token: newBotToken });
    app.api.bots.token.getGraph = jest.fn().mockResolvedValue({ access_token: newGraphToken });

    await app.start();

    expect(app.api.bots.token.get).toHaveBeenCalled();
    expect(app.api.bots.token.getGraph).toHaveBeenCalled();
  });
});
