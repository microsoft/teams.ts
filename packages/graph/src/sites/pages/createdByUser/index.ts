import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { MailboxSettingsClient } from './mailboxSettings';
import { ServiceProvisioningErrorsClient } from './serviceProvisioningErrors';

/**
 * /sites/{site-id}/pages/{baseSitePage-id}/createdByUser
 * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
 */
export class CreatedByUserClient {
  protected baseUrl = '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser';
  protected http: http.Client;

  constructor(
    protected readonly baseSitePageId: string,
    options?: http.Client | http.ClientOptions
  ) {
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
   * `/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/mailboxSettings`
   *
   */
  get mailboxSettings() {
    return new MailboxSettingsClient(this.http);
  }

  /**
   * `/sites/{site-id}/pages/{baseSitePage-id}/createdByUser/serviceProvisioningErrors`
   *
   */
  get serviceProvisioningErrors() {
    return new ServiceProvisioningErrorsClient(this.http);
  }

  /**
   * `GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser`
   *
   * Identity of the user who created the item. Read-only.
   */
  async get(
    params?: Endpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/sites/{site-id}/pages/{baseSitePage-id}/createdByUser',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
        { name: 'baseSitePage-id', in: 'path' },
      ],
      {
        ...(params || {}),
        'baseSitePage-id': this.baseSitePageId,
      }
    );

    return this.http
      .get(url, config)
      .then(
        (res) =>
          res.data as Endpoints['GET /sites/{site-id}/pages/{baseSitePage-id}/createdByUser']['response']
      );
  }
}
