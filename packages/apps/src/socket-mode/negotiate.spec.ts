import type { AxiosResponse } from 'axios';

import { Client as HttpClient } from '@microsoft/teams.common';

import { negotiate } from './negotiate';

function httpResponse(
  data: unknown,
  status = 200,
  headers: Record<string, unknown> = {}
): AxiosResponse {
  return {
    data,
    status,
    headers,
  } as AxiosResponse;
}

describe('socket-mode negotiate', () => {
  const negotiateUrl = 'https://apx.example/v3/websockets/connect';
  const post = jest.fn();
  const client = { post } as unknown as HttpClient;

  beforeEach(() => {
    post.mockReset();
  });

  function deps(getBotToken: () => Promise<string> = async () => 'bot-jwt') {
    return { negotiateUrl, client, getBotToken };
  }

  it('authenticates with the reused bot token and returns the negotiate result', async () => {
    post.mockResolvedValue(
      httpResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 })
    );

    const result = await negotiate(deps());

    expect(result).toEqual({
      url: 'wss://sr/hub',
      accessToken: 'sr-token',
      expiresIn: 3600,
    });

    const [calledUrl, body, config] = post.mock.calls[0];
    expect(calledUrl).toBe(negotiateUrl);
    expect(body).toBeUndefined();
    expect(config.headers.authorization).toBe('Bearer bot-jwt');
    expect(config.timeout).toBe(15_000);
    expect(config.validateStatus(503)).toBe(true);
  });

  it('throws when the app has no credentials (empty bot token)', async () => {
    await expect(negotiate(deps(async () => ''))).rejects.toThrow(/no bot token/i);

    expect(post).not.toHaveBeenCalled();
  });

  it('throws on a non-2xx Teams backend service response', async () => {
    post.mockResolvedValue(httpResponse({ error: 'denied' }, 503));

    await expect(negotiate(deps())).rejects.toThrow(/HTTP 503/);
  });

  it('redacts credentials from negotiate logs and errors', async () => {
    const log = {
      debug: jest.fn(),
    };
    post.mockResolvedValue(
      httpResponse(
        {
          accessToken: 'signalr-secret',
          clientSecret: 'client-secret',
          detail: 'Bearer bot-jwt',
        },
        503
      )
    );

    let error: Error | undefined;
    try {
      await negotiate({ ...deps(), log: log as any });
    } catch (caught) {
      error = caught as Error;
    }

    expect(error).toBeDefined();
    const diagnostics = [
      error?.message,
      ...log.debug.mock.calls.flat(),
    ].join(' ');
    expect(diagnostics).not.toContain('signalr-secret');
    expect(diagnostics).not.toContain('client-secret');
    expect(diagnostics).not.toContain('bot-jwt');
    expect(diagnostics).toContain('[REDACTED]');
  });

  it('parses Retry-After (delta-seconds) into NegotiateError.retryAfterMs on a 429', async () => {
    post.mockResolvedValue(
      httpResponse('slow down', 429, {
        get: (name: string) => (name.toLowerCase() === 'retry-after' ? '5' : null),
      })
    );

    await expect(negotiate(deps())).rejects.toMatchObject({
      name: 'NegotiateError',
      retryAfterMs: 5000,
    });
  });

  it('throws when the response is missing url/accessToken', async () => {
    post.mockResolvedValue(httpResponse({ expiresIn: 60 }));

    await expect(negotiate(deps())).rejects.toThrow(/missing url\/accessToken/);
  });

  it('omits content-length and uses the configured timeout', async () => {
    post.mockResolvedValue(
      httpResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 60 })
    );

    await negotiate({ ...deps(), timeoutMs: 1234 });

    const [, , config] = post.mock.calls[0];
    expect(config.headers['content-length']).toBeUndefined();
    expect(config.timeout).toBe(1234);
  });

  it('defaults expiresIn to 0 when Teams backend service omits it', async () => {
    post.mockResolvedValue(
      httpResponse({ url: 'wss://sr/hub', accessToken: 'sr-token' })
    );

    const result = await negotiate(deps());

    expect(result.expiresIn).toBe(0);
  });

  it('rejects a plaintext http negotiate URL before sending the bearer token', async () => {
    await expect(
      negotiate({
        negotiateUrl: 'http://apx.example/v3/websockets/connect',
        client,
        getBotToken: async () => 'bot-jwt',
      })
    ).rejects.toThrow(/must use https/i);

    expect(post).not.toHaveBeenCalled();
  });

  it('allows a loopback http negotiate URL for local testing', async () => {
    post.mockResolvedValue(
      httpResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 60 })
    );

    await expect(
      negotiate({
        negotiateUrl: 'http://localhost:3978/v3/websockets/connect',
        client,
        getBotToken: async () => 'bot-jwt',
      })
    ).resolves.toMatchObject({ accessToken: 'sr-token' });

    expect(post).toHaveBeenCalledTimes(1);
  });
});
