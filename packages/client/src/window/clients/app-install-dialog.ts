import { WindowClient } from '../window-client';

/**
 * Represents set of parameters needed to open the appInstallDialog.
 */
export interface OpenAppInstallDialogParams {
  /**
   * A unique identifier for the app being installed.
   */
  appId: string;
}

export class AppInstallDialogClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async open(params: OpenAppInstallDialogParams) {
    const [ok, res] = await this.window.send<[boolean, string]>(
      'appInstallDialog.openAppInstallDialog',
      params
    );

    if (!ok) {
      throw { errorCode: 500, message: res };
    }

    return res;
  }
}
