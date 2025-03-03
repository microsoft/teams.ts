import { ChannelType } from './channel-type';
import { FileOpenPreference } from './file-open-preference';
import { FrameContext } from './frame-context';
import { HostClientType, HostName } from './host';
import { Locale } from './locale';
import { TeamTypes } from './team-type';
import { Theme } from './theme';
import { UserTeamRoles } from './user-team-role';

/**
 * Represents the structure of the received context message.
 */
export interface Context {
  /**
   * The Office 365 group ID for the team with which the content is associated.
   * This field is available only when the identity permission is requested in the manifest.
   */
  groupId?: string;

  /**
   * The Microsoft Teams ID for the team with which the content is associated.
   */
  teamId?: string;

  /**
   * The name for the team with which the content is associated.
   */
  teamName?: string;

  /**
   * The Microsoft Teams ID for the channel with which the content is associated.
   */
  channelId?: string;

  /**
   * The name for the channel with which the content is associated.
   */
  channelName?: string;

  /**
   * The type of the channel with which the content is associated.
   */
  channelType?: ChannelType;

  /**
   * The developer-defined unique ID for the entity this content points to.
   */
  entityId: string;

  /**
   * The developer-defined unique ID for the sub-entity this content points to.
   * This field should be used to restore to a specific state within an entity,
   * such as scrolling to or activating a specific piece of content.
   */
  subEntityId?: string;

  /**
   * The current locale that the user has configured for the app formatted as
   * languageId-countryId (for example, en-us).
   */
  locale: string;

  /**
   * More detailed locale info from the user's OS if available. Can be used together with
   * the @microsoft/globe NPM package to ensure your app respects the user's OS date and
   * time format configuration
   */
  osLocaleInfo?: Locale;

  /**
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a hint as to who the user is and never as proof of identity.
   * This field is available only when the identity permission is requested in the manifest.
   */
  upn?: string;

  /**
   * The Microsoft Entra tenant ID of the current user.
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a hint as to who the user is and never as proof of identity.
   * This field is available only when the identity permission is requested in the manifest.
   */
  tid?: string;

  /**
   * The current UI theme.
   */
  theme?: Theme;

  /**
   * Indication whether the tab is in full-screen mode.
   */
  isFullScreen?: boolean;

  /**
   * The type of the team.
   */
  teamType?: TeamTypes;

  /**
   * The root SharePoint site associated with the team.
   */
  teamSiteUrl?: string;

  /**
   * The domain of the root SharePoint site associated with the team.
   */
  teamSiteDomain?: string;

  /**
   * The relative path to the SharePoint site associated with the team.
   */
  teamSitePath?: string;

  /**
   * The tenant ID of the host team.
   */
  hostTeamTenantId?: string;

  /**
   * The Microsoft Entra group ID of the host team.
   */
  hostTeamGroupId?: string;

  /**
   * The relative path to the SharePoint folder associated with the channel.
   */
  channelRelativeUrl?: string;

  /**
   * Unique ID for the current Teams session for use in correlating telemetry data.
   */
  sessionId?: string;

  /**
   * The user's role in the team.
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a hint as to the user's role, and never as proof of her role.
   */
  userTeamRole?: UserTeamRoles;

  /**
   * The Microsoft Teams ID for the chat with which the content is associated.
   */
  chatId?: string;

  /**
   * A value suitable for use as a login_hint when authenticating with Microsoft Entra ID.
   * Because a malicious party can run your content in a browser, this value should
   * be used only as a hint as to who the user is and never as proof of identity.
   * This field is available only when the identity permission is requested in the manifest.
   */
  loginHint?: string;

  /**
   * The UPN of the current user. This may be an externally-authenticated UPN (e.g., guest users).
   * Because a malicious party run your content in a browser, this value should
   * be used only as a hint as to who the user is and never as proof of identity.
   * This field is available only when the identity permission is requested in the manifest.
   */
  userPrincipalName?: string;

  /**
   * The Microsoft Entra object ID of the current user.
   * Because a malicious party run your content in a browser, this value should
   * be used only as a hint as to who the user is and never as proof of identity.
   * This field is available only when the identity permission is requested in the manifest.
   */
  userObjectId?: string;

