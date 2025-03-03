export interface Manifest {
  $schema?: string;
  /**
   * A color to use in conjunction with the icon. The value must be a valid HTML color code
   * starting with '#', for example `#4464ee`.
   */
  accentColor: string;
  activities?: Activities;
  /**
   * Specify and consolidates authorization related information for the App.
   */
  authorization?: ManifestAuthorization;
  /**
   * The set of bots for this app. Currently only one bot per app is supported.
   */
  bots?: Bot[];
  /**
   * The set of compose extensions for this app. Currently only one compose extension per app
   * is supported.
   */
  composeExtensions?: ComposeExtension[];
  /**
   * A list of tenant configured properties for an app
   */
  configurableProperties?: ConfigurableProperty[];
  /**
   * These are tabs users can optionally add to their channels and 1:1 or group chats and
   * require extra configuration before they are added. Configurable tabs are not supported in
   * the personal scope. Currently only one configurable tab per app is supported.
   */
  configurableTabs?: ConfigurableTab[];
  /**
   * The set of Office365 connectors for this app. Currently only one connector per app is
   * supported.
   */
  connectors?: Connector[];
  copilotAgents?: CopilotAgents;
  /**
   * Defines the list of cards which could be pinned to dashboards that can provide summarized
   * view of information relevant to user.
   */
  dashboardCards?: DashboardCard[];
  /**
   * A value indicating whether an app is blocked by default until admin allows it
   */
  defaultBlockUntilAdminAction?: boolean;
  /**
   * When a group install scope is selected, this will define the default capability when the
   * user installs the app
   */
  defaultGroupCapability?: DefaultGroupCapability;
  /**
   * The install scope defined for this app by default. This will be the option displayed on
   * the button when a user tries to add the app
   */
  defaultInstallScope?: DefaultInstallScope;
  description: Description;
  developer: Developer;
  /**
   * Specify the native features on a user's device that your app may request access to.
   */
  devicePermissions?: DevicePermission[];
  extensions?: ElementExtension[];
  /**
   * Specify the app's Graph connector configuration. If this is present then
   * webApplicationInfo.id must also be specified.
   */
  graphConnector?: GraphConnector;
  icons: Icons;
  /**
   * A unique identifier for this app. This id must be a GUID.
   */
  id: string;
  /**
   * A value indicating whether a personal app is rendered without a tab header-bar
   */
  isFullScreen?: boolean;
  localizationInfo?: LocalizationInfo;
  /**
   * The version of the schema this manifest is using. This schema version supports extending
   * Teams apps to other parts of the Microsoft 365 ecosystem. More info at
   * https://aka.ms/extendteamsapps.
   */
  manifestVersion: ManifestVersion;
  /**
   * Specify meeting extension definition.
   */
  meetingExtensionDefinition?: MeetingExtensionDefinition;
  name: Name;
  /**
   * Specifies the permissions the app requests from users.
   */
  permissions?: Permission[];
  /**
   * The url to the page that provides additional app information for the admins
   */
  publisherDocsUrl?: string;
  /**
   * A value indicating whether or not show loading indicator when app/tab is loading
   */
  showLoadingIndicator?: boolean;
  /**
   * A set of tabs that may be 'pinned' by default, without the user adding them manually.
   * Static tabs declared in personal scope are always pinned to the app's personal
   * experience. Static tabs do not currently support the 'teams' scope.
   */
  staticTabs?: StaticTab[];
  /**
   * Subscription offer associated with this app.
   */
  subscriptionOffer?: SubscriptionOffer;
  /**
   * List of 'non-standard' channel types that the app supports. Note: Channels of standard
   * type are supported by default if the app supports team scope.
   */
  supportedChannelTypes?: SupportedChannelType[];
  /**
   * A list of valid domains from which the tabs expect to load any content. Domain listings
   * can include wildcards, for example `*.example.com`. If your tab configuration or content
   * UI needs to navigate to any other domain besides the one use for tab configuration, that
   * domain must be specified here.
   */
  validDomains?: string[];
  /**
   * The version of the app. Changes to your manifest should cause a version change. This
   * version string must follow the semver standard (http://semver.org).
   */
  version: string;
  /**
   * Specify your AAD App ID and Graph information to help users seamlessly sign into your AAD
   * app.
   */
  webApplicationInfo?: WebApplicationInfo;
}

