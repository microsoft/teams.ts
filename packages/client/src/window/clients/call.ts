import { WindowClient } from '../window-client';
import { CallModality } from '../types';

export interface StartCallParams {
  /**
   * Comma-separated list of user IDs representing the participants of the call.
   *
   * @remarks
   * Currently the User ID field supports the Microsoft Entra UserPrincipalName,
   * typically an email address, or in case of a PSTN call, it supports a pstn
   * mri 4:\<phonenumber>.
   */
  targets: string[];

  /**
   * List of modalities for the call. Defaults to [“audio”].
   */
  requestedModalities?: CallModality[];

  /**
   * An optional parameter that informs about the source of the deep link
   */
  source?: string;
}

export class CallClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async start(params: StartCallParams) {
    const [ok] = await this.window.send<[boolean]>('call.startCall', params);

    return ok;
  }
}
