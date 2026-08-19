import { negotiate } from './negotiate';

function jsonResponse(body: unknown, ok = true, status = 200): Response {
  return {
    ok,
    status,
    json: async () => body,
    text: async () => JSON.stringify(body),
  } as unknown as Response;
}

describe('ws-connect negotiate', () => {
  const negotiateUrl = 'https://apx.example/v3/websockets/connect';

  it('authenticates with the reused bot token and returns the negotiate result', async () => {
    const fetchImpl = jest.fn(async () =>
      jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 })
    ) as unknown as typeof fetch;

    const result = await negotiate({
      negotiateUrl,
      getBotToken: async () => 'bot-jwt',
      fetchImpl,
    });

    expect(result).toEqual({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 });

    const [calledUrl, init] = (fetchImpl as jest.Mock).mock.calls[0];
    expect(calledUrl).toBe(negotiateUrl);
    expect(init.method).toBe('POST');
    // Reuses the bot's Bot Framework token — no second app-level token.
    expect(init.headers.authorization).toBe('Bearer bot-jwt');
  });

  it('throws when the app has no credentials (empty bot token)', async () => {
    const fetchImpl = jest.fn() as unknown as typeof fetch;

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => '', fetchImpl })
    ).rejects.toThrow(/no bot token/i);

    expect(fetchImpl).not.toHaveBeenCalled();
  });

  it('throws on a non-2xx APX response', async () => {
    const fetchImpl = jest.fn(async () =>
      jsonResponse({ error: 'denied' }, false, 503)
    ) as unknown as typeof fetch;

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt', fetchImpl })
    ).rejects.toThrow(/HTTP 503/);
  });

  it('throws when the response is missing url/accessToken', async () => {
    const fetchImpl = jest.fn(async () =>
      jsonResponse({ expiresIn: 60 })
    ) as unknown as typeof fetch;

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt', fetchImpl })
    ).rejects.toThrow(/missing url\/accessToken/);
  });

  it('defaults expiresIn to 0 when APX omits it', async () => {
    const fetchImpl = jest.fn(async () =>
      jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token' })
    ) as unknown as typeof fetch;

    const result = await negotiate({
      negotiateUrl,
      getBotToken: async () => 'bot-jwt',
      fetchImpl,
    });

    expect(result.expiresIn).toBe(0);
  });
});
