export * as addKey from './addKey';
export * as addPassword from './addPassword';
export * as appManagementPolicies from './appManagementPolicies';
export * as checkMemberGroups from './checkMemberGroups';
export * as checkMemberObjects from './checkMemberObjects';
export * as createdOnBehalfOf from './createdOnBehalfOf';
export * as extensionProperties from './extensionProperties';
export * as federatedIdentityCredentials from './federatedIdentityCredentials';
export * as getAvailableExtensionProperties from './getAvailableExtensionProperties';
export * as getByIds from './getByIds';
export * as getMemberGroups from './getMemberGroups';
export * as getMemberObjects from './getMemberObjects';
export * as homeRealmDiscoveryPolicies from './homeRealmDiscoveryPolicies';
export * as logo from './logo';
export * as owners from './owners';
export * as removeKey from './removeKey';
export * as removePassword from './removePassword';
export * as restore from './restore';
export * as setVerifiedPublisher from './setVerifiedPublisher';
export * as synchronization from './synchronization';
export * as tokenIssuancePolicies from './tokenIssuancePolicies';
export * as tokenLifetimePolicies from './tokenLifetimePolicies';
export * as unsetVerifiedPublisher from './unsetVerifiedPublisher';
export * as validateProperties from './validateProperties';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /applications/{application-id}': Operation<'/applications/{application-id}', 'delete'>;
  'GET /applications': Operation<'/applications', 'get'>;
  'GET /applications/{application-id}': Operation<'/applications/{application-id}', 'get'>;
  'PATCH /applications/{application-id}': Operation<'/applications/{application-id}', 'patch'>;
  'POST /applications': Operation<'/applications', 'post'>;
}

/**
 * `DELETE /applications/{application-id}`
 *
 * Delete an application object. When deleted, apps are moved to a temporary container and can be restored within 30 days. After that time, they are permanently deleted.
 */
export function del(
  params?: IEndpoints['DELETE /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /applications/{application-id}']['response']> {
  return {
    method: 'delete',
    path: '/applications/{application-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /applications`
 *
 * Get the list of applications in this organization.
 */
export function list(
  params?: IEndpoints['GET /applications']['parameters']
): EndpointRequest<IEndpoints['GET /applications']['response']> {
  return {
    method: 'get',
    path: '/applications',
    paramDefs: [
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
    params,
  };
}

/**
 * `GET /applications/{application-id}`
 *
 * Get the properties and relationships of an application object.
 */
export function get(
  params?: IEndpoints['GET /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['GET /applications/{application-id}']['response']> {
  return {
    method: 'get',
    path: '/applications/{application-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'application-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /applications/{application-id}`
 *
 * Create a new application object if it doesn&#x27;t exist, or update the properties of an existing application object.
 */
export function update(
  body: IEndpoints['PATCH /applications/{application-id}']['body'],
  params?: IEndpoints['PATCH /applications/{application-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /applications/{application-id}']['response']> {
  return {
    method: 'patch',
    path: '/applications/{application-id}',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /applications`
 *
 * Create a new application object.
 */
export function create(
  body: IEndpoints['POST /applications']['body'],
  params?: IEndpoints['POST /applications']['parameters']
): EndpointRequest<IEndpoints['POST /applications']['response']> {
  return {
    method: 'post',
    path: '/applications',
    paramDefs: [],
    params,
    body,
  };
}
