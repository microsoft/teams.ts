import { CloudEnvironment } from '../auth/cloud-environment';
import type { ITokenProvider } from '../auth/credentials';
import { AgenticIdentity } from '../models';


export type ApiClientSettings = {
  /**
   * the URL to use for managing user oauth tokens.
   * Specify this value if you are using a regional bot.
   * For e.g., https://europe.token.botframework.com
   * Default is https://token.botframework.com
   */
  readonly oauthUrl: string;

  /**
   * Cloud environment for token scopes and endpoints.
   */
  readonly cloud?: CloudEnvironment;

  /**
   * Token provider for resolving tokens per-request.
   */
  readonly tokenProvider?: ITokenProvider;

  /**
   * Default agentic operation identity for this client instance.
   */
  readonly agenticIdentity?: AgenticIdentity;
};

export const DEFAULT_API_CLIENT_SETTINGS: ApiClientSettings = {
  oauthUrl: 'https://token.botframework.com',
};

export function mergeApiClientSettings(
  apiClientSettings?: Partial<ApiClientSettings>,
  cloud?: CloudEnvironment
): ApiClientSettings {
  const env = typeof process === 'undefined' ? undefined : process.env;
  const resolvedCloud = apiClientSettings?.cloud ?? cloud;
  const defaultOauthUrl = resolvedCloud?.tokenServiceUrl ?? DEFAULT_API_CLIENT_SETTINGS.oauthUrl;

  return {
    oauthUrl:
      apiClientSettings?.oauthUrl ??
      env?.OAUTH_URL ??
      defaultOauthUrl,
    cloud: resolvedCloud,
    tokenProvider: apiClientSettings?.tokenProvider,
    agenticIdentity: apiClientSettings?.agenticIdentity,
  };
}