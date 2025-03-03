/**
 * The meeting roles of a user.
 * Used in Live Share for its role verification feature.
 * For more information, visit https://learn.microsoft.com/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-capabilities?tabs=javascript#role-verification-for-live-data-structures
 */
export type UserMeetingRole = 'Guest' | 'Attendee' | 'Presenter' | 'Organizer';

/**
 * The meeting roles of a user.
 * Used in Live Share for its role verification feature.
 * For more information, visit https://learn.microsoft.com/microsoftteams/platform/apps-in-teams-meetings/teams-live-share-capabilities?tabs=javascript#role-verification-for-live-data-structures
 */
export enum UserMeetingRoles {
  /**
   * Guest role.
   */
  guest = 'Guest',

  /**
   * Attendee role.
   */
  attendee = 'Attendee',

  /**
   * Presenter role.
   */
  presenter = 'Presenter',

  /**
   * Organizer role.
   */
  organizer = 'Organizer',
}
