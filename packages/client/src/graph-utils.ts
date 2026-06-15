import { Client as HttpClient, type ILogger, type RequestContext } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';

import { acquireMsalAccessToken } from './msal-utils';

export function buildGraphClient(
  getMsalInstance: () => { msalInstance: Parameters<typeof acquireMsalAccessToken>[0] },
  logger: ILogger,
  getGraphScopes?: () => string[]
): GraphClient {
  {
    const graphRequestAccessTokenInterceptor = async (ctx: RequestContext) => {
      const { msalInstance } = getMsalInstance();

      // On Teams Desktop (NAA via OneAuth broker), the '.default' scope is not resolved
      // the same way as on Web. Use explicit Graph scopes when available.
      const providedScopes = getGraphScopes?.();
      const scopes = (providedScopes && providedScopes.length > 0) ? providedScopes : ['.default'];
      if (scopes.length === 1 && scopes[0] === '.default') {
        logger.warn(
          'Graph client is using the \'.default\' scope. This does not work on Teams Desktop (NAA). ' +
          'Set explicit scopes in msalOptions.prewarmScopes (e.g., [\'User.Read\']) for Desktop compatibility.'
        );
      }

      const accessToken = await acquireMsalAccessToken(
        msalInstance,
        { scopes },
        logger
      );

      ctx.config.headers.set('Authorization', `Bearer ${accessToken}`);
      return ctx.config;
    };

    return new GraphClient(
      new HttpClient({
        interceptors: [{ request: graphRequestAccessTokenInterceptor }],
      })
    );
  }
}
