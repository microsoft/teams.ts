import { Readable } from 'stream';

import { ConversationType } from '@microsoft/teams.api';
import { Client as HttpClient, ILogger } from '@microsoft/teams.common';

import { FileActor, FileRetrievalError, FileScopeNotSupportedError, FileUrlExpiredError } from './errors';
import { buildDriveItemContentUrl } from './graph-share';

/** How much of an error body to keep. Enough for a Graph error envelope, small enough to never matter. */
const ERROR_BODY_LIMIT = 2048;

/**
 * Pull the human-readable part out of a Graph error envelope, falling back to the raw text.
 *
 * Graph replies `{ error: { code, message } }`, but a 401 can also come from the edge as HTML, so this must not assume JSON. Truncated because it lands in an exception message.
 */
function extractServiceError(raw?: string): string | undefined {
  if (!raw) {
    return undefined;
  }

  try {
    const parsed = JSON.parse(raw);
    const error = parsed?.error;

    if (error?.code || error?.message) {
      return truncate([error.code, error.message].filter(Boolean).join(': '));
    }
  } catch {
    // Not JSON. The raw text is still better than nothing.
  }

  return truncate(raw);
}

function truncate(text: string): string | undefined {
  const collapsed = text.replace(/\s+/g, ' ').trim();

  if (!collapsed) {
    return undefined;
  }

  return collapsed.length > ERROR_BODY_LIMIT ? `${collapsed.slice(0, ERROR_BODY_LIMIT)}...` : collapsed;
}

/**
 * Pluggable fetch used to retrieve file bytes. Injectable so tests can supply a real `Response` without hitting the network; when omitted the app's {@link HttpClient} is used instead.
 */
export type FileFetch = (
  url: string,
  init?: { signal?: AbortSignal; headers?: Record<string, string> }
) => Promise<Response>;

/**
 * The minimal file description the download dispatcher needs to open a byte stream.
 */
export type FileFetchTarget = {
  /** Conversation scope; the dispatcher is keyed on this. */
  scope: ConversationType;
  /** Short-lived, pre-authorized download URL (personal scope). */
  downloadUrl?: string;
  /**
   * Browsable URL to the item, used as the Graph sharing locator when no `downloadUrl` is present.
   */
  contentUrl?: string;
  /** MIME type reported by the incoming file, used as a fallback when the response omits one. */
  contentType?: string;
};

/**
 * Supplies a bearer token for Graph, and names the identity it belongs to.
 *
 * Resolved at fetch time rather than stored on the handle, so a handle stays inert. `undefined` means no credential is available, which surfaces as `noGraphCredential` before any request is made.
 */