  /**
   * Indicates whether team is archived.
   * Apps should use this as a signal to prevent any changes to content associated with archived teams.
   */
  isTeamArchived?: boolean;

  /**
   * The name of the host client. Possible values are: Office, Orange, Outlook, Teams
   */
  hostName?: HostName;

  /**
   * The type of the host client. Possible values are : android, ios, web, desktop, rigel(deprecated, use teamsRoomsWindows instead),
   * surfaceHub, teamsRoomsWindows, teamsRoomsAndroid, teamsPhones, teamsDisplays
   */
  hostClientType?: HostClientType;

  /**
   * The context where tab url is loaded (content, task, setting, remove, sidePanel)
   */
  frameContext?: FrameContext;

  /**
   * SharePoint context. This is only available when hosted in SharePoint.
   */
  sharepoint?: any;

  /**
   * The type of license for the current users tenant.
   */
  tenantSKU?: string;

  /**
   * The license type for the current user.
   */
  userLicenseType?: string;

  /**
   * The ID of the parent message from which this task module was launched.
   * This is only available in task modules launched from bot cards.
   */
  parentMessageId?: string;

  /**
   * Current ring ID
   */
  ringId?: string;

  /**
   * Unique ID for the current session for use in correlating telemetry data. A session corresponds to the lifecycle of an app. A new session begins upon the creation of a webview (on Teams mobile) or iframe (in Teams desktop) hosting the app, and ends when it is destroyed.
   */
  appSessionId?: string;

  /**
   * ID for the current visible app which is different for across cached sessions. Used for correlating telemetry data``
   */
  appLaunchId?: string;

  /**
   * Represents whether calling is allowed for the current logged in User
   */
  isCallingAllowed?: boolean;

  /**
   * Represents whether PSTN calling is allowed for the current logged in User
   */
  isPSTNCallingAllowed?: boolean;

  /**
   * Meeting Id used by tab when running in meeting context
   */
  meetingId?: string;

  /**
   * The OneNote section ID that is linked to the channel.
   */
  defaultOneNoteSectionId?: string;

  /**
   * Indication whether the tab is in a pop out window
   */
  isMultiWindow?: boolean;

  /**
   * Indication whether the tab is being loaded in the background
   */
  isBackgroundLoad?: boolean;

  /**
   * Personal app icon y coordinate position
   */
  appIconPosition?: number;

  /**
   * Source origin from where the tab is opened
   */
  sourceOrigin?: string;

  /**
   * Time when the user clicked on the tab using the date.
   *
   * For measuring elapsed time between the moment the user click the tab, use {@link app.AppInfo.userClickTimeV2 | app.Context.app.userClickTimeV2} instead as it uses the performance timer API.
   */
  userClickTime?: number;

  /**
   * Time when the user click on the app by using the performance timer API. Useful for measuring elapsed time accurately.
   *
   * For displaying the time when the user clicked on the app, please use {@link app.AppInfo.userClickTime | app.Context.app.userClickTime} as it uses the date.
   */
  userClickTimeV2?: number;

  /**
   * Team Template ID if there was a Team Template associated with the creation of the team.
   */
  teamTemplateId?: string;

  /**
   * Where the user prefers the file to be opened from by default during file open
   */
  userFileOpenPreference?: FileOpenPreference;

  /**
   * The address book name of the current user.
   */
  userDisplayName?: string;

  /**
   * Teamsite ID, aka sharepoint site id.
   */
  teamSiteId?: string;

  /**
   * The SharePoint my site domain associated with the user.
   */
  mySiteDomain?: string;

  /**
   * The SharePoint relative path to the current users mysite
   */
  mySitePath?: string;

  /**
   * When `processActionCommand` activates a dialog, this dialog should automatically fill in some fields with information. This information comes from M365 and is given to `processActionCommand` as `extractedParameters`.
   * App developers need to use these `extractedParameters` in their dialog.
   * They help pre-fill the dialog with necessary information (`dialogParameters`) along with other details.
   */
  dialogParameters?: Record<string, string>;

  /**
   * This ID is the unique identifier assigned to the app after deployment and is critical for ensuring the correct app instance is recognized across hosts.
   */
  appId?: string;

  /**
   * The version of the manifest that the app is running.
   */
  manifestVersion?: string;
}
