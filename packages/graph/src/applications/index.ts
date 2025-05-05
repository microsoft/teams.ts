import { getInjectedUrl } from '@utils/url';
import * as http from '@microsoft/teams.common/http';

import pkg from 'src/../package.json';
import type { Endpoints } from './index-types.ts';
import { AddKeyClient } from './addKey';
import { AddPasswordClient } from './addPassword';
import { AppManagementPoliciesClient } from './appManagementPolicies';
import { CheckMemberGroupsClient } from './checkMemberGroups';
import { CheckMemberObjectsClient } from './checkMemberObjects';
import { CreatedOnBehalfOfClient } from './createdOnBehalfOf';
import { ExtensionPropertiesClient } from './extensionProperties';
import { FederatedIdentityCredentialsClient } from './federatedIdentityCredentials';
import { GetAvailableExtensionPropertiesClient } from './getAvailableExtensionProperties';
import { GetByIdsClient } from './getByIds';
import { GetMemberGroupsClient } from './getMemberGroups';
import { GetMemberObjectsClient } from './getMemberObjects';
import { HomeRealmDiscoveryPoliciesClient } from './homeRealmDiscoveryPolicies';
import { LogoClient } from './logo';
import { OwnersClient } from './owners';
import { RemoveKeyClient } from './removeKey';
import { RemovePasswordClient } from './removePassword';
import { RestoreClient } from './restore';
import { SetVerifiedPublisherClient } from './setVerifiedPublisher';
import { SynchronizationClient } from './synchronization';
import { TokenIssuancePoliciesClient } from './tokenIssuancePolicies';
import { TokenLifetimePoliciesClient } from './tokenLifetimePolicies';
import { UnsetVerifiedPublisherClient } from './unsetVerifiedPublisher';
import { ValidatePropertiesClient } from './validateProperties';

/**
 * /applications
 * Provides operations to manage the collection of application entities.
 */