export interface Activities {
  /**
   * Specify the types of activites that your app can post to a users activity feed
   */
  activityTypes?: ActivityType[];
}

export interface ActivityType {
  description: string;
  templateText: string;
  type: string;
}

/**
 * Specify and consolidates authorization related information for the App.
 */
export interface ManifestAuthorization {
  /**
   * List of permissions that the app needs to function.
   */
  permissions?: Permissions;
}

/**
 * List of permissions that the app needs to function.
 */
export interface Permissions {
  /**
   * Permissions that must be granted on a per resource instance basis.
   */
  resourceSpecific?: ResourceSpecific[];
}

export interface ResourceSpecific {
  /**
   * The name of the resource-specific permission.
   */
  name: string;
  /**
   * The type of the resource-specific permission: delegated vs application.
   */
  type: ResourceSpecificType;
}

/**
 * The type of the resource-specific permission: delegated vs application.
 */
export type ResourceSpecificType = 'Application' | 'Delegated';

export interface Bot {
  /**
   * The Microsoft App ID specified for the bot in the Bot Framework portal
   * (https://dev.botframework.com/bots)
   */
  botId: string;
  /**
   * The list of commands that the bot supplies, including their usage, description, and the
   * scope for which the commands are valid. A separate command list should be used for each
   * scope.
   */
  commandLists?: CommandList[];
  configuration?: Configuration;
  /**
   * A value indicating whether or not the bot is a one-way notification only bot, as opposed
   * to a conversational bot.
   */
  isNotificationOnly?: boolean;
  /**
   * This value describes whether or not the bot utilizes a user hint to add the bot to a
   * specific channel.
   */
  needsChannelSelector?: boolean;
  /**
   * Specifies whether the bot offers an experience in the context of a channel in a team, in
   * a 1:1 or group chat, or in an experience scoped to an individual user alone. These
   * options are non-exclusive.
   */
  scopes: CommandListScope[];
  /**
   * A value indicating whether the bot supports audio calling.
   */
  supportsCalling?: boolean;
  /**
   * A value indicating whether the bot supports uploading/downloading of files.
   */
  supportsFiles?: boolean;
  /**
   * A value indicating whether the bot supports video calling.
   */
  supportsVideo?: boolean;
}

export interface CommandList {
  commands: CommandListCommand[];
  /**
   * Specifies the scopes for which the command list is valid
   */
  scopes: CommandListScope[];
}

export interface CommandListCommand {
  /**
   * A simple text description or an example of the command syntax and its arguments.
   */
  description: string;
  /**
   * The bot command name
   */
  title: string;
}

export type CommandListScope = 'team' | 'personal' | 'groupChat';

export interface Configuration {
  groupChat?: GroupChat;
  team?: GroupChat;
}

export interface GroupChat {
  fetchTask?: boolean;
  taskInfo?: TaskInfo;
}

export interface TaskInfo {
  /**
   * Dialog height - either a number in pixels or default layout such as 'large', 'medium', or
   * 'small'
   */
  height?: string;
  /**
   * Initial dialog title
   */
  title?: string;
  /**
   * Initial webview URL
   */
  url?: string;
  /**
   * Dialog width - either a number in pixels or default layout such as 'large', 'medium', or
   * 'small'
   */
  width?: string;
}

export interface ComposeExtension {
  /**
   * A relative file path to the api specification file in the manifest package.
   */
  apiSpecificationFile?: string;
  /**
   * Object capturing authorization information.
   */
  authorization?: ComposeExtensionAuthorization;
  /**
   * The Microsoft App ID specified for the bot powering the compose extension in the Bot
   * Framework portal (https://dev.botframework.com/bots)
   */
  botId?: string;
  /**
   * A value indicating whether the configuration of a compose extension can be updated by the
   * user.
   */
  canUpdateConfiguration?: boolean | null;
  commands?: ComposeExtensionCommand[];
  /**
   * Type of the compose extension.
   */
  composeExtensionType?: ComposeExtensionType;
  /**
   * A list of handlers that allow apps to be invoked when certain conditions are met
   */
  messageHandlers?: MessageHandler[];
}

/**
 * Object capturing authorization information.
 */
