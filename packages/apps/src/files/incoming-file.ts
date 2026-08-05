import { createWriteStream } from 'fs';

import { ConversationType } from '@microsoft/teams.api';

import { collectStream, FileFetch, FileFetchTarget, openFileStream } from './download';
import { DownloadedFile } from './downloaded-file';
import { FileSource, IDownloadedFile, IIncomingFile } from './types';

/**
 * Constructor arguments for {@link IncomingFile}.
 */
export interface IIncomingFileInit {
  uniqueId?: string;
  name: string;
  contentType?: string;
  extension?: string;
  scope: ConversationType;
  source: FileSource;
  webUrl?: string;
  raw?: unknown;
  /** Short-lived, pre-authorized download URL (personal scope). */
  downloadUrl?: string;
  /** Injectable fetch, defaulting to the global `fetch`; used to keep tests off the network. */
  fetch?: FileFetch;
}

/**
 * Lazy handle to a file attached to the current inbound activity. See {@link IIncomingFile}.
 */
export class IncomingFile implements IIncomingFile {
  readonly uniqueId?: string;
  readonly name: string;
  readonly contentType?: string;
  readonly extension?: string;
  readonly scope: ConversationType;
  readonly source: FileSource;
  readonly webUrl?: string;
  readonly raw?: unknown;

  private readonly downloadUrl?: string;
  private readonly _fetch?: FileFetch;
  private _priorFetchSucceeded = false;

  constructor(init: IIncomingFileInit) {
    this.uniqueId = init.uniqueId;
    this.name = init.name;
    this.contentType = init.contentType;
    this.extension = init.extension;
    this.scope = init.scope;
    this.source = init.source;
    this.webUrl = init.webUrl;
    this.raw = init.raw;
    this.downloadUrl = init.downloadUrl;
    this._fetch = init.fetch;
  }

  async stream(): Promise<ReadableStream<Uint8Array>> {
    const opened = await openFileStream(this.target(), {
      priorFetchSucceeded: this._priorFetchSucceeded,
      fetch: this._fetch,
    });
    this._priorFetchSucceeded = true;
    return opened.stream;
  }

  async download(): Promise<IDownloadedFile> {
    const opened = await openFileStream(this.target(), {
      priorFetchSucceeded: this._priorFetchSucceeded,
      fetch: this._fetch,
    });
    this._priorFetchSucceeded = true;

    const bytes = await collectStream(opened.stream);

    return new DownloadedFile({
      bytes,
      contentType: opened.contentType,
      filename: this.name,
      sourceUrl: opened.sourceUrl,
    });
  }

  async text(encoding?: string): Promise<string> {
    const downloaded = await this.download();
    return downloaded.text(encoding);
  }

  async arrayBuffer(): Promise<ArrayBuffer> {
    const downloaded = await this.download();
    return downloaded.arrayBuffer();
  }

  async saveAs(path: string): Promise<void> {
    const opened = await openFileStream(this.target(), {
      priorFetchSucceeded: this._priorFetchSucceeded,
      fetch: this._fetch,
    });
    this._priorFetchSucceeded = true;

    const writable = createWriteStream(path);
    const reader = opened.stream.getReader();

    try {
      for (;;) {
        const { done, value } = await reader.read();

        if (done) {
          break;
        }

        if (value) {
          await new Promise<void>((resolve, reject) => {
            writable.write(value, (err) => (err ? reject(err) : resolve()));
          });
        }
      }

      await new Promise<void>((resolve, reject) => {
        writable.end((err?: Error | null) => (err ? reject(err) : resolve()));
      });
    } catch (err) {
      writable.destroy();
      throw err;
    } finally {
      reader.releaseLock();
    }
  }

  private target(): FileFetchTarget {
    return {
      scope: this.scope,
      downloadUrl: this.downloadUrl,
      contentType: this.contentType,
    };
  }
}
