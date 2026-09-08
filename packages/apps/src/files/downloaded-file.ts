import { writeFile } from 'fs/promises';

import { IDownloadedFile } from './types';

/**
 * Constructor arguments for {@link DownloadedFile}.
 */
export interface IDownloadedFileInit {
  bytes: Uint8Array;
  contentType: string;
  filename: string;
  sourceUrl: string;
}

/**
 * Buffered, point-in-time snapshot of a downloaded file. See {@link IDownloadedFile}.
 */
export class DownloadedFile implements IDownloadedFile {
  readonly bytes: Uint8Array;
  readonly contentType: string;
  readonly filename: string;
  readonly sourceUrl: string;

  constructor(init: IDownloadedFileInit) {
    this.bytes = init.bytes;
    this.contentType = init.contentType;
    this.filename = init.filename;
    this.sourceUrl = init.sourceUrl;
  }

  text(encoding: string = 'utf-8'): string {
    // TextDecoder is lossy by default (fatal: false): invalid bytes become U+FFFD and never throw.
    return new TextDecoder(encoding).decode(this.bytes);
  }

  arrayBuffer(): ArrayBuffer {
    // Copy into a fresh buffer so a pooled/oversized or shared backing buffer is never exposed.
    const copy = new Uint8Array(this.bytes.byteLength);
    copy.set(this.bytes);
    return copy.buffer;
  }

  async saveAs(path: string): Promise<void> {
    await writeFile(path, this.bytes);
  }
}