export interface ComposeExtensionAuthorization {
  /**
   * Object capturing details needed to do service auth. It will be only present when auth
   * type is apiSecretServiceAuth.
   */
  apiSecretServiceAuthConfiguration?: APISecretServiceAuthConfiguration;
  /**
   * Enum of possible authentication types.
   */
  authType?: AuthType;
  /**
   * Object capturing details needed to do single aad auth flow. It will be only present when
   * auth type is entraId.
   */
  microsoftEntraConfiguration?: MicrosoftEntraConfiguration;
}

/**
 * Object capturing details needed to do service auth. It will be only present when auth
 * type is apiSecretServiceAuth.
 */
export interface APISecretServiceAuthConfiguration {
  /**
   * Registration id returned when developer submits the api key through Developer Portal.
   */
  apiSecretRegistrationId?: string;
}

/**
 * Enum of possible authentication types.
 */
export type AuthType = 'none' | 'apiSecretServiceAuth' | 'microsoftEntra';

/**
 * Object capturing details needed to do single aad auth flow. It will be only present when
 * auth type is entraId.
 */
export interface MicrosoftEntraConfiguration {
  /**
   * Boolean indicating whether single sign on is configured for the app.
   */
  supportsSingleSignOn?: boolean;
}

export interface ComposeExtensionCommand {
  /**
   * A relative file path for api response rendering template file.
   */
  apiResponseRenderingTemplateFile?: string;
  /**
   * Context where the command would apply
   */
  context?: CommandContext[];
  /**
   * Description of the command.
   */
  description?: string;
  /**
   * A boolean value that indicates if it should fetch task module dynamically
   */
  fetchTask?: boolean;
  /**
   * Id of the command.
   */
  id: string;
  /**
   * A boolean value that indicates if the command should be run once initially with no
   * parameter.
   */
  initialRun?: boolean;
  parameters?: Parameter[];
  samplePrompts?: SamplePrompt[];
  /**
   * Semantic description for the command.
   */
  semanticDescription?: string;
  taskInfo?: TaskInfo;
  /**
   * Title of the command.
   */
  title: string;
  /**
   * Type of the command
   */
  type?: CommandType;
}

export type CommandContext = 'compose' | 'commandBox' | 'message';

export interface Parameter {
  /**
   * The choice options for the parameter
   */
  choices?: Choice[];
  /**
   * Description of the parameter.
   */
  description?: string;
  /**
   * Type of the parameter
   */
  inputType?: InputType;
  /**
   * The value indicates if this parameter is a required field.
   */
  isRequired?: boolean;
  /**
   * Name of the parameter.
   */
  name: string;
  /**
   * Semantic description for the parameter.
   */
  semanticDescription?: string;
  /**
   * Title of the parameter.
   */
  title: string;
  /**
   * Initial value for the parameter
   */
  value?: string;
}

export interface Choice {
  /**
   * Title of the choice
   */
  title: string;
  /**
   * Value of the choice
   */
  value: string;
}

/**
 * Type of the parameter
 */
export type InputType = 'text' | 'textarea' | 'number' | 'date' | 'time' | 'toggle' | 'choiceset';

export interface SamplePrompt {
  /**
   * This string will hold the sample prompt
   */
  text: string;
}

/**
 * Type of the command
 */
export type CommandType = 'query' | 'action';

/**
 * Type of the compose extension.
 */
export type ComposeExtensionType = 'botBased' | 'apiBased';

export interface MessageHandler {
  /**
   * Type of the message handler
   */
  type: MessageHandlerType;
  value: Value;
}

/**
 * Type of the message handler
 */
export type MessageHandlerType = 'link';

export interface Value {
  /**
   * A list of domains that the link message handler can register for, and when they are
   * matched the app will be invoked
   */
  domains?: string[];
  /**
   * A boolean that indicates whether the app's link message handler supports anonymous invoke
   * flow.
   */
  supportsAnonymizedPayloads?: boolean;
  [property: string]: any;
}

export type ConfigurableProperty =
  | 'name'
  | 'shortDescription'
  | 'longDescription'
  | 'smallImageUrl'
  | 'largeImageUrl'
  | 'accentColor'
  | 'developerUrl'
  | 'privacyUrl'
  | 'termsOfUseUrl';

