import { rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import { ConversationType } from '@microsoft/teams.api';

import { type FileFetch } from './download';
import { IncomingFile } from './incoming-file';

const DOWNLOAD_URL = 'https://contoso.sharepoint.com/personal/a/_layouts/15/download.aspx?UniqueId=1';

/** A fetch that resolves only when its signal aborts, standing in for a request that never answers. */
const hangingFetch: FileFetch = (_url, init) =>
  new Promise((_resolve, reject) => {
    init?.signal?.addEventListener('abort', () => reject(new Error('aborted')));
  });

function file(over: Partial<{ fetch: FileFetch }> = {}) {
  return new IncomingFile({
    name: 'report.pdf',
    scope: 'personal' as ConversationType,
    source: 'botActivity',
    downloadUrl: DOWNLOAD_URL,
    fetch: over.fetch ?? hangingFetch,
  });
}

describe('cancellation', () => {
  it('aborts an in-flight download', async () => {
    // Without a reachable signal a caller has no way to bound a file read at all: the request is against storage the SDK does not control, and a hung one would pin the turn indefinitely.
    const controller = new AbortController();
    const pending = file().download({ signal: controller.signal });

    controller.abort();

    await expect(pending).rejects.toThrow();
  });

  it('aborts an in-flight stream', async () => {
    const controller = new AbortController();
    const pending = file().stream({ signal: controller.signal });

    controller.abort();

    await expect(pending).rejects.toThrow();
  });

  it('aborts an in-flight text read', async () => {
    const controller = new AbortController();
    const pending = file().text('utf-8', { signal: controller.signal });

    controller.abort();

    await expect(pending).rejects.toThrow();
  });

  it('aborts an in-flight arrayBuffer read', async () => {
    const controller = new AbortController();
    const pending = file().arrayBuffer({ signal: controller.signal });

    controller.abort();

    await expect(pending).rejects.toThrow();
  });

  it('passes the signal through to the transport', async () => {
    let seen: AbortSignal | undefined;
    const capturing: FileFetch = async (_url, init) => {
      seen = init?.signal;
      return new Response('bytes', { status: 200, headers: { 'content-type': 'text/plain' } });
    };

    const controller = new AbortController();
    await file({ fetch: capturing }).download({ signal: controller.signal });

    expect(seen).toBe(controller.signal);
  });

  it('reads normally when no signal is supplied', async () => {
    const ok: FileFetch = async () =>
      new Response('bytes', { status: 200, headers: { 'content-type': 'text/plain' } });

    const downloaded = await file({ fetch: ok }).download();

    expect(downloaded.text()).toBe('bytes');
  });

  it('rejects a saveAs whose signal is already aborted, before writing anything', async () => {
    const ok: FileFetch = async () =>
      new Response('bytes', { status: 200, headers: { 'content-type': 'text/plain' } });
    const controller = new AbortController();
    controller.abort();

    await expect(
      file({ fetch: ok }).saveAs('/tmp/should-not-exist-pr-j.bin', { signal: controller.signal })
    ).rejects.toThrow();
  });

  it('honours the signal on a DownloadedFile saveAs, which has no fetch to cancel', async () => {
    // The snapshot's bytes are already in memory, so this cancels the disk write rather than a request. The public
    // interface accepts the option, so the implementation has to act on it rather than quietly ignore it.
    const ok: FileFetch = async () =>
      new Response('bytes', { status: 200, headers: { 'content-type': 'text/plain' } });
    const downloaded = await file({ fetch: ok }).download();
    const controller = new AbortController();
    controller.abort();

    await expect(
      downloaded.saveAs('/tmp/should-not-exist-pr-j-snapshot.bin', { signal: controller.signal })
    ).rejects.toThrow();
  });
});

describe('additivity of the options parameter', () => {
  // Every option was added as a trailing optional, so a caller compiled against the published signatures keeps
  // working. These call every method the way such a caller does. ts-jest type-checks specs, so reshaping a signature
  // fails the suite; note the build's tsconfig excludes specs, so `tsc` alone will not catch it.
  const ok: FileFetch = async () =>
    new Response('bytes', { status: 200, headers: { 'content-type': 'text/plain' } });

  const handle = () => file({ fetch: ok });

  it('accepts every IIncomingFile method with no options at all', async () => {
    expect(await handle().stream()).toBeDefined();
    expect(await handle().download()).toBeDefined();
    expect(await handle().text()).toBe('bytes');
    expect(await handle().arrayBuffer()).toBeDefined();

    const path = join(tmpdir(), `pr-j-additive-${Date.now()}.bin`);
    await handle().saveAs(path);
    await rm(path, { force: true });
  });

  it('accepts text with a positional encoding, the pre-options shape', async () => {
    expect(await handle().text('utf-8')).toBe('bytes');

    const downloaded = await handle().download();
    expect(downloaded.text('utf-8')).toBe('bytes');
  });

  it('accepts every IDownloadedFile method with no options at all', async () => {
    const downloaded = await handle().download();

    expect(downloaded.text()).toBe('bytes');
    expect(downloaded.arrayBuffer()).toBeDefined();

    const path = join(tmpdir(), `pr-j-additive-snapshot-${Date.now()}.bin`);
    await downloaded.saveAs(path);
    await rm(path, { force: true });
  });
});
