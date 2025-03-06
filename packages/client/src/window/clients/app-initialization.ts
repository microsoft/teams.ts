import { WindowClient } from '../window-client';

/**
 * Describes errors that caused app initialization to fail
 */
export type FailedReason = 'AuthFailed' | 'Timeout' | 'Other';

/**
 * Describes expected errors that occurred during an otherwise successful
 * app initialization
 */
export type ExpectedFailureReason =
  | 'PermissionError'
  | 'NotFound'
  | 'Throttling'
  | 'Offline'
  | 'Other';

/**
 * Represents the failed request sent during a failed app initialization.
 */
export type FailedParams = {
  /**
   * The reason for the failure
   */
  reason: FailedReason;

  /**
   * This property is currently unused.
   */
  message?: string;
};

/**
 * Represents the failure request sent during an erroneous app initialization.
 */
export type ExpectedFailureParams = {
  /**
   * The reason for the failure
   */
  reason: ExpectedFailureReason;

  /**
   * A message that describes the failure
   */
  message?: string;
};

export class AppInitializationClient {
  readonly window: WindowClient;

  constructor(client: WindowClient) {
    this.window = client;
  }

  async loaded() {
    await this.window.send('appInitialization.appLoaded');
  }

  async success() {
    await this.window.send('appInitialization.sucess');
  }

  async failure(params: FailedParams) {
    await this.window.send('appInitialization.failure', [params.reason, params.message]);
  }

  async expectedFailure(params: ExpectedFailureParams) {
    await this.window.send('appInitialization.expectedFailure', [params.reason, params.message]);
  }
}
