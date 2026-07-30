import { AgenticUser, CloudEnvironment, IToken, ITokenProvider, PUBLIC } from '@microsoft/teams.api';

import { TokenManager } from './token-manager';

/**
 * The app's own token source, backed by the credentials the `App` was
 * configured with. Reach it as `app.tokenProvider` to acquire a token for
 * something the SDK does not call for you, such as an OpenTelemetry exporter.
 *
 * Unlike a consumer-supplied {@link ITokenProvider}, every capability is
 * implemented, so the agentic methods are required rather than optional.
 */
export interface IAppTokenProvider extends ITokenProvider {
  /**
   * Acquires an app-only (service-to-service) token.
   *
   * @param scope the scope to request the token for. Defaults to the configured
   * cloud environment's bot scope.
   * @param tenantId the tenant to acquire the token in. Defaults to the tenant
   * configured on the app's credentials.
   * @returns the token, or `null` when the app has no credentials configured.
   */
  getAppToken(scope?: string, tenantId?: string): Promise<IToken | null>;

  /**
   * Acquires a token carrying both the agent's and the agentic user's identity,
   * so downstream services see *which agent* and *on whose behalf*.
   *
   * @param scope the scope to request the token for. Defaults to the configured
   * cloud environment's Agentic User bot scope when `undefined`.
   * @param agenticUser the agentic user to act on behalf of. Its `tenantId`
   * takes precedence over the tenant configured on the credentials.
   * @returns the token, or `null` when the app has no credentials configured.
   */
  getAgenticUserToken(scope: string | undefined, agenticUser: AgenticUser): Promise<IToken | null>;

  /**
   * Acquires an app-only token for an Agentic App Instance, for calls the agent
   * makes as *itself*. Use {@link IAppTokenProvider.getAgenticUserToken} when a
   * call should be attributed to a user.
   *
   * @param scope the scope to request the token for.
   * @param agenticAppInstanceId the agentic app instance to act as.
   * @param tenantId the tenant to acquire the token in. Defaults to the tenant
   * configured on the app's credentials when omitted.
   * @returns the token, or `null` when the app has no credentials configured.
   */
  getAgenticAppInstanceToken(
    scope: string,
    agenticAppInstanceId: string,
    tenantId?: string
  ): Promise<IToken | null>;
}

/** @internal */
export class AppTokenProvider implements IAppTokenProvider {
  constructor(
    private readonly tokenManager: TokenManager,
    private readonly cloud: CloudEnvironment = PUBLIC
  ) { }

  async getAppToken(scope?: string, tenantId?: string) {
    return await this.tokenManager.getAppToken(scope ?? this.cloud.botScope, tenantId);
  }

  async getAgenticUserToken(scope: string | undefined, agenticUser: AgenticUser) {
    return await this.tokenManager.getAgenticUserToken(
      scope ?? this.cloud.agenticUserBotScope,
      agenticUser
    );
  }

  async getAgenticAppInstanceToken(
    scope: string,
    agenticAppInstanceId: string,
    tenantId?: string
  ) {
    return await this.tokenManager.getAgenticAppInstanceToken(scope, agenticAppInstanceId, tenantId);
  }
}
