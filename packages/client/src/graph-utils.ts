import { Client as HttpClient, ILogger, type RequestContext } from '@microsoft/teams.common';
import { Client as GraphClient } from '@microsoft/teams.graph';

import { acquireMsalAccessToken } from './msal-utils';

export function buildGraphClient(
  getMsalInstance: () => { msalInstance: Parameters<typeof acquireMsalAccessToken>[0] },
  logger: ILogger
): GraphClient {
  {
    const graphRequestAccessTokenInterceptor = async (ctx: RequestContext) => {
      const { msalInstance } = getMsalInstance();

      // The developer should already have made sure that the user has consented to the scope
      // needed for the graph API they're calling, so requesting '.default' should be sufficient.
      const accessToken = await acquireMsalAccessToken(
        msalInstance,
        { scopes: ['.default'] },
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
