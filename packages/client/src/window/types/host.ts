/**
 * HostClientType represents the different client platforms on which host can be run.
 */
export type HostClientType =
  | 'desktop'
  | 'web'
  | 'android'
  | 'ios'
  | 'ipados'
  | 'macos'
  | 'visionOS'
  | 'surfaceHub'
  | 'teamsRoomsWindows'
  | 'teamsRoomsAndroid'
  | 'teamsPhones'
  | 'teamsDisplays';

/**
 * HostClientType represents the different client platforms on which host can be run.
 */
export enum HostClientTypes {
  /** Represents the desktop client of host, which is installed on a user's computer and runs as a standalone application. */
  desktop = 'desktop',

  /** Represents the web-based client of host, which runs in a web browser. */
  web = 'web',

  /** Represents the Android mobile client of host, which runs on Android devices such as smartphones and tablets. */
  android = 'android',

  /** Represents the iOS mobile client of host, which runs on iOS devices such as iPhones. */
  ios = 'ios',

  /** Represents the iPadOS client of host, which runs on iOS devices such as iPads. */
  ipados = 'ipados',

  /** The host is running on a macOS client, which runs on devices such as MacBooks. */
  macos = 'macos',

  /** The host is running on a visionOS client, which runs on devices such as Apple Vision. */
  visionOS = 'visionOS',

  /** Represents the client of host, which runs on surface hub devices. */
  surfaceHub = 'surfaceHub',

  /** Represents the client of host, which runs on Teams Rooms on Windows devices. More information on Microsoft Teams Rooms on Windows can be found [Microsoft Teams Rooms (Windows)](https://support.microsoft.com/office/microsoft-teams-rooms-windows-help-e667f40e-5aab-40c1-bd68-611fe0002ba2)*/
  teamsRoomsWindows = 'teamsRoomsWindows',

  /** Represents the client of host, which runs on Teams Rooms on Android devices. More information on Microsoft Teams Rooms on Android can be found [Microsoft Teams Rooms (Android)].(https://support.microsoft.com/office/get-started-with-teams-rooms-on-android-68517298-d513-46be-8d6d-d41db5e6b4b2)*/
  teamsRoomsAndroid = 'teamsRoomsAndroid',

  /** Represents the client of host, which runs on Teams phones. More information can be found [Microsoft Teams Phones](https://support.microsoft.com/office/get-started-with-teams-phones-694ca17d-3ecf-40ca-b45e-d21b2c442412) */
  teamsPhones = 'teamsPhones',

  /** Represents the client of host, which runs on Teams displays devices. More information can be found [Microsoft Teams Displays](https://support.microsoft.com/office/get-started-with-teams-displays-ff299825-7f13-4528-96c2-1d3437e6d4e6) */
  teamsDisplays = 'teamsDisplays',
}

/**
 * HostName indicates the possible hosts for your application.
 */
export type HostName =
  | 'Office'
  | 'Outlook'
  | 'OutlookWin32'
  | 'Orange'
  | 'Places'
  | 'Teams'
  | 'TeamsModern';

/**
 * HostName indicates the possible hosts for your application.
 */
export enum HostNames {
  /**
   * Office.com and Office Windows App
   */
  office = 'Office',

  /**
   * For "desktop" specifically, this refers to the new, pre-release version of Outlook for Windows.
   * Also used on other platforms that map to a single Outlook client.
   */
  outlook = 'Outlook',

  /**
   * Outlook for Windows: the classic, native, desktop client
   */
  outlookWin32 = 'OutlookWin32',

  /**
   * Microsoft-internal test Host
   */
  orange = 'Orange',

  /**
   * Microsoft connected workplace platform
   */
  places = 'Places',

  /**
   * Teams
   */
  teams = 'Teams',

  /**
   * Modern Teams
   */
  teamsModern = 'TeamsModern',
}
