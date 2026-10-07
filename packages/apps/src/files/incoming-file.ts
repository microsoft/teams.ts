import { createWriteStream } from 'fs';

import { ConversationType } from '@microsoft/teams.api';
import { Client as HttpClient, ILogger } from '@microsoft/teams.common';

import {
  BotApiCredential,
  collectStream,
  FileFetch,
  FileFetchTarget,
  GraphCredential,
  openFileStream,
} from './download';
import { DownloadedFile } from './downloaded-file';
import { inlineImageNaming, sniffImageFormat } from './inline-image';
import { AttachmentStyle, FileSource, IDownloadedFile, IFileReadOptions, IIncomingFile } from './types';

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
  /** Defaults to `file`. */
  attachmentStyle?: AttachmentStyle;
  contentUrl?: string;
  raw?: unknown;
  /**
   * For an inline image, the name without an extension; the downloaded extension comes from the bytes.
   */
  inlineImageBaseName?: string;
  /** Short-lived, pre-authorized download URL (personal scope). */
  downloadUrl?: string;
  /** Graph credential for the current actor, resolved at fetch time rather than captured here. */
  credential?: GraphCredential;
  /** Bot API credential for inline images, resolved at fetch time. */
  botApiCredential?: BotApiCredential;
  /** Logger, so which fetch route was taken is diagnosable. */
  log?: ILogger;
  /** Injectable fetch used to keep tests off the network; takes precedence over `httpClient`. */
  fetch?: FileFetch;
  /** The app's HTTP client, so downloads inherit its User-Agent, middleware, and user-supplied configuration. */
  httpClient?: HttpClient;
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
  readonly attachmentStyle: AttachmentStyle;
  readonly contentUrl?: string;
  readonly raw?: unknown;

  private readonly downloadUrl?: string;
  private readonly _inlineImageBaseName?: string;
  private readonly _credential?: GraphCredential;
  private readonly _botApiCredential?: BotApiCredential;
  private readonly _log?: ILogger;
  private readonly _fetch?: FileFetch;
  private readonly _httpClient?: HttpClient;
  private _priorFetchSucceeded = false;

  constructor(init: IIncomingFileInit) {
    this.uniqueId = init.uniqueId;
    this.name = init.name;
    this.contentType = init.contentType;
    this.extension = init.extension;
    this.scope = init.scope;
    this.source = init.source;
    this.attachmentStyle = init.attachmentStyle ?? 'file';
    this.contentUrl = init.contentUrl;
    this.raw = init.raw;
    this.downloadUrl = init.downloadUrl;
    this._inlineImageBaseName = init.inlineImageBaseName;
    this._credential = init.credential;
    this._botApiCredential = init.botApiCredential;
    this._log = init.log;
    this._fetch = init.fetch;
    this._httpClient = init.httpClient;
  }

  async stream(options?: IFileReadOptions): Promise<ReadableStream<Uint8Array>> {
    const opened = await openFileStream(this.target(), this.fetchOptions(options));
    this._priorFetchSucceeded = true;
    return opened.stream;
  }

  async download(options?: IFileReadOptions): Promise<IDownloadedFile> {
    const opened = await openFileStream(this.target(), this.fetchOptions(options));
    this._priorFetchSucceeded = true;

    const bytes = await collectStream(opened.stream);
    const { filename, contentType } = this.resolveDownloadedType(bytes, opened.contentType);

    return new DownloadedFile({
      bytes,
      contentType,
      filename,
      sourceUrl: opened.sourceUrl,
    });
  }

  async text(encoding?: string, options?: IFileReadOptions): Promise<string> {
    const downloaded = await this.download(options);
    return downloaded.text(encoding);
  }

  async arrayBuffer(options?: IFileReadOptions): Promise<ArrayBuffer> {
    const downloaded = await this.download(options);
    return downloaded.arrayBuffer();
  }

  async saveAs(path: string, options?: IFileReadOptions): Promise<void> {
    const opened = await openFileStream(this.target(), this.fetchOptions(options));
    this._priorFetchSucceeded = true;

    // Checked before opening the writable: creating or truncating the destination is a side effect an already-aborted call must not have.
    options?.signal?.throwIfAborted();

    const writable = createWriteStream(path);
    const reader = opened.stream.getReader();

    try {
      for (;;) {
        // Aborting only the request would leave a large already-open download writing to disk until it completed, so the write loop honours the signal too.
        options?.signal?.throwIfAborted();

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

  /**
   * The filename and MIME type for downloaded bytes.
   *
   * For an inline image, recognized bytes decide, then the hint-derived name and type, because the platform can return a different format from the hint (a GIF downloads as a static PNG).
   */
  private resolveDownloadedType(bytes: Uint8Array, responseContentType: string): { filename: string; contentType: string } {
    if (this.attachmentStyle !== 'inlineImage') {
      return { filename: this.name, contentType: responseContentType };
    }

    const sniffed = sniffImageFormat(bytes);

    if (sniffed && this._inlineImageBaseName) {
      const { name, contentType } = inlineImageNaming(this._inlineImageBaseName, sniffed);
      return { filename: name, contentType };
    }

    return { filename: this.name, contentType: this.contentType ?? 'application/octet-stream' };
  }

  private target(): FileFetchTarget {
    return {
      scope: this.scope,
      downloadUrl: this.downloadUrl,
      contentUrl: this.contentUrl,
      contentType: this.contentType,
      attachmentStyle: this.attachmentStyle,
    };
  }

  /** Options every byte method passes to the dispatcher. Kept in one place so a new option cannot be wired into some paths and missed on others. */
  private fetchOptions(options?: IFileReadOptions) {
    return {
      signal: options?.signal,
      priorFetchSucceeded: this._priorFetchSucceeded,
      fetch: this._fetch,
      httpClient: this._httpClient,
      credential: this._credential,
      botApiCredential: this._botApiCredential,
      log: this._log,
    };
  }
}
