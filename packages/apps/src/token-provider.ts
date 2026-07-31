import { AgenticIdentity, CloudEnvironment, IToken, ITokenProvider, PUBLIC } from '@microsoft/teams.api';

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
   * Acquires a token carrying the requested agentic identity.
   *
   * @param scope the scope to request the token for. Defaults to the configured
   * cloud environment's AgenticIdentity bot scope when `undefined`.
   * @param agenticIdentity the identity to act under. Its `tenantId`
   * takes precedence over the tenant configured on the credentials.
   * @returns the token, or `null` when the app has no credentials configured.
   */
  getAgenticIdentityToken(scope: string | undefined, agenticIdentity: AgenticIdentity): Promise<IToken | null>;
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

  async getAgenticIdentityToken(scope: string | undefined, agenticIdentity: AgenticIdentity) {
    return await this.tokenManager.getAgenticIdentityToken(
      scope ?? this.cloud.agenticIdentityBotScope,
      agenticIdentity
    );
  }
}
