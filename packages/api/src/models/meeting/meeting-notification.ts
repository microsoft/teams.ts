/**
 * A surface target for a meeting notification.
 */
export type MeetingNotificationSurface = {
  /**
   * The surface type. E.g. 'meetingStage', 'meetingTabIcon', 'meetingCopilotPane'.
   */
  surface: string;

  /**
   * The content type for surfaces that carry content. E.g. 'task'.
   */
  contentType?: string;

  /**
   * The content payload for the surface.
   */
  content?: Record<string, any>;

  /**
   * The tab entity ID, required for 'meetingTabIcon' surfaces.
   */
  tabEntityId?: string;
};

/**
 * The value of a targeted meeting notification.
 */
export type MeetingNotificationValue = {
  /**
   * AAD object IDs of the meeting participants to notify.
   */
  recipients: string[];

  /**
   * The surfaces to send the notification to.
   */
  surfaces: MeetingNotificationSurface[];
};

/**
 * Parameters for sending a targeted meeting notification.
 * Requires the RSC permission `OnlineMeetingNotification.Send.Chat`.
 */
export type MeetingNotificationParams = {
  /**
   * The notification type.
   * @default 'targetedMeetingNotification'
   */
  type?: string;

  /**
   * The notification value containing recipients and surfaces.
   */
  value: MeetingNotificationValue;
};

/**
 * Information about a recipient that failed to receive a meeting notification.
 */
export type MeetingNotificationRecipientFailure = {
  /**
   * The MRI of the recipient.
   */
  recipientMri?: string;

  /**
   * The error code.
   */
  errorCode?: string;

  /**
   * The reason for the failure.
   */
  failureReason?: string;
};

/**
 * Response from a meeting notification request when some or all recipients failed (HTTP 207).
 * `undefined` is returned when all notifications were sent successfully (HTTP 202).
 */
export type MeetingNotificationResponse = {
  /**
   * Information about recipients that failed to receive the notification.
   */
  recipientsFailureInfo?: MeetingNotificationRecipientFailure[];
};
