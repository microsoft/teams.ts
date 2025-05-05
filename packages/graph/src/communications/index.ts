import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { CallRecordsClient } from './callRecords';
import { CallsClient } from './calls';
import { GetPresencesByUserIdClient } from './getPresencesByUserId';
import { OnlineMeetingsClient } from './onlineMeetings';
import { PresencesClient } from './presences';

/**
 * /communications
 * Provides operations to manage the cloudCommunications singleton.
 */
export class CommunicationsClient {
  protected baseUrl = '/communications';
  protected http: http.Client;

  constructor(options?: http.Client | http.ClientOptions) {
    if (!options) {
      this.http = new http.Client({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else if ('request' in options) {
      this.http = options.clone({
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
        },
      });
    } else {
      this.http = new http.Client({
        ...options,
        baseUrl: 'https://graph.microsoft.com/v1.0',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': `teams.ts[graph]/${pkg.version}`,
          ...options.headers,
        },
      });
    }
  }

  /**
   * `/communications/callRecords`
   *
   * Provides operations to manage the callRecords property of the microsoft.graph.cloudCommunications entity.
   */
  get callRecords() {
    return new CallRecordsClient(this.http);
  }

  /**
   * `/communications/calls`
   *
   * Provides operations to manage the calls property of the microsoft.graph.cloudCommunications entity.
   */
  get calls() {
    return new CallsClient(this.http);
  }

  /**
   * `/communications/getPresencesByUserId`
   *
   * Provides operations to call the getPresencesByUserId method.
   */
  get getPresencesByUserId() {
    return new GetPresencesByUserIdClient(this.http);
  }

  /**
   * `/communications/onlineMeetings`
   *
   * Provides operations to manage the onlineMeetings property of the microsoft.graph.cloudCommunications entity.
   */
  get onlineMeetings() {
    return new OnlineMeetingsClient(this.http);
  }

  /**
   * `/communications/presences`
   *
   * Provides operations to manage the presences property of the microsoft.graph.cloudCommunications entity.
   */
  get presences() {
    return new PresencesClient(this.http);
  }

  /**
   * `GET /communications`
   *
   */
  async list(params?: Endpoints['GET /communications']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/communications',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /communications']['response']);
  }

  /**
   * `PATCH /communications`
   *
   */
  async update(
    body: Endpoints['PATCH /communications']['body'],
    params?: Endpoints['PATCH /communications']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/communications', [], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /communications']['response']);
  }
}
