import { negotiate } from './negotiate';

function jsonResponse(body: unknown, ok = true, status = 200): Response {
  return {
    ok,
    status,
    json: async () => body,
    text: async () => JSON.stringify(body),
  } as unknown as Response;
}

describe('socket-mode negotiate', () => {
  const negotiateUrl = 'https://apx.example/v3/websockets/connect';
  const originalFetch = globalThis.fetch;

  afterEach(() => {
    globalThis.fetch = originalFetch;
  });

  /** Install a mock global `fetch` and return it for assertions. */
  function mockFetch(impl: () => Promise<Response> = async () => jsonResponse({})): jest.Mock {
    const fn = jest.fn(impl);
    globalThis.fetch = fn as unknown as typeof fetch;
    return fn;
  }

  it('authenticates with the reused bot token and returns the negotiate result', async () => {
    const fetchMock = mockFetch(async () =>
      jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 })
    );

    const result = await negotiate({
      negotiateUrl,
      getBotToken: async () => 'bot-jwt',
    });

    expect(result).toEqual({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 3600 });

    const [calledUrl, init] = fetchMock.mock.calls[0];
    expect(calledUrl).toBe(negotiateUrl);
    expect(init.method).toBe('POST');
    // Reuses the bot's Bot Framework token.
    expect(init.headers.authorization).toBe(`Bearer ${'bot-jwt'}`);
  });

  it('throws when the app has no credentials (empty bot token)', async () => {
    const fetchMock = mockFetch();

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => '' })
    ).rejects.toThrow(/no bot token/i);

    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('throws on a non-2xx Teams backend service response', async () => {
    mockFetch(async () => jsonResponse({ error: 'denied' }, false, 503));

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' })
    ).rejects.toThrow(/HTTP 503/);
  });

  it('parses Retry-After (delta-seconds) into NegotiateError.retryAfterMs on a 429', async () => {
    mockFetch(async () => ({
      ok: false,
      status: 429,
      json: async () => ({}),
      text: async () => 'slow down',
      headers: {
        get: (name: string) => (name.toLowerCase() === 'retry-after' ? '5' : null),
      },
    } as unknown as Response));

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' })
    ).rejects.toMatchObject({ name: 'NegotiateError', retryAfterMs: 5000 });
  });

  it('throws when the response is missing url/accessToken', async () => {
    mockFetch(async () => jsonResponse({ expiresIn: 60 }));

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' })
    ).rejects.toThrow(/missing url\/accessToken/);
  });

  it('omits the forbidden content-length header and sets an abort signal', async () => {
    const fetchMock = mockFetch(async () =>
      jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 60 })
    );

    await negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' });

    const [, init] = fetchMock.mock.calls[0];
    expect(init.headers['content-length']).toBeUndefined();
    expect(init.signal).toBeInstanceOf(AbortSignal);
  });

  it('defaults expiresIn to 0 when Teams backend service omits it', async () => {
    mockFetch(async () => jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token' }));

    const result = await negotiate({
      negotiateUrl,
      getBotToken: async () => 'bot-jwt',
    });

    expect(result.expiresIn).toBe(0);
  });
});
