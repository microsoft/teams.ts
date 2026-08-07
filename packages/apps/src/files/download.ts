import { ConversationType } from '@microsoft/teams.api';

import { FileScopeNotSupportedError, FileUrlExpiredError } from './errors';

/**
 * Pluggable fetch used to retrieve file bytes. Defaults to the global `fetch`; injectable so tests can supply a real `Response` without hitting the network.
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

const defaultFetch: FileFetch = (url, init) => fetch(url, { method: 'GET', signal: init?.signal });

/**
 * Open a byte stream for an inbound file, keyed on its conversation scope so every scope's receive path extends this one place rather than branching in callers.
 *
 * Only `personal` is implemented; `groupChat`/`channel` (and any future scope) throw {@link FileScopeNotSupportedError} until their Graph receive path lands.
 */
export async function openFileStream(
  target: FileFetchTarget,
  options?: { priorFetchSucceeded?: boolean; fetch?: FileFetch; signal?: AbortSignal }
): Promise<OpenedFileStream> {
  if (target.scope === 'personal') {
    return openPersonalFileStream(target, options);
  }

  throw new FileScopeNotSupportedError(target.scope);
}

async function openPersonalFileStream(
  target: FileFetchTarget,
  options?: { priorFetchSucceeded?: boolean; fetch?: FileFetch; signal?: AbortSignal }
): Promise<OpenedFileStream> {
  const url = target.downloadUrl;

  if (!url) {
    throw new Error('cannot download personal file: no download URL is available');
  }

  if (!/^https:\/\//i.test(url)) {
    throw new Error('cannot download file: download URL must use https');
  }

  const doFetch = options?.fetch ?? defaultFetch;

  // Plain GET with no bearer token: the download URL embeds its own `tempauth` credential, and attaching a credential can get the request rejected.
  const response = await doFetch(url, { signal: options?.signal });

  if (response.status === 401 || response.status === 403) {
    throw new FileUrlExpiredError(options?.priorFetchSucceeded ? 'reread' : 'firstFetch');
  }

  if (!response.ok || !response.body) {
    throw new Error(`failed to download file: ${response.status} ${response.statusText}`.trim());
  }

  const contentType = response.headers.get('content-type') ?? target.contentType ?? 'application/octet-stream';
  return { stream: response.body, sourceUrl: url, contentType };
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