export type GraphCredential = {
  actor: FileActor;
  token: () => Promise<string | undefined>;
  /**
   * Graph host root, such as `https://graph.microsoft.com`, derived from the cloud's Graph scope. The API version is appended at the point of use.
   *
   * Carried alongside the token so a new code path cannot wire the token through and forget its destination.
   */
  baseUrlRoot?: string;
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
  /** Credential used for the Graph fetch path. Absent means no Graph route is available, so an expired URL cannot be recovered. */
  credential?: GraphCredential;
  /**
   * Optional logger. Which route produced the bytes is otherwise invisible from outside, and the two routes fail in different ways, so a developer diagnosing a download has no way to tell them apart without this.
   */
  log?: ILogger;
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
  /** The response body as text, for error responses only. Bounded, because this runs on a stream the SDK does not size. */
  readText: () => Promise<string | undefined>;
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

  // The Agentic User case: a browsable `contentUrl` arrives in place of a `downloadUrl`, so Graph is the only route to the bytes.
  if (!url) {
    if (!target.contentUrl) {
      throw new Error('cannot download personal file: no download URL is available');
    }

    return openGraphFileStream(target, target.contentUrl, options);
  }

  // Unreachable today: the platform's agentic path never sets a download URL, which is the only reason the arm above always fires for an agent. If that ever changes, the bytes still arrive and nothing fails, but they are fetched unauthenticated and attributed to nobody, so the switch away from the agent's own identity would be invisible except in an audit log. Warn rather than reroute: rerouting would ignore a working URL, which is the escalation the automatic-credential rule exists to prevent.
  if (options?.credential?.actor === 'agenticUser') {
    options.log?.warn(
      'an agentic turn received a file carrying a pre-authorized download URL, which the platform did not previously send to agents. The SDK is using that URL, so these bytes are not attributed to the agentic user.'
    );
  }

  if (!/^https:\/\//i.test(url)) {
    throw new Error('cannot download file: download URL must use https');
  }

  const response = await requestFile(url, options);

  if (response.status === 401 || response.status === 403) {
    response.discard();

    // Terminal. The URL carried its own credential and that credential has lapsed, and the SDK does not perform a fallback via app identity or user-delegated permissions on the developer's behalf. The file has to be sent again.
    throw new FileUrlExpiredError(options?.priorFetchSucceeded ? 'reread' : 'firstFetch');
  }

  if (!response.ok || !response.stream) {
    response.discard();
    throw new Error(`failed to download file: ${response.status} ${response.statusText}`.trim());
  }

  const contentType = response.contentType ?? target.contentType ?? 'application/octet-stream';
  return { stream: response.stream, sourceUrl: url, contentType };
}

/**
 * Fetch bytes by resolving the item through Graph's `/shares` endpoint.
 *
 * Unlike the pre-authorized path, which strips `Authorization`, this is an ordinary authenticated Graph call and fails without a bearer token.
 */
async function openGraphFileStream(
  target: FileFetchTarget,
  sharingUrl: string,
  options?: OpenFileStreamOptions
): Promise<OpenedFileStream> {
  const actor = options?.credential?.actor;
  const token = await tryResolveToken(options);

  // Detectable before any HTTP call, so a missing consent names itself instead of arriving as an opaque Graph 401.
  if (!token || carriesNoGraphPermissions(token)) {
    throw new FileRetrievalError('noGraphCredential', actor);
  }

  const url = buildDriveItemContentUrl(sharingUrl, options?.credential?.baseUrlRoot);
  options?.log?.debug(`resolving bytes through Graph /shares as '${actor}'`);
  const response = await requestFile(url, options, token);

  if (response.status === 401 || response.status === 403) {
    // An unconsented scope and a file never shared with this identity are both 403, differing only in message text. The SDK cannot branch on that, but the developer can read it, so it is carried rather than dropped.
    throw new FileRetrievalError('accessDenied', actor, extractServiceError(await response.readText()));
  }

  if (!response.ok || !response.stream) {
    response.discard();
    throw new Error(`failed to download file: ${response.status} ${response.statusText}`.trim());
  }

  const contentType = response.contentType ?? target.contentType ?? 'application/octet-stream';
  return { stream: response.stream, sourceUrl: url, contentType };
}

/**
 * Issue the byte request.
 *
 * `bearer` is a parameter rather than downloader configuration because the two paths need opposite behaviour: the pre-authorized URL must send no `Authorization`, Graph requires one. Hoisting auth into shared setup breaks the first case, which is the dangerous direction: it leaks a bot token to third-party storage for every bot working today, whereas forgetting it on the Graph path fails immediately and only there.
 */
/**
 * Resolve a Graph token without throwing.
 *
 * On the expiry path the caller already holds a more precise error, so an acquisition failure must leave it intact rather than surfacing as an untyped rejection.
 */
async function tryResolveToken(options?: OpenFileStreamOptions): Promise<string | undefined> {
  if (!options?.credential) {
    return undefined;
  }

  try {
    return await options.credential.token();
  } catch (err) {
    options.log?.debug(`could not acquire a Graph token: ${(err as Error).message}`);
    return undefined;
  }
}

