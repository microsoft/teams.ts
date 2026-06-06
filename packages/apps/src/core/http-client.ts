import {
  Client as HttpClient,
  type ClientOptions as HttpClientOptions,
} from '@microsoft/teams.common';

import pkg from '../../package.json';

export type HttpClientSource = HttpClient | HttpClientOptions | (() => HttpClient);

export function resolveHttpClient(
  source: HttpClientSource | undefined
): HttpClient {
  const headers = {
    'User-Agent': `teams.ts[apps]/${pkg.version}`,
  };

  if (!source) {
    return new HttpClient({ headers });
  }

  if (typeof source === 'function') {
    return source().clone({ headers });
  }

  if ('request' in source) {
    return source.clone({ headers });
  }

  return new HttpClient(source).clone({ headers });
}