export interface ConfigurableTab {
  /**
   * A value indicating whether an instance of the tab's configuration can be updated by the
   * user after creation.
   */
  canUpdateConfiguration?: boolean;
  /**
   * The url to use when configuring the tab.
   */
  configurationUrl: string;
  /**
   * The set of contextItem scopes that a tab belong to
   */
  context?: ConfigurableTabContext[];
  /**
   * The set of meetingSurfaceItem scopes that a tab belong to
   */
  meetingSurfaces?: MeetingSurface[];
  /**
   * Specifies whether the tab offers an experience in the context of a channel in a team, in
   * a 1:1 or group chat, or in an experience scoped to an individual user alone. These
   * options are non-exclusive. Currently, configurable tabs are only supported in the teams
   * and groupchats scopes.
   */
  scopes: ConfigurableTabScope[];
  /**
   * A relative file path to a tab preview image for use in SharePoint. Size 1024x768.
   */
  sharePointPreviewImage?: string;
  /**
   * Defines how your tab will be made available in SharePoint.
   */
  supportedSharePointHosts?: SupportedSharePointHost[];
}

export type ConfigurableTabContext =
  | 'personalTab'
  | 'channelTab'
  | 'privateChatTab'
  | 'meetingChatTab'
  | 'meetingDetailsTab'
  | 'meetingSidePanel'
  | 'meetingStage';

export type MeetingSurface = 'sidePanel' | 'stage';

export type ConfigurableTabScope = 'team' | 'groupChat';

export type SupportedSharePointHost = 'sharePointFullPage' | 'sharePointWebPart';

export interface Connector {
  /**
   * The url to use for configuring the connector using the inline configuration experience.
   */
  configurationUrl?: string;
  /**
   * A unique identifier for the connector which matches its ID in the Connectors Developer
   * Portal.
   */
  connectorId: string;
  /**
   * Specifies whether the connector offers an experience in the context of a channel in a
   * team, or an experience scoped to an individual user alone. Currently, only the team scope
   * is supported.
   */
  scopes: ConnectorScope[];
}

export type ConnectorScope = 'team';

export interface CopilotAgents {
  /**
   * An array of declarative agent elements references. Currently, only one declarative agent
   * per application is supported.
   */
  declarativeAgents: DeclarativeAgentRef[];
}

/**
 * A reference to a declarative agent element. The element's definition is in a separate
 * file.
 */
export interface DeclarativeAgentRef {
  /**
   * Relative file path to this declarative agent element file in the application package.
   */
  file: string;
  /**
   * A unique identifier for this declarative agent element.
   */
  id: string;
}

/**
 * Cards wich could be pinned to dashboard providing summarized view of information relevant
 * to user.
 */
export interface DashboardCard {
  contentSource: DashboardCardContentSource;
  /**
   * Rendering Size for dashboard card.
   */
  defaultSize: DefaultSize;
  /**
   * Description of the card.Maximum length is 255 characters.
   */
  description: string;
  /**
   * Represents the name of the card. Maximum length is 255 characters.
   */
  displayName: string;
  icon?: DashboardCardIcon;
  /**
   * Unique Id for the card. Must be unique inside the app.
   */
  id: string;
  /**
   * Id of the group in the card picker. This must be guid.
   */
  pickerGroupId: string;
}

/**
 * Represents a configuration for the source of the card’s content.
 */
export interface DashboardCardContentSource {
  /**
   * The configuration for the bot source. Required if sourceType is set to bot.
   */
  botConfiguration?: BotConfiguration;
  /**
   * The content of the dashboard card is sourced from a bot.
   */
  sourceType?: SourceType;
}

/**
 * The configuration for the bot source. Required if sourceType is set to bot.
 */
export interface BotConfiguration {
  /**
   * The unique Microsoft app ID for the bot as registered with the Bot Framework.
   */
  botId?: string;
}

/**
 * The content of the dashboard card is sourced from a bot.
 */
export type SourceType = 'bot';

/**
 * Rendering Size for dashboard card.
 */
export type DefaultSize = 'medium' | 'large';

/**
 * Represents a configuration for the source of the card’s content
 */
export interface DashboardCardIcon {
  /**
   * The icon for the card, to be displayed in the toolbox and card bar, represented as URL.
   */
  iconUrl?: string;
  /**
   * Office UI Fabric/Fluent UI icon friendly name for the card. This value will be used if
   * ‘iconUrl’ is not specified.
   */
  officeUIFabricIconName?: string;
}

/**
 * When a group install scope is selected, this will define the default capability when the
 * user installs the app
 */
