import { ConversationType } from '@microsoft/teams.api';

import { openFileStream, type FileFetch, type GraphCredential } from './download';
import { FileRetrievalError, FileUrlExpiredError } from './errors';
import { encodeSharingUrl } from './graph-share';

const CONTENT_URL = 'https://contoso.sharepoint.com/personal/a/Documents/report.pdf';
const DOWNLOAD_URL = 'https://contoso.sharepoint.com/personal/a/_layouts/15/download.aspx?UniqueId=1';

/** Records every request the dispatcher makes, so the number of requests a route makes is observable rather than inferred. */
function recordingFetch(responses: Array<{ status: number; body?: string }>) {
  const calls: Array<{ url: string; authorization?: string }> = [];
  let i = 0;

  const fetch: FileFetch = async (url, init) => {
    calls.push({ url, authorization: init?.headers?.['Authorization'] });
    const next = responses[Math.min(i++, responses.length - 1)];
    return new Response(next.status === 200 ? (next.body ?? 'bytes') : (next.body ?? null), {
      status: next.status,
      headers: next.status === 200 ? { 'content-type': 'application/pdf' } : {},
    });
  };

  return { fetch, calls };
}

const appCredential: GraphCredential = { actor: 'app', token: async () => 'app-token' };
const agenticCredential: GraphCredential = { actor: 'agenticUser', token: async () => 'agent-token' };

function target(over: Partial<{ scope: ConversationType; downloadUrl: string; contentUrl: string }> = {}) {
  return { scope: 'personal' as ConversationType, ...over };
}

