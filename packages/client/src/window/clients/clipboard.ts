import { WindowClient } from '../window-client';

/**
 * Currently supported Mime type
 */
export type ClipboardMimeType = 'text/plain' | 'text/html' | 'image/png' | 'image/jpeg';

/**
 * Clipboard write parameters
 */
export interface ClipboardWriteParams {
  /** Mime Type of data to be copied to Clipboard */
  mimeType: ClipboardMimeType;

  /** Blob content in Base64 string format */
  content: string;
}

export class ClipboardClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async read() {
    const [res] = await this.window.send<[string | Blob]>('clipboard.readFromClipboard');
    return res;
  }

  async write(params: ClipboardWriteParams) {
    await this.window.send('clipboard.writeToClipboard', params);
  }
}