export interface DefaultGroupCapability {
  /**
   * When the install scope selected is GroupChat, this field specifies the default capability
   * available
   */
  groupchat?: Groupchat;
  /**
   * When the install scope selected is Meetings, this field specifies the default capability
   * available
   */
  meetings?: Groupchat;
  /**
   * When the install scope selected is Team, this field specifies the default capability
   * available
   */
  team?: Groupchat;
}

/**
 * When the install scope selected is GroupChat, this field specifies the default capability
 * available
 *
 * When the install scope selected is Meetings, this field specifies the default capability
 * available
 *
 * When the install scope selected is Team, this field specifies the default capability
 * available
 */
export type Groupchat = 'tab' | 'bot' | 'connector';

/**
 * The install scope defined for this app by default. This will be the option displayed on
 * the button when a user tries to add the app
 */
export type DefaultInstallScope = 'personal' | 'team' | 'groupChat' | 'meetings';

export interface Description {
  /**
   * The full description of the app. Maximum length is 4000 characters.
   */
  full: string;
  /**
   * A short description of the app used when space is limited. Maximum length is 80
   * characters.
   */
  short: string;
}

export interface Developer {
  /**
   * The Microsoft Partner Network ID that identifies the partner organization building the
   * app. This field is not required, and should only be used if you are already part of the
   * Microsoft Partner Network. More info at https://aka.ms/partner
   */
  mpnId?: string;
  /**
   * The display name for the developer.
   */
  name: string;
  /**
   * The url to the page that provides privacy information for the app.
   */
  privacyUrl: string;
  /**
   * The url to the page that provides the terms of use for the app.
   */
  termsOfUseUrl: string;
  /**
   * The url to the page that provides support information for the app.
   */
  websiteUrl: string;
}

export type DevicePermission = 'geolocation' | 'media' | 'notifications' | 'midi' | 'openExternal';

/**
 * The set of extensions for this app. Currently only one extensions per app is supported.
 */
export interface ElementExtension {
  alternates?: ExtensionAlternateVersionsArray[];
  /**
   * The url for your extension, used to validate Exchange user identity tokens.
   */
  audienceClaimUrl?: string;
  autoRunEvents?: ExtensionAutoRunEventsArray[];
  requirements?: RequirementsExtensionElement;
  ribbons?: ExtensionRibbonsArray[];
  runtimes?: ExtensionRuntimesArray[];
}

export interface ExtensionAlternateVersionsArray {
  alternateIcons?: AlternateIcons;
  hide?: Hide;
  prefer?: Prefer;
  requirements?: RequirementsExtensionElement;
}

export interface AlternateIcons {
  highResolutionIcon: ExtensionCommonIcon;
  icon: ExtensionCommonIcon;
}

export interface ExtensionCommonIcon {
  /**
   * Size in pixels of the icon. Three image sizes are required (16, 32, and 80 pixels)
   */
  size: number;
  /**
   * Absolute Url to the icon.
   */
  url: string;
}

export interface Hide {
  customOfficeAddin?: CustomOfficeAddin;
  storeOfficeAddin?: StoreOfficeAddin;
  [property: string]: any;
}

export interface CustomOfficeAddin {
  /**
   * Solution ID of the in-market add-in to hide. Maximum length is 64 characters.
   */
  officeAddinId: string;
}

export interface StoreOfficeAddin {
  /**
   * Asset ID of the in-market add-in to hide. Maximum length is 64 characters.
   */
  assetId: string;
  /**
   * Solution ID of an in-market add-in to hide. Maximum length is 64 characters.
   */
  officeAddinId: string;
}

export interface Prefer {
  comAddin?: COMAddin;
  [property: string]: any;
}

export interface COMAddin {
  /**
   * Program ID of the alternate com extension. Maximum length is 64 characters.
   */
  progId: string;
}

export interface RequirementsExtensionElement {
  capabilities?: Capability[];
  /**
   * Identifies the form factors that support the add-in. Supported values: mobile, desktop.
   */
  formFactors?: FormFactor[];
  /**
   * Identifies the scopes in which the add-in can run.
   */
  scopes?: RequirementsScope[];
}

export interface Capability {
  /**
   * Identifies the maximum version for the requirement sets that the add-in needs to run.
   */
  maxVersion?: string;
  /**
   * Identifies the minimum version for the requirement sets that the add-in needs to run.
   */
  minVersion?: string;
  /**
   * Identifies the name of the requirement sets that the add-in needs to run.
   */
  name: string;
}

export type FormFactor = 'desktop' | 'mobile';

