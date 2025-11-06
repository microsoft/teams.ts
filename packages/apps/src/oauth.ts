import {
  ClientSettings,
  DEFAULT_CLIENT_SETTINGS
} from '@microsoft/teams.api';

export type OAuthSettings = {
  /**
   * the OAuth connection name to use for
   * authentication
   * @default `graph`
   */
  readonly defaultConnectionName?: string;

  /**
   * the client settings to use for
   * authentication. This is important to
   * configure for regional bots.
   */
  readonly clientSettings?: ClientSettings
};

export const DEFAULT_OAUTH_SETTINGS: Required<OAuthSettings> = {
  defaultConnectionName: 'graph',
  clientSettings: DEFAULT_CLIENT_SETTINGS
};
