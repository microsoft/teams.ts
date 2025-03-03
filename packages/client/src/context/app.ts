import { FileOpenPreference, Locale, Theme } from '../window';

import { AppHostContext } from './app-host';

/**
 * Represents application information.
 */
export interface AppContext {
  /**
   * This ID is the unique identifier assigned to the app after deployment and is critical for ensuring the correct app instance is recognized across hosts.
   */
  id?: string;

  /**
   * ID for the current visible app which is different for across cached sessions. Used for correlating telemetry data.
   */
  launchId?: string;

  /**
   * Unique ID for the current session for use in correlating telemetry data. A session corresponds to the lifecycle of an app. A new session begins upon the creation of a webview (on Teams mobile) or iframe (in Teams desktop) hosting the app, and ends when it is destroyed.
   */
  sessionId: string;

  /**
   * The current locale that the user has configured for the app formatted as
   * languageId-countryId (for example, en-us).
   */
  locale: string;

  /**
   * The current UI theme of the host. Possible values: "default", "dark", "contrast" or "glass".
   */
  theme: Theme;

  /**
   * Info of the host
   */
  host: AppHostContext;

  /**
   * More detailed locale info from the user's OS if available. Can be used together with
   * the @microsoft/globe NPM package to ensure your app respects the user's OS date and
   * time format configuration
   */
  osLocaleInfo?: Locale;

  /**
   * Personal app icon y coordinate position
   */
  iconPositionVertical?: number;

  /**
   * Time when the user clicked on the tab using the date.
   */
  userClickTime?: number;

  /**
   * Time when the user click on the app by using the performance timer API. Useful for measuring elapsed time accurately.
   */
  userClickTimeV2?: number;

  /**
   * The ID of the parent message from which this task module was launched.
   * This is only available in task modules launched from bot cards.
   */
  parentMessageId?: string;

  /**
   * Where the user prefers the file to be opened from by default during file open
   */
  userFileOpenPreference?: FileOpenPreference;

  /**
   * The version of the manifest that the app is running.
   */
  manifestVersion?: string;
}