export type RequirementsScope = 'mail' | 'workbook' | 'document' | 'presentation';

export interface ExtensionAutoRunEventsArray {
  /**
   * Specifies the type of event. For supported types, please see:
   * https://review.learn.microsoft.com/en-us/office/dev/add-ins/outlook/autolaunch?tabs=xmlmanifest#supported-events.
   */
  events: Event[];
  requirements?: RequirementsExtensionElement;
}

export interface Event {
  /**
   * The ID of an action defined in runtimes. Maximum length is 64 characters.
   */
  actionId: string;
  /**
   * Configures how Outlook responds to the event.
   */
  options?: Options;
  type: string;
}

/**
 * Configures how Outlook responds to the event.
 */
export interface Options {
  sendMode: SendMode;
}

export type SendMode = 'promptUser' | 'softBlock' | 'block';

export interface ExtensionRibbonsArray {
  contexts?: ExtensionContext[];
  requirements?: RequirementsExtensionElement;
  tabs: ExtensionRibbonsArrayTabsItem[];
}

/**
 * Specifies the Office application windows in which the ribbon customization is available
 * to the user. Each item in the array is a member of a string array. Possible values are:
 * mailRead, mailCompose, meetingDetailsOrganizer, meetingDetailsAttendee.
 */
export type ExtensionContext =
  | 'mailRead'
  | 'mailCompose'
  | 'meetingDetailsOrganizer'
  | 'meetingDetailsAttendee'
  | 'onlineMeetingDetailsOrganizer'
  | 'logEventMeetingDetailsAttendee'
  | 'default';

export interface ExtensionRibbonsArrayTabsItem {
  /**
   * Id of the existing office Tab. Maximum length is 64 characters.
   */
  builtInTabId?: string;
  /**
   * Defines mobile group item.
   */
  customMobileRibbonGroups?: ExtensionRibbonsCustomMobileGroupItem[];
  /**
   * Defines tab groups.
   */
  groups?: ExtensionRibbonsCustomTabGroupsItem[];
  /**
   * A unique identifier for this tab within the app. Maximum length is 64 characters.
   */
  id?: string;
  /**
   * Displayed text for the tab. Maximum length is 64 characters.
   */
  label?: string;
  position?: Position;
}

export interface ExtensionRibbonsCustomMobileGroupItem {
  controls: ExtensionRibbonsCustomMobileControlButtonItem[];
  /**
   * Specify the Id of the group. Used for mobileMessageRead ext point.
   */
  id: string;
  /**
   * Short label of the control. Maximum length is 32 characters.
   */
  label: string;
  [property: string]: any;
}

export interface ExtensionRibbonsCustomMobileControlButtonItem {
  /**
   * The ID of an action defined in runtimes. Maximum length is 64 characters.
   */
  actionId: string;
  icons: ExtensionCustomMobileIcon[];
  /**
   * Specify the Id of the button like msgReadFunctionButton.
   */
  id: string;
  /**
   * Short label of the control. Maximum length is 32 characters.
   */
  label: string;
  type: PurpleType;
  [property: string]: any;
}

export interface ExtensionCustomMobileIcon {
  /**
   * How to scale - 1,2,3 for each image. This attribute specifies the UIScreen.scale property
   * for iOS devices.
   */
  scale: number;
  /**
   * Size in pixels of the icon. Three image sizes are required (25, 32, and 48 pixels).
   */
  size: number;
  /**
   * Url to the icon.
   */
  url: string;
}

export type PurpleType = 'mobileButton';

export interface ExtensionRibbonsCustomTabGroupsItem {
  /**
   * Id of a built-in Group. Maximum length is 64 characters.
   */
  builtInGroupId?: string;
  controls?: ExtensionCommonCustomGroupControlsItem[];
  icons?: ExtensionCommonIcon[];
  /**
   * A unique identifier for this group within the app. Maximum length is 64 characters.
   */
  id?: string;
  /**
   * Displayed text for the group. Maximum length is 64 characters.
   */
  label?: string;
}

