import { mkdtemp, readFile, rm } from 'fs/promises';
import { tmpdir } from 'os';
import { join } from 'path';

import { FileFetch } from './download';
import { FileScopeNotSupportedError, FileUrlExpiredError } from './errors';
import { IncomingFile, IIncomingFileInit } from './incoming-file';

function personalFile(init?: Partial<IIncomingFileInit>): IncomingFile {
  return new IncomingFile({
    name: 'notes.txt',
    scope: 'personal',
    source: 'botActivity',
    downloadUrl: 'https://download.example/notes.txt?tempauth=abc',
    ...init,
  });
}

function jsonBody(text: string, headers?: Record<string, string>): Response {
  return new Response(new TextEncoder().encode(text), { status: 200, headers });
}

/** A fetch stub that hands back the given responses in call order, and records the urls it saw. */
function sequenceFetch(responses: Response[]): { fetch: FileFetch; calls: string[] } {
  const calls: string[] = [];
  let i = 0;
  const fetch: FileFetch = async (url) => {
    calls.push(url);
    const response = responses[Math.min(i, responses.length - 1)];
    i += 1;
    return response;
  };
  return { fetch, calls };
}

describe('IncomingFile', () => {
  describe('download', () => {
    it('fetches the download URL and buffers the bytes', async () => {
      const { fetch, calls } = sequenceFetch([jsonBody('hello world', { 'content-type': 'text/plain' })]);
      const file = personalFile({ fetch });

      const downloaded = await file.download();

      expect(calls).toEqual(['https://download.example/notes.txt?tempauth=abc']);
      expect(downloaded.text()).toBe('hello world');
      expect(downloaded.contentType).toBe('text/plain');
      expect(downloaded.filename).toBe('notes.txt');
      expect(downloaded.sourceUrl).toBe('https://download.example/notes.txt?tempauth=abc');
    });

    it('re-fetches on each call (no memoized bytes)', async () => {
      const { fetch, calls } = sequenceFetch([jsonBody('a'), jsonBody('b')]);
      const file = personalFile({ fetch });

      expect((await file.download()).text()).toBe('a');
      expect((await file.download()).text()).toBe('b');
      expect(calls).toHaveLength(2);
    });

    it('falls back to the incoming file contentType when the response omits one', async () => {
      const { fetch } = sequenceFetch([jsonBody('bytes')]);
      const file = personalFile({ fetch, contentType: 'application/pdf' });

      expect((await file.download()).contentType).toBe('application/pdf');
    });
  });

  describe('text and arrayBuffer convenience readers', () => {
    it('decode the downloaded bytes', async () => {
      const { fetch } = sequenceFetch([jsonBody('hello'), jsonBody('hello')]);
      const file = personalFile({ fetch });

      expect(await file.text()).toBe('hello');
      expect(new TextDecoder().decode(new Uint8Array(await file.arrayBuffer()))).toBe('hello');
    });
  });

  describe('expired download URL', () => {
    it('throws FileUrlExpiredError with reason "firstFetch" when the very first fetch is unauthorized', async () => {
      const { fetch } = sequenceFetch([new Response(null, { status: 401 })]);
      const file = personalFile({ fetch });

      await expect(file.download()).rejects.toMatchObject({
        constructor: FileUrlExpiredError,
        reason: 'firstFetch',
      });
    });

    it('treats 403 the same as 401', async () => {
      const { fetch } = sequenceFetch([new Response(null, { status: 403 })]);
      const file = personalFile({ fetch });

      await expect(file.download()).rejects.toBeInstanceOf(FileUrlExpiredError);
    });

    it('throws reason "reread" when a later fetch lapses after an earlier success', async () => {
      const { fetch } = sequenceFetch([jsonBody('first read ok'), new Response(null, { status: 401 })]);
      const file = personalFile({ fetch });

      expect((await file.download()).text()).toBe('first read ok');
      await expect(file.download()).rejects.toMatchObject({
        constructor: FileUrlExpiredError,
        reason: 'reread',
      });
    });
  });

  describe('stream', () => {
    it('returns the raw uncapped body stream', async () => {
      const { fetch } = sequenceFetch([jsonBody('streamed')]);
      const file = personalFile({ fetch });

      const stream = await file.stream();
      const reader = stream.getReader();
      const { value } = await reader.read();

      expect(new TextDecoder().decode(value)).toBe('streamed');
    });
  });

  describe('unsupported scope', () => {
    it('throws FileScopeNotSupportedError for group chat files', async () => {
      const { fetch } = sequenceFetch([jsonBody('unused')]);
      const file = personalFile({ fetch, scope: 'groupChat' });

      await expect(file.download()).rejects.toMatchObject({
        constructor: FileScopeNotSupportedError,
        scope: 'groupChat',
      });
    });
  });

  describe('download failures', () => {
    it('throws when a personal file has no download URL', async () => {
      const { fetch, calls } = sequenceFetch([jsonBody('unused')]);
      const file = personalFile({ fetch, downloadUrl: undefined });

      await expect(file.download()).rejects.toThrow(/no download URL/);
      expect(calls).toHaveLength(0);
    });

    it('throws on a non-auth error response', async () => {
      const { fetch } = sequenceFetch([new Response(null, { status: 500, statusText: 'Server Error' })]);
      const file = personalFile({ fetch });

      await expect(file.download()).rejects.toThrow(/failed to download file: 500/);
    });
  });

  describe('saveAs', () => {
    let dir: string;

    beforeEach(async () => {
      dir = await mkdtemp(join(tmpdir(), 'incoming-file-spec-'));
    });

    afterEach(async () => {
      await rm(dir, { recursive: true, force: true });
    });

    it('streams the bytes straight to a local file', async () => {
      const { fetch } = sequenceFetch([jsonBody('saved contents')]);
      const file = personalFile({ fetch });
      const path = join(dir, 'out.txt');

      await file.saveAs(path);

      expect((await readFile(path)).toString()).toBe('saved contents');
    });

    it('writes a buffered DownloadedFile snapshot to disk without re-fetching', async () => {
      const { fetch, calls } = sequenceFetch([jsonBody('snapshot bytes')]);
      const downloaded = await personalFile({ fetch }).download();
      const path = join(dir, 'snapshot.txt');

      await downloaded.saveAs(path);

      expect((await readFile(path)).toString()).toBe('snapshot bytes');
      expect(calls).toHaveLength(1);
    });
  });
});
