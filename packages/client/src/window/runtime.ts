export type Runtime = {
  readonly apiVersion: number;
  readonly supports: {
    readonly app?: {
      readonly notifySuccessResponse?: {};
    };
    readonly appEntity?: {};
    readonly appInstallDialog?: {};
    readonly barCode?: {};
    readonly calendar?: {};
    readonly call?: {};
    readonly chat?: {};
    readonly clipboard?: {};
    readonly conversations?: {};
    readonly copilot?: {
      readonly customTelemetry?: {};
      readonly eligibility?: {};
    };
    readonly dialog?: {
      readonly card?: {
        readonly bot?: {};
      };
      readonly url?: {
        readonly bot?: {};
        readonly parentCommunication?: {};
      };
      readonly update?: {};
    };
    readonly externalAppAuthentication?: {};
    readonly externalAppAuthenticationForCEA?: {};
    readonly externalAppCardActions?: {};
    readonly externalAppCardActionsForCEA?: {};
    readonly externalAppCommands?: {};
    readonly geoLocation?: {
      readonly map?: {};
    };
    readonly hostEntity?: {
      readonly tab?: {};
    };
    readonly interactive?: {};
    readonly secondaryBrowser?: {};
    readonly location?: {};
    readonly logs?: {};
    readonly mail?: {
      readonly handoff?: {};
    };
    readonly marketplace?: {};
    readonly meetingRoom?: {};
    readonly menus?: {};
    readonly messageChannels?: {
      readonly telemetry?: {};
      readonly dataLayer?: {};
    };
    readonly monetization?: {};
    readonly nestedAppAuth?: {};
    readonly notifications?: {};
    readonly otherAppStateChange?: {};
    readonly pages?: {
      readonly appButton?: {};
      readonly backStack?: {};
      readonly config?: {};
      readonly currentApp?: {};
      readonly fullTrust?: {};
      readonly tabs?: {};
    };
    readonly people?: {};
    readonly permissions?: {};
    readonly profile?: {};
    readonly remoteCamera?: {};
    readonly search?: {};
    readonly sharing?: {
      readonly history?: {};
    };
    readonly stageView?: {
      readonly self?: {};
    };
    readonly store?: {};
    readonly teams?: {
      readonly fullTrust?: {
        readonly joinedTeams?: {};
      };
    };
    readonly thirdPartyCloudStorage?: {};
    readonly teamsCore?: {};
    readonly video?: {
      readonly mediaStream?: {};
      readonly sharedFrame?: {};
    };
    readonly visualMedia?: {
      readonly image?: {};
    };
    readonly webStorage?: {};
  };
};