export interface ExtensionCommonCustomGroupControlsItem {
  /**
   * The ID of an execution-type action that handles this key combination. Maximum length is
   * 64 characters.
   */
  actionId: string;
  /**
   * Id of the existing office control. Maximum length is 64 characters.
   */
  builtInControlId?: string;
  /**
   * Whether the control is initially enabled.
   */
  enabled?: boolean;
  icons: ExtensionCommonIcon[];
  /**
   * A unique identifier for this control within the app. Maximum length is 64 characters.
   */
  id: string;
  /**
   * Configures the items for a menu control.
   */
  items?: ExtensionCommonCustomControlMenuItem[];
  /**
   * Displayed text for the control. Maximum length is 64 characters.
   */
  label: string;
  /**
   * Specifies whether a group, button, menu, or menu item will be hidden on application and
   * platform combinations that support the API (Office.ribbon.requestCreateControls) that
   * installs custom contextual tabs on the ribbon. Default is false.
   */
  overriddenByRibbonApi?: boolean;
  supertip: ExtensionCommonSuperToolTip;
  /**
   * Defines the type of control whether button or menu.
   */
  type: FluffyType;
}

export interface ExtensionCommonCustomControlMenuItem {
  /**
   * The ID of an action defined in runtimes. Maximum length is 64 characters.
   */
  actionId: string;
  /**
   * Whether the control is initially enabled.
   */
  enabled?: boolean;
  icons?: ExtensionCommonIcon[];
  /**
   * A unique identifier for this control within the app. Maximum length is 64 characters.
   */
  id: string;
  /**
   * Displayed text for the control. Maximum length is 64 characters.
   */
  label: string;
  overriddenByRibbonApi?: boolean;
  supertip: ExtensionCommonSuperToolTip;
  /**
   * Supported values: menuItem.
   */
  type: ItemType;
}

export interface ExtensionCommonSuperToolTip {
  /**
   * Description of the super tip. Maximum length is 250 characters.
   */
  description: string;
  /**
   * Title text of the super tip. Maximum length is 64 characters.
   */
  title: string;
}

/**
 * Supported values: menuItem.
 */
export type ItemType = 'menuItem';

/**
 * Defines the type of control whether button or menu.
 */
export type FluffyType = 'button' | 'menu';

export interface Position {
  /**
   * Define alignment of this custom tab relative to the specified built-in tab.
   */
  align: Align;
  /**
   * The id of the built-in tab. Maximum length is 64 characters.
   */
  builtInTabId: string;
}

/**
 * Define alignment of this custom tab relative to the specified built-in tab.
 */
export type Align = 'after' | 'before';

/**
 * A runtime environment for a page or script
 */
export interface ExtensionRuntimesArray {
  actions?: ExtensionRuntimesActionsItem[];
  code: ExtensionRuntimeCode;
  /**
   * A unique identifier for this runtime within the app.  Maximum length is 64 characters.
   */
  id: string;
  /**
   * Runtimes with a short lifetime do not preserve state across executions. Runtimes with a
   * long lifetime do.
   */
  lifetime?: Lifetime;
  requirements?: RequirementsExtensionElement;
  /**
   * Supports running functions and launching pages.
   */
  type?: RuntimeType;
}

/**
 * Specifies the set of actions supported by this runtime. An action is either running a
 * JavaScript function or opening a view such as a task pane.
 */
export interface ExtensionRuntimesActionsItem {
  /**
   * Display name of the action. Maximum length is 64 characters.
   */
  displayName?: string;
  /**
   * Identifier for this action. Maximum length is 64 characters. This value is passed to the
   * code file.
   */
  id: string;
  /**
   * Whether allows the action to have multiple selection.
   */
  multiselect?: boolean;
  /**
   * Specifies that a task pane supports pinning, which keeps the task pane open when the user
   * changes the selection.
   */
  pinnable?: boolean;
  /**
   * Whether allows task pane add-ins to activate without the Reading Pane enabled or a
   * message selected.
   */
  supportsNoItemContext?: boolean;
  /**
   * executeFunction: Run a script function without waiting for it to finish. openPate: Open a
   * page in a view.
   */
  type: ActionType;
  /**
   * View where the page should be opened. Maximum length is 64 characters.
   */
  view?: string;
}

/**
 * executeFunction: Run a script function without waiting for it to finish. openPate: Open a
 * page in a view.
 */
export type ActionType = 'executeFunction' | 'openPage';

export interface ExtensionRuntimeCode {
  /**
   * URL of the .html page to be loaded in browser-based runtimes.
   */
  page: string;
  /**
   * URL of the .js script file to be loaded in UI-less runtimes.
   */
  script?: string;
}

/**
 * Runtimes with a short lifetime do not preserve state across executions. Runtimes with a
 * long lifetime do.
 */
