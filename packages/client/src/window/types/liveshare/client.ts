import { UserMeetingRole } from '../user-meeting-role';

/**
 * specify the client info for a
 * particular client in a Live Share session.
 */
export interface ClientInfo {
  /**
   * The host user's `userId` associated with a given `clientId`
   */
  userId: string;

  /**
   * User's meeting roles associated with a given `clientId`
   */
  roles: UserMeetingRole[];

  /**
   * The user's display name associated with a given `clientId`.
   * If this returns as `undefined`, the user may need to update their host client.
   */
  displayName?: string;
}
