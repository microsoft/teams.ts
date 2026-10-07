import { ConversationType } from '@microsoft/teams.api';

import { isUnderServiceUrl, openFileStream, type BotApiCredential, type FileFetch } from './download';
import { FileError, InlineImageAccessError, InlineImageTransformationError } from './errors';
import { IncomingFile } from './incoming-file';

const SERVICE_URL = 'https://smba.trafficmanager.net/amer/';
const CONTENT_URL = `${SERVICE_URL}v3/attachments/a1/views/original`;

const PNG = new Uint8Array([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a, 0, 0, 0, 0]);
const GIF = new Uint8Array([0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0, 0]);
const JPEG = new Uint8Array([0xff, 0xd8, 0xff, 0xe0, 0, 0]);
const WEBP = new Uint8Array([0x52, 0x49, 0x46, 0x46, 0, 0, 0, 0, 0x57, 0x45, 0x42, 0x50]);
const UNKNOWN = new Uint8Array([0x42, 0x4d, 0, 0, 0, 0]);

function recordingFetch(response: { status: number; body?: BodyInit | null; contentType?: string }) {
  const calls: Array<{ url: string; authorization?: string }> = [];

  const fetch: FileFetch = async (url, init) => {
    calls.push({ url, authorization: init?.headers?.['Authorization'] });
    return new Response(response.body ?? null, {
      status: response.status,
      headers: response.contentType ? { 'content-type': response.contentType } : {},
    });
  };

  return { fetch, calls };
}

const botApi: BotApiCredential = { actor: 'app', token: async () => 'bot-api-token', serviceUrl: SERVICE_URL };

function inlineFile(
  fetch: FileFetch,
  over: Partial<{ name: string; contentType: string; scope: ConversationType; credential: BotApiCredential; contentUrl: string }> = {}
) {
  return new IncomingFile({
    name: over.name ?? 'image-a1.gif',
    contentType: over.contentType ?? 'image/gif',
    extension: 'gif',
    scope: over.scope ?? 'groupChat',
    source: 'botActivity',
    attachmentStyle: 'inlineImage',
    contentUrl: over.contentUrl ?? CONTENT_URL,
    inlineImageBaseName: 'image-a1',
    botApiCredential: over.credential ?? botApi,
    fetch,
  });
}

describe('inline image download', () => {
  it('reads the content URL with the Bot API token, in a scope the file routes do not open', async () => {
    const { fetch, calls } = recordingFetch({ status: 200, body: PNG });

    await inlineFile(fetch, { scope: 'channel' }).download();

    expect(calls).toEqual([{ url: CONTENT_URL, authorization: 'Bearer bot-api-token' }]);
  });

  it.each([
    ['PNG', PNG, 'image-a1.png', 'image/png'],
    ['JPEG', JPEG, 'image-a1.jpg', 'image/jpeg'],
    ['GIF', GIF, 'image-a1.gif', 'image/gif'],
    ['WebP', WEBP, 'image-a1.webp', 'image/webp'],
  ])('names and types %s bytes from the bytes, over the hint and the response header', async (_, bytes, filename, contentType) => {
    const { fetch } = recordingFetch({ status: 200, body: bytes, contentType: 'application/octet-stream' });
    const file = inlineFile(fetch, { name: 'image-a1.gif', contentType: 'image/gif' });

    const downloaded = await file.download();

    expect(downloaded.filename).toBe(filename);
    expect(downloaded.contentType).toBe(contentType);
  });

  it('falls back to the hint-derived name and type when the bytes are not recognized', async () => {
    const { fetch } = recordingFetch({ status: 200, body: UNKNOWN, contentType: 'image/png' });

    const downloaded = await inlineFile(fetch, { name: 'image-a1.gif', contentType: 'image/gif' }).download();

    expect(downloaded.filename).toBe('image-a1.gif');
    expect(downloaded.contentType).toBe('image/gif');
  });

  it('falls back to no extension and octet-stream when neither the bytes nor the hint name a format', async () => {
    const { fetch } = recordingFetch({ status: 200, body: UNKNOWN, contentType: 'image/bmp' });

    const downloaded = await inlineFile(fetch, { name: 'image-a1', contentType: 'application/octet-stream' }).download();

    expect(downloaded.filename).toBe('image-a1');
    expect(downloaded.contentType).toBe('application/octet-stream');
  });

  it('leaves the handle unchanged when the bytes disagree with the hint', async () => {
    const { fetch } = recordingFetch({ status: 200, body: PNG });
    const file = inlineFile(fetch, { name: 'image-a1.gif', contentType: 'image/gif' });

    await file.download();

    expect(file.name).toBe('image-a1.gif');
    expect(file.contentType).toBe('image/gif');
    expect(file.extension).toBe('gif');
  });

  it('throws before any request when no Bot API token is available', async () => {
    const { fetch, calls } = recordingFetch({ status: 200, body: PNG });

    await expect(inlineFile(fetch, { credential: { actor: 'app', token: async () => undefined, serviceUrl: SERVICE_URL } }).download()).rejects.toThrow(
      'no Bot API token is available'
    );
    expect(calls).toHaveLength(0);
  });

  it('refuses a content URL that is not https', async () => {
    const { fetch, calls } = recordingFetch({ status: 200, body: PNG });

    await expect(
      openFileStream(
        { scope: 'personal', attachmentStyle: 'inlineImage', contentUrl: 'http://smba.trafficmanager.net/amer/v3/attachments/a1/views/original' },
        { fetch, botApiCredential: botApi }
      )
    ).rejects.toThrow('must use https');
    expect(calls).toHaveLength(0);
  });
});

