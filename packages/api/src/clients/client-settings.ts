export type ClientSettings = {
  /**
   * the URL to use for managing user oauth tokens.
   * Specify this value if you are using a regional bot.
   * For e.g., https://europe.token.botframework.com
   * Default is https://token.botframework.com
   */
  readonly oauthUrl: string;
};

export const DEFAULT_CLIENT_SETTINGS: ClientSettings = {
  oauthUrl: 'https://token.botframework.com',
};

export function mergeClientSettings(
  clientSettings?: Partial<ClientSettings>
): ClientSettings {
  const env = typeof process === 'undefined' ? undefined : process.env;
  
  return {
    oauthUrl: 
      clientSettings?.oauthUrl ?? 
      env?.OAUTH_URL ?? 
      DEFAULT_CLIENT_SETTINGS.oauthUrl,
  };
}