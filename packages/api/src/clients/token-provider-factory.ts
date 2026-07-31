import { SpanKind } from '@opentelemetry/api';

import type { Token } from '@microsoft/teams.common';

import { PUBLIC } from '../auth/cloud-environment';
import type { CloudEnvironment } from '../auth/cloud-environment';
import type { ITokenProvider } from '../auth/credentials';
import {
  API_ATTRIBUTE_NAMES,
  API_SPAN_NAMES,
  AUTH_FLOWS,
  type AuthFlow
} from '../diagnostics/constants';
import {
  getTeamsApiTracer,
  recordTeamsApiException
} from '../diagnostics/helpers';
import { isUserBackedAgenticIdentity, type AgenticIdentity } from '../models';


/**
 * @internal
 * Creates a common HTTP token callback backed by an {@link ITokenProvider}.
 * Resolves the token and emits `microsoft.teams.auth.outbound`; the common HTTP
 * client owns Authorization header injection.
 */
export function createTokenProviderFactory(
  tokenProvider: ITokenProvider,
  defaultAgenticIdentity?: AgenticIdentity,
  cloud: CloudEnvironment = PUBLIC
): Token {
  return () => {
    return traceAuthTokenAcquisition(getAuthFlow(defaultAgenticIdentity), async () => {
      // Coerce null to undefined: the TokenFactory contract allows only
      // string | StringLike | undefined.
      if (!defaultAgenticIdentity) {
        return (await tokenProvider.getAppToken(cloud.botScope)) ?? undefined;
      }

      if (isUserBackedAgenticIdentity(defaultAgenticIdentity)) {
        if (!tokenProvider.getAgenticUserToken) {
          throw new Error(
            'This client is scoped to a user-backed AgenticIdentity, but the configured token provider does not ' +
            'implement `getAgenticUserToken`. Falling back to an app-only token would authenticate ' +
            'under the wrong identity.'
          );
        }

        return (
          (await tokenProvider.getAgenticUserToken(
            cloud.agenticIdentityBotScope,
            requireAgenticAppId(defaultAgenticIdentity, 'user-backed'),
            defaultAgenticIdentity.agenticUserId,
            defaultAgenticIdentity.tenantId
          )) ?? undefined
        );
      }

      if (!tokenProvider.getAgenticAppToken) {
        throw new Error(
          'This client is scoped to an app-backed AgenticIdentity, but the configured token provider does not ' +
          'implement `getAgenticAppToken`. Falling back to an app-only token would authenticate ' +
          'under the wrong identity.'
        );
      }

      return (
        (await tokenProvider.getAgenticAppToken(
          cloud.agenticIdentityBotScope,
          requireAgenticAppId(defaultAgenticIdentity, 'app-backed'),
          defaultAgenticIdentity.tenantId
        )) ?? undefined
      );
    });
  };
}

function getAuthFlow(agenticIdentity: AgenticIdentity | undefined): AuthFlow {
  return agenticIdentity ? AUTH_FLOWS.agenticIdentity : AUTH_FLOWS.appOnly;
}

function requireAgenticAppId(agenticIdentity: AgenticIdentity, identityFlavor: string): string {
  if (!agenticIdentity.agenticAppId) {
    throw new Error(
      `agenticAppId is required for ${identityFlavor} AgenticIdentity token acquisition`
    );
  }

  return agenticIdentity.agenticAppId;
}

async function traceAuthTokenAcquisition<T>(authFlow: AuthFlow, acquireToken: () => Promise<T>): Promise<T> {
  return getTeamsApiTracer().startActiveSpan(
    API_SPAN_NAMES.authOutbound,
    { kind: SpanKind.CLIENT, attributes: { [API_ATTRIBUTE_NAMES.authFlow]: authFlow } },
    async (span) => {
      try {
        return await acquireToken();
      } catch (error) {
        recordTeamsApiException(span, error);
        throw error;
      } finally {
        span.end();
      }
    }
  );
}
