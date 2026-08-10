import { Readable } from 'stream';

import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

import { FILE_DOWNLOAD_INFO_CONTENT_TYPE, type IMessageActivity, MessageActivity } from '@microsoft/teams.api';
import {
  Client as HttpClient,
  ConsoleLogger,
  type Middleware,
  type MiddlewareContext,
  type MiddlewareNext,
  type RequestConfig,
} from '@microsoft/teams.common';

import { FileUrlExpiredError } from './errors';
import { FilesAccessor } from './files-accessor';
import { IncomingFile } from './incoming-file';

/**
 * Answers the request with a canned response instead of hitting the network, and records
 * the merged config axios would have sent.
 *
 * It is a middleware that installs an adapter: running as middleware proves the download
 * goes through the client's pipeline, and capturing at the adapter observes headers after
 * instance defaults and per-request headers have been merged.
 */
class CapturingTransport implements Middleware {
  readonly requests: InternalAxiosRequestConfig[] = [];

  constructor(
    private readonly status: number,
    private readonly body: string,
    private readonly headers: Record<string, string> = {}
  ) { }

  async invoke<R = AxiosResponse, D = any>(
    context: MiddlewareContext<D>,
    next: MiddlewareNext<R>
  ): Promise<R> {
    (context.config as RequestConfig).adapter = async (config: InternalAxiosRequestConfig) => {
      this.requests.push(config);

      return {
        status: this.status,
        statusText: '',
        headers: this.headers,
        config,
        data: Readable.from([Buffer.from(this.body)]),
      } as unknown as AxiosResponse;
    };

    return next();
  }

  get lastRequest(): InternalAxiosRequestConfig {
    return this.requests[this.requests.length - 1];
  }

  /** Case-insensitive header lookup against the merged request axios would have sent. */
  header(name: string): unknown {
    return this.lastRequest?.headers?.get(name) ?? undefined;
  }
}

function fileWith(client: HttpClient): IncomingFile {
  return new IncomingFile({
    name: 'notes.txt',
    scope: 'personal',
    source: 'botActivity',
    downloadUrl: 'https://download.example/notes.txt?tempauth=abc',
    httpClient: client,
  });
}

describe('file download via HttpClient', () => {
  it('downloads through the client and streams the bytes back', async () => {
    const transport = new CapturingTransport(200, 'hello world', { 'content-type': 'text/plain' });
    const client = new HttpClient({ middlewares: [transport] });

    const downloaded = await fileWith(client).download();

    expect(downloaded.text()).toBe('hello world');
    expect(downloaded.contentType).toBe('text/plain');
    expect(transport.lastRequest.url).toBe('https://download.example/notes.txt?tempauth=abc');
    expect(transport.lastRequest.method).toBe('get');
    expect(transport.lastRequest.responseType).toBe('stream');
  });

  // The URL carries its own `tempauth` credential; a bearer token on top can get it rejected.
  it('does not attach an Authorization header even when the client has a token', async () => {
    const transport = new CapturingTransport(200, 'hi');
    const client = new HttpClient({
      token: 'super-secret-app-token',
      middlewares: [transport],
    });

    await fileWith(client).download();

    expect(transport.header('Authorization')).toBeUndefined();
  });

  // Dropping the token must not cost us the rest of the client's configuration.
  it('preserves the client User-Agent and registered middleware', async () => {
    const transport = new CapturingTransport(200, 'hi');
    const client = new HttpClient({
      token: 'super-secret-app-token',
      headers: { 'User-Agent': 'teams.ts-test/1.0' },
      middlewares: [transport],
    });

    await fileWith(client).download();

    expect(transport.requests).toHaveLength(1);
    expect(transport.header('User-Agent')).toBe('teams.ts-test/1.0');
  });

  it('maps a 401 onto FileUrlExpiredError rather than throwing a transport error', async () => {
    const transport = new CapturingTransport(401, '');
    const client = new HttpClient({ middlewares: [transport] });

    await expect(fileWith(client).download()).rejects.toThrow(FileUrlExpiredError);
  });

  it('surfaces other non-2xx statuses as a download failure', async () => {
    const transport = new CapturingTransport(500, '');
    const client = new HttpClient({ middlewares: [transport] });

    await expect(fileWith(client).download()).rejects.toThrow(/failed to download file: 500/);
  });

  it('prefers an explicitly injected fetch over the client', async () => {
    const transport = new CapturingTransport(200, 'from client');
    const client = new HttpClient({ middlewares: [transport] });

    const file = new IncomingFile({
      name: 'notes.txt',
      scope: 'personal',
      source: 'botActivity',
      downloadUrl: 'https://download.example/notes.txt?tempauth=abc',
      httpClient: client,
      fetch: async () => new Response(new TextEncoder().encode('from fetch')),
    });

    expect((await file.download()).text()).toBe('from fetch');
    expect(transport.requests).toHaveLength(0);
  });

  // Walks the real path (accessor -> IncomingFile -> request) so a dropped link fails here.
  it('threads the client from FilesAccessor through to the request', async () => {
    const transport = new CapturingTransport(200, 'threaded', { 'content-type': 'text/plain' });
    const client = new HttpClient({ middlewares: [transport] });

    const activity = MessageActivity.from({
      type: 'message',
      conversation: { conversationType: 'personal' },
      attachments: [
        {
          contentType: FILE_DOWNLOAD_INFO_CONTENT_TYPE,
          name: 'report.pdf',
          content: { downloadUrl: 'https://download.example/report.pdf?tempauth=abc' },
        },
      ],
    } as unknown as IMessageActivity);

    const accessor = new FilesAccessor(activity, new ConsoleLogger('threading.spec'), client);
    const file = await accessor.first();

    expect(file).toBeDefined();
    expect((await file!.download()).text()).toBe('threaded');
    expect(transport.requests).toHaveLength(1);
    expect(transport.lastRequest.url).toBe('https://download.example/report.pdf?tempauth=abc');
  });
});