export class ApplicationsClient {
  protected baseUrl = '/applications';
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
   * `/applications/{application-id}/addKey`
   *
   * Provides operations to call the addKey method.
   */
  addKey(applicationId: string) {
    return new AddKeyClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/addPassword`
   *
   * Provides operations to call the addPassword method.
   */
  addPassword(applicationId: string) {
    return new AddPasswordClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/appManagementPolicies`
   *
   * Provides operations to manage the appManagementPolicies property of the microsoft.graph.application entity.
   */
  appManagementPolicies(applicationId: string) {
    return new AppManagementPoliciesClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/checkMemberGroups`
   *
   * Provides operations to call the checkMemberGroups method.
   */
  checkMemberGroups(applicationId: string) {
    return new CheckMemberGroupsClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/checkMemberObjects`
   *
   * Provides operations to call the checkMemberObjects method.
   */
  checkMemberObjects(applicationId: string) {
    return new CheckMemberObjectsClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/createdOnBehalfOf`
   *
   * Provides operations to manage the createdOnBehalfOf property of the microsoft.graph.application entity.
   */
  createdOnBehalfOf(applicationId: string) {
    return new CreatedOnBehalfOfClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/extensionProperties`
   *
   * Provides operations to manage the extensionProperties property of the microsoft.graph.application entity.
   */
  extensionProperties(applicationId: string) {
    return new ExtensionPropertiesClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/federatedIdentityCredentials`
   *
   * Provides operations to manage the federatedIdentityCredentials property of the microsoft.graph.application entity.
   */
  federatedIdentityCredentials(applicationId: string) {
    return new FederatedIdentityCredentialsClient(applicationId, this.http);
  }

  /**
   * `/applications/getAvailableExtensionProperties`
   *
   * Provides operations to call the getAvailableExtensionProperties method.
   */
  get getAvailableExtensionProperties() {
    return new GetAvailableExtensionPropertiesClient(this.http);
  }

  /**
   * `/applications/getByIds`
   *
   * Provides operations to call the getByIds method.
   */
  get getByIds() {
    return new GetByIdsClient(this.http);
  }

  /**
   * `/applications/{application-id}/getMemberGroups`
   *
   * Provides operations to call the getMemberGroups method.
   */
  getMemberGroups(applicationId: string) {
    return new GetMemberGroupsClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/getMemberObjects`
   *
   * Provides operations to call the getMemberObjects method.
   */
  getMemberObjects(applicationId: string) {
    return new GetMemberObjectsClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/homeRealmDiscoveryPolicies`
   *
   * Provides operations to manage the homeRealmDiscoveryPolicies property of the microsoft.graph.application entity.
   */
  homeRealmDiscoveryPolicies(applicationId: string) {
    return new HomeRealmDiscoveryPoliciesClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/logo`
   *
   * Provides operations to manage the media for the application entity.
   */
  logo(applicationId: string) {
    return new LogoClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/owners`
   *
   * Provides operations to manage the owners property of the microsoft.graph.application entity.
   */
  owners(applicationId: string) {
    return new OwnersClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/removeKey`
   *
   * Provides operations to call the removeKey method.
   */
  removeKey(applicationId: string) {
    return new RemoveKeyClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/removePassword`
   *
   * Provides operations to call the removePassword method.
   */
  removePassword(applicationId: string) {
    return new RemovePasswordClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/restore`
   *
   * Provides operations to call the restore method.
   */
  restore(applicationId: string) {
    return new RestoreClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/setVerifiedPublisher`
   *
   * Provides operations to call the setVerifiedPublisher method.
   */
  setVerifiedPublisher(applicationId: string) {
    return new SetVerifiedPublisherClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/synchronization`
   *
   * Provides operations to manage the synchronization property of the microsoft.graph.application entity.
   */
  synchronization(applicationId: string) {
    return new SynchronizationClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/tokenIssuancePolicies`
   *
   * Provides operations to manage the tokenIssuancePolicies property of the microsoft.graph.application entity.
   */
  tokenIssuancePolicies(applicationId: string) {
    return new TokenIssuancePoliciesClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/tokenLifetimePolicies`
   *
   * Provides operations to manage the tokenLifetimePolicies property of the microsoft.graph.application entity.
   */
  tokenLifetimePolicies(applicationId: string) {
    return new TokenLifetimePoliciesClient(applicationId, this.http);
  }

  /**
   * `/applications/{application-id}/unsetVerifiedPublisher`
   *
   * Provides operations to call the unsetVerifiedPublisher method.
   */
  unsetVerifiedPublisher(applicationId: string) {
    return new UnsetVerifiedPublisherClient(applicationId, this.http);
  }

  /**
   * `/applications/validateProperties`
   *
   * Provides operations to call the validateProperties method.
   */
  get validateProperties() {
    return new ValidatePropertiesClient(this.http);
  }

  /**
   * `DELETE /applications/{application-id}`
   *
   * Delete an application object. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.
   */
  async delete(
    params?: Endpoints['DELETE /applications/{application-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}',
      [
        { name: 'If-Match', in: 'header' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .delete(url, config)
      .then((res) => res.data as Endpoints['DELETE /applications/{application-id}']['response']);
  }

  /**
   * `GET /applications`
   *
   * Get the list of applications in this organization.
   */
  async list(params?: Endpoints['GET /applications']['parameters'], config?: http.RequestConfig) {
    const url = getInjectedUrl(
      '/applications',
      [
        { name: 'ConsistencyLevel', in: 'header' },
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
      .then((res) => res.data as Endpoints['GET /applications']['response']);
  }

  /**
   * `GET /applications/{application-id}`
   *
   * Get the properties and relationships of an application object.
   */
  async get(
    params?: Endpoints['GET /applications/{application-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}',
      [
        { name: '$select', in: 'query' },
        { name: '$expand', in: 'query' },
        { name: 'application-id', in: 'path' },
      ],
      {
        ...(params || {}),
      }
    );

    return this.http
      .get(url, config)
      .then((res) => res.data as Endpoints['GET /applications/{application-id}']['response']);
  }

  /**
   * `PATCH /applications/{application-id}`
   *
   * Create a new application object if it doesn&#x27;t exist, or update the properties of an existing application object.
   */
  async update(
    body: Endpoints['PATCH /applications/{application-id}']['body'],
    params?: Endpoints['PATCH /applications/{application-id}']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl(
      '/applications/{application-id}',
      [{ name: 'application-id', in: 'path' }],
      {
        ...(params || {}),
      }
    );

    return this.http
      .patch(url, body, config)
      .then((res) => res.data as Endpoints['PATCH /applications/{application-id}']['response']);
  }

  /**
   * `POST /applications`
   *
   * Create a new application object.
   */
  async create(
    body: Endpoints['POST /applications']['body'],
    params?: Endpoints['POST /applications']['parameters'],
    config?: http.RequestConfig
  ) {
    const url = getInjectedUrl('/applications', [], {
      ...(params || {}),
    });

    return this.http
      .post(url, body, config)
      .then((res) => res.data as Endpoints['POST /applications']['response']);
  }
}
