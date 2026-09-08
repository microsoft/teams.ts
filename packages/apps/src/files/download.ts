import { Readable } from 'stream';

import { ConversationType } from '@microsoft/teams.api';
import { Client as HttpClient } from '@microsoft/teams.common';

import { FileScopeNotSupportedError, FileUrlExpiredError } from './errors';

/**
 * Pluggable fetch used to retrieve file bytes. Injectable so tests can supply a real `Response` without hitting the network; when omitted the app's {@link HttpClient} is used instead.
 */
export type FileFetch = (url: string, init?: { signal?: AbortSignal }) => Promise<Response>;

/**
 * The minimal file description the download dispatcher needs to open a byte stream.
 */
export type FileFetchTarget = {
  /** Conversation scope; the dispatcher is keyed on this. */
  scope: ConversationType;
  /** Short-lived, pre-authorized download URL (personal scope). */
  downloadUrl?: string;
  /** MIME type reported by the incoming file, used as a fallback when the response omits one. */
  contentType?: string;
};

/**
 * A freshly opened, single-consumption byte stream plus the metadata resolved while opening it.
 */
export type OpenedFileStream = {
  /** The raw response body stream. Uncapped; the caller bounds it. */
  stream: ReadableStream<Uint8Array>;
  /** The URL the bytes were actually fetched from. */
  sourceUrl: string;
  /** MIME type resolved from the response, falling back to the incoming file's. */
  contentType: string;
};

/**
 * Options shared by every scope's download path.
 */
export type OpenFileStreamOptions = {
  priorFetchSucceeded?: boolean;
  /** Test-only transport override. Takes precedence over `httpClient`. */
  fetch?: FileFetch;
  /** The app's HTTP client, so downloads inherit its User-Agent, middleware, interceptors, and any user-supplied configuration. */
  httpClient?: HttpClient;
  signal?: AbortSignal;
};

/**
 * The transport-agnostic shape both the `fetch` and {@link HttpClient} paths normalize to.
 */
type TransportResponse = {
  status: number;
  statusText: string;
  ok: boolean;
  contentType?: string;
  stream?: ReadableStream<Uint8Array>;
  /** Releases the underlying socket for responses whose body we are not going to read. */
  discard: () => void;
};

/**
 * Open a byte stream for an inbound file, keyed on its conversation scope so every scope's receive path extends this one place rather than branching in callers.
 *
 * Only `personal` is implemented; `groupChat`/`channel` (and any future scope) throw {@link FileScopeNotSupportedError} until their Graph receive path lands.
 */
export async function openFileStream(
  target: FileFetchTarget,
  options?: OpenFileStreamOptions
): Promise<OpenedFileStream> {
  if (target.scope === 'personal') {
    return openPersonalFileStream(target, options);
  }

  throw new FileScopeNotSupportedError(target.scope);
}

async function openPersonalFileStream(
  target: FileFetchTarget,
  options?: OpenFileStreamOptions
): Promise<OpenedFileStream> {
  const url = target.downloadUrl;

  if (!url) {
    throw new Error('cannot download personal file: no download URL is available');
  }

  if (!/^https:\/\//i.test(url)) {
    throw new Error('cannot download file: download URL must use https');
  }

  const response = await requestFile(url, options);

  if (response.status === 401 || response.status === 403) {
    response.discard();
    throw new FileUrlExpiredError(options?.priorFetchSucceeded ? 'reread' : 'firstFetch');
  }

  if (!response.ok || !response.stream) {
    response.discard();
    throw new Error(`failed to download file: ${response.status} ${response.statusText}`.trim());
  }

  const contentType = response.contentType ?? target.contentType ?? 'application/octet-stream';
  return { stream: response.stream, sourceUrl: url, contentType };
}

async function requestFile(url: string, options?: OpenFileStreamOptions): Promise<TransportResponse> {
  if (options?.fetch) {
    return fromFetchResponse(await options.fetch(url, { signal: options.signal }));
  }

  if (options?.httpClient) {
    return requestViaHttpClient(url, options.httpClient, options.signal);
  }

  throw new Error('cannot download file: no HTTP client is available');
}

async function requestViaHttpClient(
  url: string,
  client: HttpClient,
  signal?: AbortSignal
): Promise<TransportResponse> {
  const response = await client.get<Readable>(url, {
    responseType: 'stream',
    signal,
    // The URL carries its own `tempauth` credential; a bearer token on top of it can get the request rejected.
    // `token` only suppresses the token-derived header, so also override any default `Authorization` the client
    // was configured with, which `withConfig` would otherwise merge in and send to a third-party storage host.
    token: () => undefined,
    headers: { Authorization: undefined },
    // We map 401/403 onto FileUrlExpiredError ourselves, so keep axios from throwing first.
    validateStatus: () => true,
  });

  const body: Readable | undefined = response.data;
  const contentTypeHeader = response.headers?.['content-type'];

  return {
    status: response.status,
    statusText: response.statusText ?? '',
    ok: response.status >= 200 && response.status < 300,
    contentType: typeof contentTypeHeader === 'string' ? contentTypeHeader : undefined,
    // `packages/apps` is Node-only, so adapting Node's `Readable` to a web `ReadableStream` is safe here.
    stream: body ? (Readable.toWeb(body) as unknown as ReadableStream<Uint8Array>) : undefined,
    discard: () => body?.destroy(),
  };
}

function fromFetchResponse(response: Response): TransportResponse {
  return {
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
    contentType: response.headers.get('content-type') ?? undefined,
    stream: response.body ?? undefined,
    discard: () => {
      void response.body?.cancel().catch(() => { });
    },
  };
}

/**
 * Read a byte stream to completion into a single `Uint8Array`.
 */
export async function collectStream(stream: ReadableStream<Uint8Array>): Promise<Uint8Array> {
  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let total = 0;

  try {
    for (;;) {
      const { done, value } = await reader.read();

      if (done) {
        break;
      }

      if (value) {
        total += value.byteLength;
        chunks.push(value);
      }
    }
  } finally {
    reader.releaseLock();
  }

  const out = new Uint8Array(total);
  let offset = 0;

  for (const chunk of chunks) {
    out.set(chunk, offset);
    offset += chunk.byteLength;
  }

  return out;
}
