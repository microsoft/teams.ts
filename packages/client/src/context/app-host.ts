import { HostClientType, HostName } from '../window';

/**
 * Represents information about the application's host.
 */
export type AppHostContext = {
  /**
   * Identifies which host is running your app
   */
  name: HostName;

  /**
   * The client type on which the host is running
   */
  clientType: HostClientType;

  /**
   * Unique ID for the current Host session for use in correlating telemetry data.
   */
  sessionId: string;

  /**
   * Current ring ID
   */
  ringId?: string;
};
