/**
 * FrameContexts provides information about the context in which the app is running within the host.
 * Developers can use FrameContexts to determine how their app should behave in different contexts,
 * and can use the information provided by the context to adapt the app to the user's needs.
 *
 * @example
 * If your app is running in the "settings" context, you should be displaying your apps configuration page.
 * If the app is running in the content context, the developer may want to display information relevant to
 * the content the user is currently viewing.
 */
export type FrameContext =
  | 'settings'
  | 'content'
  | 'authentication'
  | 'remove'
  | 'task'
  | 'sidePanel'
  | 'stage'
  | 'meetingStage';

/**
 * FrameContexts provides information about the context in which the app is running within the host.
 * Developers can use FrameContexts to determine how their app should behave in different contexts,
 * and can use the information provided by the context to adapt the app to the user's needs.
 *
 * @example
 * If your app is running in the "settings" context, you should be displaying your apps configuration page.
 * If the app is running in the content context, the developer may want to display information relevant to
 * the content the user is currently viewing.
 */
export enum FrameContexts {
  /**
   * App's frame context from where settings page can be accessed.
   * See [how to create a configuration page.]( https://learn.microsoft.com/microsoftteams/platform/tabs/how-to/create-tab-pages/configuration-page?tabs=teamsjs-v2)
   */
  settings = 'settings',

  /** The default context for the app where all the content of the app is displayed. */
  content = 'content',

  /** Frame context used when app is running */
  authentication = 'authentication',

  /** The page shown when the user uninstalls the app. */
  remove = 'remove',

  /** A task module is a pop-up window that can be used to display a form, a dialog, or other interactive content within the host. */
  task = 'task',

  /** The side panel is a persistent panel that is displayed on the right side of the host and can be used to display content or UI that is relevant to the current page or tab. */
  sidePanel = 'sidePanel',

  /** The stage is a large area that is displayed at the center of the host and can be used to display content or UI that requires a lot of space, such as a video player or a document editor. */
  stage = 'stage',

  /** App's frame context from where meetingStage can be accessed in a meeting session, which is the primary area where video and presentation content is displayed during a meeting. */
  meetingStage = 'meetingStage',
}