describe('graphShare fetch path', () => {
  it('resolves bytes through /shares when no downloadUrl is present', async () => {
    const { fetch, calls } = recordingFetch([{ status: 200 }]);

    const opened = await openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential });

    expect(calls).toHaveLength(1);
    expect(calls[0].url).toContain(`/shares/${encodeSharingUrl(CONTENT_URL)}/driveItem/content`);
    expect(opened.contentType).toBe('application/pdf');
  });

  it('addresses the sovereign host, with the API version, when the credential carries one', async () => {
    // The value the SDK derives is a host root, and the version is appended here rather than by a Graph client, so a mismatch produces a 404 that reads like a missing item.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const sovereign: GraphCredential = {
      actor: 'app',
      token: async () => 'app-token',
      baseUrlRoot: 'https://graph.microsoft.us',
    };

    await openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: sovereign });

    expect(calls[0].url.startsWith('https://graph.microsoft.us/v1.0/shares/')).toBe(true);
  });

  it('never sends Authorization on the pre-authorized path, even when a credential is available', async () => {
    // This URL carries its own credential and points at third-party storage, so a bot token must not ride along.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);

    await openFileStream(target({ downloadUrl: DOWNLOAD_URL, contentUrl: CONTENT_URL }), {
      fetch,
      credential: appCredential,
    });

    expect(calls[0].url).toBe(DOWNLOAD_URL);
    expect(calls[0].authorization).toBeUndefined();
  });

  it('uses the agentic credential when one is supplied', async () => {
    const { fetch, calls } = recordingFetch([{ status: 200 }]);

    await openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential });

    expect(calls[0].authorization).toBe('Bearer agent-token');
  });

  it('reports noGraphCredential before making any request when no credential exists', async () => {
    const { fetch, calls } = recordingFetch([{ status: 200 }]);

    await expect(openFileStream(target({ contentUrl: CONTENT_URL }), { fetch })).rejects.toThrow(FileRetrievalError);
    expect(calls).toHaveLength(0);
  });

  it('reports noGraphCredential before making any request when the token resolves empty', async () => {
    // The app has no consented Graph application permissions. Detectable without a round trip, so this surfaces as a named failure rather than an opaque Graph 401.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const empty: GraphCredential = { actor: 'app', token: async () => undefined };

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: empty })
    ).rejects.toMatchObject({ reason: 'noGraphCredential', actor: 'app' });
    expect(calls).toHaveLength(0);
  });

  it('reports noGraphCredential for a token carrying no roles and no scopes, before any request', async () => {
    // Verified against real Graph 2026-08-26: an app-only token with an empty `roles` claim returns 401 generalException/spException, which is indistinguishable on the wire from a genuine denial but has a completely different fix. Calling it accessDenied sends the developer to check file sharing when the real problem is that the app registration has no Graph permissions at all.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256', typ: 'JWT' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ aud: 'https://graph.microsoft.com', roles: [] })).toString('base64url');
    const rolelessToken = `${header}.${payload}.sig`;

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), {
        fetch,
        credential: { actor: 'app', token: async () => rolelessToken },
      })
    ).rejects.toMatchObject({ reason: 'noGraphCredential', actor: 'app' });

    expect(calls).toHaveLength(0);
  });

  it('reports noGraphCredential for a token whose scopes are all non-file, before any request', async () => {
    // The case `.default` creates and an emptiness check misses. A blueprint consented to unrelated Graph permissions returns a POPULATED `scp` with nothing file-capable in it, so "does the token carry any permission at all" passes and the developer gets a late 403 that decision 5 established is indistinguishable from "not shared with you".
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256' })).toString('base64url');
    const payload = Buffer.from(
      JSON.stringify({ scp: 'profile openid email Mail.Send Chat.ReadWrite User.Read.All' })
    ).toString('base64url');

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), {
        fetch,
        credential: { actor: 'agenticUser', token: async () => `${header}.${payload}.sig` },
      })
    ).rejects.toMatchObject({ reason: 'noGraphCredential', actor: 'agenticUser' });

    expect(calls).toHaveLength(0);
  });

  it('proceeds when a delegated token carries a file-capable scope', async () => {
    // The shape the live blueprint issues: `.default` returns eleven scopes, of which only Files.ReadWrite.All and Sites.Read.All are file-capable.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256' })).toString('base64url');
    const payload = Buffer.from(
      JSON.stringify({ scp: 'profile openid email Mail.Send Files.ReadWrite.All Sites.Read.All' })
    ).toString('base64url');

    await openFileStream(target({ contentUrl: CONTENT_URL }), {
      fetch,
      credential: { actor: 'agenticUser', token: async () => `${header}.${payload}.sig` },
    });

    expect(calls).toHaveLength(1);
  });

  it('proceeds when the token carries application roles', async () => {
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ roles: ['Files.Read.All'] })).toString('base64url');

    await openFileStream(target({ contentUrl: CONTENT_URL }), {
      fetch,
      credential: { actor: 'app', token: async () => `${header}.${payload}.sig` },
    });

    expect(calls).toHaveLength(1);
  });

  it('proceeds when the token carries delegated scopes, as an agentic user token does', async () => {
    const { fetch, calls } = recordingFetch([{ status: 200 }]);
    const header = Buffer.from(JSON.stringify({ alg: 'RS256' })).toString('base64url');
    const payload = Buffer.from(JSON.stringify({ scp: 'profile openid Files.Read.All' })).toString('base64url');

    await openFileStream(target({ contentUrl: CONTENT_URL }), {
      fetch,
      credential: { actor: 'agenticUser', token: async () => `${header}.${payload}.sig` },
    });

    expect(calls).toHaveLength(1);
  });

  it('fails open on a token that is not a decodable JWT', async () => {
    // An unexpected token shape must not block a fetch that might have worked.
    const { fetch, calls } = recordingFetch([{ status: 200 }]);

    await openFileStream(target({ contentUrl: CONTENT_URL }), {
      fetch,
      credential: { actor: 'app', token: async () => 'not-a-jwt' },
    });

    expect(calls).toHaveLength(1);
  });

  it('maps 403 to accessDenied naming the actor', async () => {
    const { fetch } = recordingFetch([{ status: 403 }]);

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential })
    ).rejects.toMatchObject({ reason: 'accessDenied', actor: 'agenticUser' });
  });

  it('names the identity and carries the service message on a status it does not map', async () => {
    // A status outside 401/403 is not a typed reason, so the only diagnosis a caller gets is what the service said
    // and who was refused. An identity with no provisioned drive is the case that makes this matter, because Graph
    // answers the drive lookup rather than the sharing token and the message is the only thing that says so.
    const { fetch } = recordingFetch([
      {
        status: 404,
        body: JSON.stringify({ error: { code: 'ResourceNotFound', message: 'Unable to retrieve the mysite URL.' } }),
      },
    ]);

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential })
    ).rejects.toThrow(/agenticUser.*404.*mysite/s);
  });

});