/**
 * The permissions a token carries, as a flat list, or `undefined` when the token is not a decodable JWT.
 *
 * An app-only token lists application permissions in `roles`; a delegated or agentic-user token lists scopes in `scp`, space-delimited and absent entirely when there are none. `undefined` and `[]` mean different things and both callers depend on the difference: undecodable is "cannot tell", empty is "decoded, and there is nothing there".
 */
function permissionsOf(token: string): string[] | undefined {
  try {
    const payload = token.split('.')[1];

    if (!payload) {
      return undefined;
    }

    const claims = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8'));
    const roles: string[] = Array.isArray(claims.roles) ? claims.roles.filter((r: unknown) => typeof r === 'string') : [];
    const scopes = typeof claims.scp === 'string' ? claims.scp.trim().split(/\s+/).filter(Boolean) : [];

    return [...roles, ...scopes];
  } catch {
    return undefined;
  }
}

/**
 * Detect a credential that cannot reach a drive item, before spending a request to find out.
 *
 * Real Graph answers such a token with a `401 generalException` or a `403`, indistinguishable on the wire from a genuine denial but fixed in the identity's consented permissions rather than in file sharing.
 *
 * The predicate is "carries no file-capable permission", not "carries none at all". Emptiness was sufficient while the app rung was the concern, because an app registration with no Graph permissions really does return `roles: []`. It is not sufficient for an Agentic User under `.default`, where a blueprint consented to unrelated scopes such as `Mail.Send` returns a populated `scp` that passes an emptiness check and then fails late as an ambiguous 403.
 *
 * Any `Files.*` or `Sites.*` permission is admitted, which is deliberately generous. `Sites.Selected` is a known false positive: it begins with `Sites.` but grants nothing until an admin allowlists specific sites. A false positive here degrades to the previous behaviour of calling Graph and reporting what it says, which is the safe direction to be wrong in.
 *
 * Fails open on an undecodable token, which proceeds to the call rather than blocking a fetch that might have worked.
 */
function carriesNoGraphPermissions(token: string): boolean {
  const permissions = permissionsOf(token);

  if (permissions === undefined) {
    return false;
  }

  return !permissions.some((p) => /^(files|sites)\./i.test(p));
}

async function requestFile(
  url: string,
  options?: OpenFileStreamOptions,
  bearer?: string
): Promise<TransportResponse> {
  if (options?.fetch) {
    return fromFetchResponse(
      await options.fetch(url, {
        signal: options.signal,
        ...(bearer ? { headers: { Authorization: `Bearer ${bearer}` } } : {}),
      })
    );
  }

  if (options?.httpClient) {
    return requestViaHttpClient(url, options.httpClient, options.signal, bearer);
  }

  throw new Error('cannot download file: no HTTP client is available');
}

async function requestViaHttpClient(
  url: string,
  client: HttpClient,
  signal?: AbortSignal,
  bearer?: string
): Promise<TransportResponse> {
  const response = await client.get<Readable>(url, {
    responseType: 'stream',
    signal,
    // No bearer means the pre-authorized path, whose URL carries its own credential and can be rejected if a bot token rides along. `token` only suppresses the token-derived header, so a client-configured default `Authorization` must be overridden too, or `withConfig` merges it in and sends it to third-party storage.
    token: () => bearer,
    headers: { Authorization: bearer ? `Bearer ${bearer}` : undefined },
    // We map 401/403 onto typed errors ourselves, so keep axios from throwing first.
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
    readText: async () => {
      if (!body) {
        return undefined;
      }

      try {
        const chunks: Buffer[] = [];
        let size = 0;

        for await (const chunk of body) {
          chunks.push(chunk as Buffer);
          size += (chunk as Buffer).length;

          if (size >= ERROR_BODY_LIMIT) {
            break;
          }
        }

        body.destroy();
        return truncate(Buffer.concat(chunks).toString('utf8'));
      } catch {
        body.destroy();
        return undefined;
      }
    },
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
    readText: async () => {
      try {
        return truncate(await response.text());
      } catch {
        return undefined;
      }
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
