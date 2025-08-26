export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /employeeExperience/communities/{community-id}/owners': Operation<
    '/employeeExperience/communities/{community-id}/owners',
    'get'
  >;
  'GET /employeeExperience/communities/{community-id}/owners/{user-id}': Operation<
    '/employeeExperience/communities/{community-id}/owners/{user-id}',
    'get'
  >;
}

/**
 * `GET /employeeExperience/communities/{community-id}/owners`
 *
 * The admins of the community. Limited to 100 users. If this property isn&#x27;t specified when you create the community, the calling user is automatically assigned as the community owner.
 */
export function list(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/owners']['response']
> {
  return {
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/owners',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'community-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /employeeExperience/communities/{community-id}/owners/{user-id}`
 *
 * The admins of the community. Limited to 100 users. If this property isn&#x27;t specified when you create the community, the calling user is automatically assigned as the community owner.
 */
export function get(
  params?: IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /employeeExperience/communities/{community-id}/owners/{user-id}']['response']
> {
  return {
    method: 'get',
    path: '/employeeExperience/communities/{community-id}/owners/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'community-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
