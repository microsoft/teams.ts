export type ClientSettings = {
  /**
   * the URL to use for managing user oauth tokens.
   * Specify this value if you are using a regional bot.
   * For e.g., https://europe.token.botframework.com
   * Default is https://token.botframework.com
   */
  readonly OAuthUrl?: string;
};

export const DEFAULT_CLIENT_SETTINGS: Required<ClientSettings> = {
  OAuthUrl: 'https://token.botframework.com',
};