export type Lifetime = 'short' | 'long';

/**
 * Supports running functions and launching pages.
 */
export type RuntimeType = 'general';

/**
 * Specify the app's Graph connector configuration. If this is present then
 * webApplicationInfo.id must also be specified.
 */
export interface GraphConnector {
  /**
   * The url where Graph-connector notifications for the application should be sent.
   */
  notificationUrl: string;
}

export interface Icons {
  /**
   * A relative file path to a full color PNG icon. Size 192x192.
   */
  color: string;
  /**
   * A relative file path to a transparent PNG outline icon. The border color needs to be
   * white. Size 32x32.
   */
  outline: string;
}

export interface LocalizationInfo {
  additionalLanguages?: AdditionalLanguage[];
  /**
   * A relative file path to a the .json file containing strings in the default language.
   */
  defaultLanguageFile?: string;
  /**
   * The language tag of the strings in this top level manifest file.
   */
  defaultLanguageTag: string;
}

export interface AdditionalLanguage {
  /**
   * A relative file path to a the .json file containing the translated strings.
   */
  file: string;
  /**
   * The language tag of the strings in the provided file.
   */
  languageTag: string;
}

export type ManifestVersion = '1.19';

/**
 * Specify meeting extension definition.
 */
export interface MeetingExtensionDefinition {
  /**
   * Meeting supported scenes.
   */
  scenes?: Scene[];
  /**
   * A boolean value indicating whether this app allows management by anonymous users.
   */
  supportsAnonymousGuestUsers?: boolean;
  /**
   * A boolean value indicating whether this app can stream the meeting's audio video content
   * to an RTMP endpoint.
   */
  supportsStreaming?: boolean;
}

export interface Scene {
  /**
   * A relative file path to a scene metadata json file.
   */
  file: string;
  /**
   * A unique identifier for this scene. This id must be a GUID.
   */
  id: string;
  /**
   * Maximum audiences supported in scene.
   */
  maxAudience: number;
  /**
   * Scene name.
   */
  name: string;
  /**
   * A relative file path to a scene PNG preview icon.
   */
  preview: string;
  /**
   * Number of seats reserved for organizers or presenters.
   */
  seatsReservedForOrganizersOrPresenters: number;
}

export interface Name {
  /**
   * The full name of the app, used if the full app name exceeds 30 characters.
   */
  full: string;
  /**
   * A short display name for the app.
   */
  short: string;
}

export type Permission = 'identity' | 'messageTeamMembers';

export interface StaticTab {
  /**
   * The Microsoft App ID specified for the bot in the Bot Framework portal
   * (https://dev.botframework.com/bots)
   */
  contentBotId?: string;
  /**
   * The url which points to the entity UI to be displayed in the canvas.
   */
  contentUrl?: string;
  /**
   * The set of contextItem scopes that a tab belong to
   */
  context?: StaticTabContext[];
  /**
   * A unique identifier for the entity which the tab displays.
   */
  entityId: string;
  /**
   * The display name of the tab.
   */
  name?: string;
  /**
   * Specifies whether the tab offers an experience in the context of a channel in a team, or
   * an experience scoped to an individual user alone or group chat. These options are
   * non-exclusive. Currently static tabs are only supported in the 'personal' scope.
   */
  scopes: CommandListScope[];
  /**
   * The url to direct a user's search queries.
   */
  searchUrl?: string;
  /**
   * The url to point at if a user opts to view in a browser.
   */
  websiteUrl?: string;
}

export type StaticTabContext =
  | 'personalTab'
  | 'channelTab'
  | 'privateChatTab'
  | 'meetingChatTab'
  | 'meetingDetailsTab'
  | 'meetingSidePanel'
  | 'meetingStage'
  | 'teamLevelApp';

/**
 * Subscription offer associated with this app.
 */
export interface SubscriptionOffer {
  /**
   * A unique identifier for the Commercial Marketplace Software as a Service Offer.
   */
  offerId: string;
}

export type SupportedChannelType = 'sharedChannels' | 'privateChannels';

/**
 * Specify your AAD App ID and Graph information to help users seamlessly sign into your AAD
 * app.
 */
export interface WebApplicationInfo {
  /**
   * AAD application id of the app. This id must be a GUID.
   */
  id: string;
  /**
   * Resource url of app for acquiring auth token for SSO.
   */
  resource?: string;
}