describe('isUnderServiceUrl', () => {
  it.each([
    ['the service URL path', `${SERVICE_URL}v3/attachments/a1/views/original`, SERVICE_URL],
    ['a service URL without a trailing slash', `${SERVICE_URL}v3/x`, 'https://smba.trafficmanager.net/amer'],
    ['a host that differs only in case', 'https://SMBA.trafficmanager.net/amer/v3/x', SERVICE_URL],
    ['a service URL with no path', 'https://smba.trafficmanager.net/v3/x', 'https://smba.trafficmanager.net'],
  ])('accepts %s', (_, url, serviceUrl) => {
    expect(isUnderServiceUrl(url, serviceUrl)).toBe(true);
  });

  it.each([
    ['a sibling path that shares a prefix', 'https://smba.trafficmanager.net/americas/v3/x', 'https://smba.trafficmanager.net/amer'],
    ['a dot segment that climbs out', `${SERVICE_URL}../v3/x`, SERVICE_URL],
    ['another host', 'https://attacker.example/amer/v3/x', SERVICE_URL],
    ['a lookalike host', 'https://smba.trafficmanager.net.attacker.example/amer/v3/x', 'https://smba.trafficmanager.net'],
    ['another port', 'https://smba.trafficmanager.net:8443/amer/v3/x', SERVICE_URL],
    ['an http target', 'http://smba.trafficmanager.net/amer/v3/x', SERVICE_URL],
    ['an http service URL', 'http://smba.trafficmanager.net/amer/v3/x', 'http://smba.trafficmanager.net/amer/'],
    ['a missing service URL', `${SERVICE_URL}v3/x`, undefined],
    ['an unparseable service URL', `${SERVICE_URL}v3/x`, 'not a url'],
    ['an unparseable target', 'not a url', SERVICE_URL],
  ])('rejects %s', (_, url, serviceUrl) => {
    expect(isUnderServiceUrl(url, serviceUrl)).toBe(false);
  });
});

describe('inline image destination', () => {
  it.each([
    ['another host', 'https://attacker.example/amer/v3/attachments/a1/views/original'],
    ['a dot segment that climbs out of the service URL path', `${SERVICE_URL}../v3/attachments/a1/views/original`],
  ])('refuses a forged target on %s before resolving the token or sending a request', async (_, contentUrl) => {
    const { fetch, calls } = recordingFetch({ status: 200, body: PNG });
    const token = jest.fn(async () => 'bot-api-token');

    await expect(
      inlineFile(fetch, { contentUrl, credential: { actor: 'app', token, serviceUrl: SERVICE_URL } }).download()
    ).rejects.toThrow('cannot download inline image: content URL is not under the activity\'s service URL');
    expect(token).not.toHaveBeenCalled();
    expect(calls).toEqual([]);
  });

  it('refuses every inline image when the credential carries no service URL', async () => {
    const { fetch, calls } = recordingFetch({ status: 200, body: PNG });

    await expect(inlineFile(fetch, { credential: { actor: 'app', token: async () => 'bot-api-token' } }).download()).rejects.toThrow(
      'not under the activity\'s service URL'
    );
    expect(calls).toEqual([]);
  });
});

