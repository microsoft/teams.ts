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

  it('explains how to fix bot credentials after a 401 response', async () => {
    mockFetch(async () => jsonResponse({ error: 'invalid token' }, false, 401));

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' })
    ).rejects.toMatchObject({
      name: 'NegotiateError',
      statusCode: 401,
      message: expect.stringMatching(
        /HTTP 401.*invalid token.*verify the bot credentials.*clientId\/clientSecret/i
      ),
    });
  });

  it('explains the authorization problem after a 403 response', async () => {
    mockFetch(async () => jsonResponse({ error: 'forbidden' }, false, 403));

    await expect(
      negotiate({ negotiateUrl, getBotToken: async () => 'bot-jwt' })
    ).rejects.toMatchObject({
      name: 'NegotiateError',
      statusCode: 403,
      message: expect.stringMatching(/HTTP 403.*forbidden.*not authorized to use Socket Mode/i),
    });
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
    ).rejects.toMatchObject({
      name: 'NegotiateError',
      statusCode: 429,
      retryAfterMs: 5000,
    });
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

  it('rejects a plaintext http negotiate URL before sending the bearer token', async () => {
    const fetchMock = mockFetch();

    await expect(
      negotiate({
        negotiateUrl: 'http://apx.example/v3/websockets/connect',
        getBotToken: async () => 'bot-jwt',
      })
    ).rejects.toThrow(/must use https/i);

    // The token was acquired but never sent over the wire.
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('allows a loopback http negotiate URL for local testing', async () => {
    const fetchMock = mockFetch(async () =>
      jsonResponse({ url: 'wss://sr/hub', accessToken: 'sr-token', expiresIn: 60 })
    );

    await expect(
      negotiate({
        negotiateUrl: 'http://localhost:3978/v3/websockets/connect',
        getBotToken: async () => 'bot-jwt',
      })
    ).resolves.toMatchObject({ accessToken: 'sr-token' });

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
