export type ApiClientSettings = {
  /**
   * the URL to use for managing user oauth tokens.
   * Specify this value if you are using a regional bot.
   * For e.g., https://europe.token.botframework.com
   * Default is https://token.botframework.com
   */
  readonly oauthUrl: string;
};

export const DEFAULT_API_CLIENT_SETTINGS: ApiClientSettings = {
  oauthUrl: 'https://token.botframework.com',
};

export function mergeApiClientSettings(
  apiClientSettings?: Partial<ApiClientSettings>
): ApiClientSettings {
  const env = typeof process === 'undefined' ? undefined : process.env;
  
  return {
    oauthUrl: 
      apiClientSettings?.oauthUrl ?? 
      env?.OAUTH_URL ?? 
      DEFAULT_API_CLIENT_SETTINGS.oauthUrl,
  };
}