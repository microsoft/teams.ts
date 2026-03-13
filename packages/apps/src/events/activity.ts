import { IToken } from '@microsoft/teams.api';

/**
 * Core activity fields that all transports need to know about
 */
export interface ICoreActivity {
  /**
   * Service URL for routing
   */
  serviceUrl?: string;

  /**
   * Activity ID for correlation
   */
  id?: string;

  /**
   * Activity type for basic routing
   */
  type?: string;
}

/**
 * the event emitted by a plugin
 * when an activity is received
 */
export interface IActivityEvent {
  /**
   * inbound request token
   */
  token: IToken;

  /**
   * inbound request body payload
   */
  body: ICoreActivity;
}