describe('an expired pre-authorized URL', () => {
  it('releases the response body rather than leaving the connection open', async () => {
    // The success path returns the stream to the caller, who owns closing it. On a failure path there is no caller to
    // hand it to, so the fetch path must discard it itself. Expiry and denial are the headline error modes for this
    // feature, so this is a common path rather than an edge, and a regression would leak a connection per failure
    // while leaving every success test green.
    let cancelled = false;
    const fetch: FileFetch = async () =>
      new Response(
        new ReadableStream({
          cancel() {
            cancelled = true;
          },
        }),
        { status: 401 }
      );

    await expect(
      openFileStream(target({ downloadUrl: DOWNLOAD_URL }), { fetch, credential: appCredential })
    ).rejects.toThrow(FileUrlExpiredError);

    expect(cancelled).toBe(true);
  });

  it('is terminal: it throws FileUrlExpiredError', async () => {
    const { fetch } = recordingFetch([{ status: 401 }]);

    await expect(
      openFileStream(target({ downloadUrl: DOWNLOAD_URL }), { fetch, credential: appCredential })
    ).rejects.toThrow(FileUrlExpiredError);
  });

  it('still throws FileUrlExpiredError when no credential exists', async () => {
    const { fetch } = recordingFetch([{ status: 401 }]);

    await expect(
      openFileStream(target({ downloadUrl: DOWNLOAD_URL, contentUrl: CONTENT_URL }), { fetch })
    ).rejects.toThrow(FileUrlExpiredError);
  });

  it('throws FileUrlExpiredError, not a Graph error, when the app never adopted Graph', async () => {
    // The realistic shape of an existing bot: it has credentials and real payloads always carry a contentUrl. What it does not have is a consented Graph permission. Reporting access-denied here would name a consent this app never asked for and would silently stop matching any existing `catch (e instanceof FileUrlExpiredError)`.
    const { fetch, calls } = recordingFetch([{ status: 401 }]);
    const unconsented: GraphCredential = { actor: 'app', token: async () => undefined };

    await expect(
      openFileStream(target({ downloadUrl: DOWNLOAD_URL, contentUrl: CONTENT_URL }), { fetch, credential: unconsented })
    ).rejects.toThrow(FileUrlExpiredError);

    // And it must not have spent a request finding that out.
    expect(calls).toHaveLength(1);
  });

  it('still reports noGraphCredential on a file that never had a URL', async () => {
    // With no pre-authorized URL there is no expiry to report, so Graph's own failure is the only true account of what went wrong.
    const { fetch } = recordingFetch([{ status: 200 }]);
    const unconsented: GraphCredential = { actor: 'agenticUser', token: async () => undefined };

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: unconsented })
    ).rejects.toMatchObject({ reason: 'noGraphCredential', actor: 'agenticUser' });
  });

  it('keeps what the service actually said on a denial', async () => {
    // `reason` collapses an unconsented scope and a never-shared file into one `accessDenied`, because the SDK cannot tell them apart. The service can, and says so in prose, so dropping that text would destroy the only signal that distinguishes them.
    const { fetch } = recordingFetch([
      { status: 403, body: '{"error":{"code":"accessDenied","message":"The caller does not have permission"}}' },
    ]);

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential })
    ).rejects.toMatchObject({
      reason: 'accessDenied',
      details: 'accessDenied: The caller does not have permission',
    });
  });

  it('falls back to raw text when the service does not reply with a Graph envelope', async () => {
    // A 401 can come from the edge as HTML rather than Graph JSON, so the parser must not assume an envelope.
    const { fetch } = recordingFetch([{ status: 401, body: '<html><body>Access Denied</body></html>' }]);

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agenticCredential })
    ).rejects.toMatchObject({ details: '<html><body>Access Denied</body></html>' });
  });

  it('points each actor at the remedy that actually applies to it', async () => {
    // An agent identity gets Graph scopes from its blueprint, so that arm links the agent permission model. The app arm deliberately has no doc link: no permission grant would change the outcome, so pointing at a permissions doc would advise a fix that does not work.
    const { fetch } = recordingFetch([{ status: 200 }]);
    const agentic: GraphCredential = { actor: 'agenticUser', token: async () => undefined };
    const app: GraphCredential = { actor: 'app', token: async () => undefined };

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: agentic })
    ).rejects.toThrow(/learn\.microsoft\.com\/entra\/agent-id/);

    await expect(
      openFileStream(target({ contentUrl: CONTENT_URL }), { fetch, credential: app })
    ).rejects.toThrow(/not supported via the SDK/);
  });

});

/**
 * Guards an identity switch that cannot happen yet.
 *
 * The agentic credential is reached only through the "no downloadUrl" arm, and that arm fires for every agent solely
 * because the platform does not send agents a downloadUrl. If that changes, the bytes still arrive and nothing throws,
 * but they are fetched unauthenticated, so the only trace of the identity switch is in someone's audit log. These
 * tests are the only thing keeping the warning alive, since no real activity can reach the branch.
 */
describe('agentic turn carrying a pre-authorized URL', () => {
  const logger = () => {
    const warnings: string[] = [];
    return {
      warnings,
      log: { warn: (m: string) => warnings.push(m), debug: () => {}, info: () => {}, error: () => {} } as any,
    };
  };

  it('warns that the bytes are not attributed to the agentic user', async () => {
    const { fetch } = recordingFetch([{ status: 200 }]);
    const { warnings, log } = logger();

    await openFileStream(target({ downloadUrl: DOWNLOAD_URL, contentUrl: CONTENT_URL }), {
      fetch,
      credential: agenticCredential,
      log,
    });

    expect(warnings).toHaveLength(1);
    expect(warnings[0]).toContain('not attributed to the agentic user');
  });

  it('stays silent for the app credential, which is the ordinary traditional-bot path', async () => {
    const { fetch } = recordingFetch([{ status: 200 }]);
    const { warnings, log } = logger();

    await openFileStream(target({ downloadUrl: DOWNLOAD_URL, contentUrl: CONTENT_URL }), {
      fetch,
      credential: appCredential,
      log,
    });

    expect(warnings).toEqual([]);
  });
});

