/**
 * @interface
 * An interface representing NotificationInfo.
 * Specifies if a notification is to be sent for the mentions.
 *
 */
export interface NotificationInfo {
  /**
   * @member {boolean} [alert] true if notification is to be sent to the user,
   * false otherwise.
   */
  alert?: boolean;

  /**
   * @member {boolean} [alertInMeeting] true if a notification is to be shown to the user while in a meeting,
   * false otherwise.
   */
  alertInMeeting?: boolean;

  /**
   * @member {string} [externalResourceUrl] the value of the notification's external resource url
   */
  externalResourceUrl?: string;
}