describe('inline image download errors', () => {
  const TRANSFORMATION_BODY = JSON.stringify({
    error: { code: 'TransformationFailed', message: 'Failed to transform the image' },
  });

  it('maps 415 to InlineImageTransformationError with the status, code and service text', async () => {
    const { fetch } = recordingFetch({ status: 415, body: TRANSFORMATION_BODY });

    const error = await inlineFile(fetch).download().catch((e) => e);

    expect(error).toBeInstanceOf(InlineImageTransformationError);
    expect(error).toBeInstanceOf(FileError);
    expect(error.status).toBe(415);
    expect(error.code).toBe('TransformationFailed');
    expect(error.details).toBe('TransformationFailed: Failed to transform the image');
    expect(error.actor).toBe('app');
    expect(error.message).toBe(
      'cannot download inline image: the platform could not convert it for download (status 415, code TransformationFailed). Some image formats, such as BMP and AVIF, cannot be converted by the platform, so Teams shows a placeholder, and they cannot be downloaded. Ask the user to send the image as a file attachment instead (service said: TransformationFailed: Failed to transform the image)'
    );
  });

  it('omits the code segment and keeps the raw text when a 415 body is not JSON', async () => {
    const { fetch } = recordingFetch({ status: 415, body: '<html>unsupported</html>' });

    const error = await inlineFile(fetch).download().catch((e) => e);

    expect(error).toBeInstanceOf(InlineImageTransformationError);
    expect(error.code).toBeUndefined();
    expect(error.details).toBe('<html>unsupported</html>');
    expect(error.message).toContain('(status 415). Some image formats');
    expect(error.message).toContain('(service said: <html>unsupported</html>)');
  });

  it('omits the service-said suffix when a 415 has no body', async () => {
    const { fetch } = recordingFetch({ status: 415 });

    const error = await inlineFile(fetch).download().catch((e) => e);

    expect(error.details).toBeUndefined();
    expect(error.message.endsWith('send the image as a file attachment instead')).toBe(true);
  });

  it('truncates a long service message', async () => {
    const { fetch } = recordingFetch({ status: 415, body: 'x'.repeat(10_000) });

    const error = await inlineFile(fetch).download().catch((e) => e);

    expect(error.details).toBe(`${'x'.repeat(2048)}...`);
  });

  it.each([401, 403])('maps %i to InlineImageAccessError naming the identity', async (status) => {
    const { fetch } = recordingFetch({ status, body: JSON.stringify({ error: { code: 'Unauthorized', message: 'nope' } }) });
    const agentic: BotApiCredential = { actor: 'agenticUser', token: async () => 'agent-token', serviceUrl: SERVICE_URL };

    const error = await inlineFile(fetch, { credential: agentic }).download().catch((e) => e);

    expect(error).toBeInstanceOf(InlineImageAccessError);
    expect(error).toBeInstanceOf(FileError);
    expect(error.status).toBe(status);
    expect(error.actor).toBe('agenticUser');
    expect(error.details).toBe('Unauthorized: nope');
    expect(error.message).toBe(
      `cannot download inline image: the Bot API token presented for the agentic user was rejected with status ${status} (service said: Unauthorized: nope)`
    );
  });

  it('surfaces another failure status as a plain error carrying the service text', async () => {
    const { fetch } = recordingFetch({ status: 500, body: JSON.stringify({ error: { code: 'ServerError', message: 'boom' } }) });

    const error = await inlineFile(fetch).download().catch((e) => e);

    expect(error).not.toBeInstanceOf(FileError);
    expect(error.message).toContain('500');
    expect(error.message).toContain('ServerError: boom');
  });
});
