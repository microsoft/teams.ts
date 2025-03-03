import { ClientError } from '../client-error';
import { BarCodeConfig } from '../types';
import { WindowClient } from '../window-client';

export class BarCodeClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async scan(config: BarCodeConfig) {
    const [err, res] = await this.window.send<[ClientError | undefined, string]>(
      'media.scanBarCode',
      config
    );

    if (err) throw err;
    return res;
  }
}
