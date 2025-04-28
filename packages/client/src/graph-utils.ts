import * as http from '@microsoft/teams.common/http';
import { ILogger } from '@microsoft/teams.common/logging';
import * as graph from '@microsoft/teams.graph';

import { acquireMsalAccessToken } from './msal-utils';

export function buildGraphClient(
  getMsalInstance: () => { msalInstance: Parameters<typeof acquireMsalAccessToken>[0] },
  logger: ILogger
): graph.Client {
  {
    const graphRequestAccessTokenInterceptor = async (ctx: http.RequestContext) => {
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

    return new graph.Client(
      new http.Client({
        interceptors: [{ request: graphRequestAccessTokenInterceptor }],
      })
    );
  }
}
