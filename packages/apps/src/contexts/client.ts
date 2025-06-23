export interface IClientContext {
  /**
   * This ID is the unique identifier assigned to the app after deployment and is critical for ensuring the correct app instance is recognized across hosts.
   */
  readonly appId?: string;

  /**
   * Unique ID for the current session for use in correlating telemetry data. A session corresponds to the lifecycle of an app. A new session begins upon the creation of a webview (on Teams mobile) or iframe (in Teams desktop) hosting the app, and ends when it is destroyed.
   */
  readonly appSessionId: string;

  /**
   * The Microsoft Entra tenant ID of the current user, extracted from request auth  token.
   */
  readonly tenantId: string;

  /**
   * The Microsoft Entra object id of the current user, extracted from the request auth token.
   */
  readonly userId: string;

  /**
   * The name of the current user, extracted from the request auth token.
   */
  readonly userName: string;

  /**
   * The Microsoft Teams ID for the team with which the content is associated.
   */
  readonly teamId?: string;

  /**
   * The ID of the parent message from which this task module was launched.
   * This is only available in task modules launched from bot cards.
   */
  readonly messageId?: string;

  /**
   * The Microsoft Teams ID for the channel with which the content is associated.
   */
  readonly channelId?: string;

  /**
   * The Microsoft Teams ID for the chat with which the content is associated.
   */
  readonly chatId?: string;

  /**
   * Meeting ID used by tab when running in meeting context
   */
  readonly meetingId?: string;

  /**
   * The developer-defined unique ID for the page this content points to.
   */
  readonly pageId: string;

  /**
   * The developer-defined unique ID for the sub-page this content points to.
   * This field should be used to restore to a specific state within a page,
   * such as scrolling to or activating a specific piece of content.
   */
  readonly subPageId?: string;

  /**
   * The MSAL entra token.
   */
  readonly authToken: string;
}
