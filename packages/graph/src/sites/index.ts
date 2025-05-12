import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddClient } from './add';
import { AnalyticsClient } from './analytics';
import { ColumnsClient } from './columns';
import { ContentTypesClient } from './contentTypes';
import { CreatedByUserClient } from './createdByUser';
import { DriveClient } from './drive';
import { DrivesClient } from './drives';
import { ExternalColumnsClient } from './externalColumns';
import { ItemsClient } from './items';
import { LastModifiedByUserClient } from './lastModifiedByUser';
import { ListsClient } from './lists';
import { OnenoteClient } from './onenote';
import { OperationsClient } from './operations';
import { PagesClient } from './pages';
import { PermissionsClient } from './permissions';
import { RemoveClient } from './remove';
import { SitesSitesClient } from './sitesSites';
import { TermStoreClient } from './termStore';
import { TermStoresClient } from './termStores';

/**
 * /sites
 * Provides operations to manage the collection of site entities.
 */
export class SitesClient {
  protected baseUrl = '/sites';
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
   * `/sites/add`
   *
   * Provides operations to call the add method.
   */
  get add() {
    return new AddClient(this.http);
  }

  /**
   * `/sites/{site-id}/analytics`
   *
   * Provides operations to manage the analytics property of the microsoft.graph.site entity.
   */
  analytics(siteId: string) {
    return new AnalyticsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/columns`
   *
   * Provides operations to manage the columns property of the microsoft.graph.site entity.
   */
  columns(siteId: string) {
    return new ColumnsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/contentTypes`
   *
   * Provides operations to manage the contentTypes property of the microsoft.graph.site entity.
   */
  contentTypes(siteId: string) {
    return new ContentTypesClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/createdByUser`
   *
   * Provides operations to manage the createdByUser property of the microsoft.graph.baseItem entity.
   */
  createdByUser(siteId: string) {
    return new CreatedByUserClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/drive`
   *
   * Provides operations to manage the drive property of the microsoft.graph.site entity.
   */
  drive(siteId: string) {
    return new DriveClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/drives`
   *
   * Provides operations to manage the drives property of the microsoft.graph.site entity.
   */
  drives(siteId: string) {
    return new DrivesClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/externalColumns`
   *
   * Provides operations to manage the externalColumns property of the microsoft.graph.site entity.
   */
  externalColumns(siteId: string) {
    return new ExternalColumnsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/items`
   *
   * Provides operations to manage the items property of the microsoft.graph.site entity.
   */
  items(siteId: string) {
    return new ItemsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/lastModifiedByUser`
   *
   * Provides operations to manage the lastModifiedByUser property of the microsoft.graph.baseItem entity.
   */
  lastModifiedByUser(siteId: string) {
    return new LastModifiedByUserClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/lists`
   *
   * Provides operations to manage the lists property of the microsoft.graph.site entity.
   */
  lists(siteId: string) {
    return new ListsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/onenote`
   *
   * Provides operations to manage the onenote property of the microsoft.graph.site entity.
   */
  onenote(siteId: string) {
    return new OnenoteClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/operations`
   *
   * Provides operations to manage the operations property of the microsoft.graph.site entity.
   */
  operations(siteId: string) {
    return new OperationsClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/pages`
   *
   * Provides operations to manage the pages property of the microsoft.graph.site entity.
   */
  pages(siteId: string) {
    return new PagesClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/permissions`
   *
   * Provides operations to manage the permissions property of the microsoft.graph.site entity.
   */
  permissions(siteId: string) {
    return new PermissionsClient(siteId, this.http);
  }

  /**
   * `/sites/remove`
   *
   * Provides operations to call the remove method.
   */
  get remove() {
    return new RemoveClient(this.http);
  }

  /**
   * `/sites/{site-id}/sites`
   *
   * Provides operations to manage the sites property of the microsoft.graph.site entity.
   */
  sitesSites(siteId: string) {
    return new SitesSitesClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/termStore`
   *
   * Provides operations to manage the termStore property of the microsoft.graph.site entity.
   */
  termStore(siteId: string) {
    return new TermStoreClient(siteId, this.http);
  }

  /**
   * `/sites/{site-id}/termStores`
   *
   * Provides operations to manage the termStores property of the microsoft.graph.site entity.
   */
  termStores(siteId: string) {
    return new TermStoresClient(siteId, this.http);
  }

  /**
   * `GET /sites`
   *
   * List all available sites in an organization. Specific filter criteria and query options are also supported and described below: In addition, you can use a $search query against the /sites collection to find sites matching given keywords.
If you want to list all sites across all geographies, refer to getAllSites. For more guidance about building applications that use site discovery for scanning purposes, see Best practices for discovering files and detecting changes at scale.
   */
  async list(params?: Endpoints['GET /sites']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/sites',
      [
        { name: '$top', in: 'query' },
        { name: '$skip', in: 'query' },
        { name: '$search', in: 'query' },
        { name: '$filter', in: 'query' },
        { name: '$count', in: 'query' },
        { name: '$orderby', in: 'query' },
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites']['response']);
  }

  /**
   * `GET /sites/{site-id}`
   *
   * Retrieve properties and relationships for a site resource.
A site resource represents a team site in SharePoint.
   */
  async get(params?: Endpoints['GET /sites/{site-id}']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/sites/{site-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'site-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /sites/{site-id}']['response']);
  }

  /**
   * `PATCH /sites/{site-id}`
   *
   */
  async update(
    body: Endpoints['PATCH /sites/{site-id}']['body'],
    params?: Endpoints['PATCH /sites/{site-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/sites/{site-id}', [{ name: 'site-id', in: 'path' }], {
      ...(params || {}),
    });

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /sites/{site-id}']['response']);
  }
}
