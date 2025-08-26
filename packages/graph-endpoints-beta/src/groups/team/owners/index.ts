export * as mailboxSettings from './mailboxSettings';
export * as serviceProvisioningErrors from './serviceProvisioningErrors';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/owners': Operation<'/groups/{group-id}/team/owners', 'get'>;
  'GET /groups/{group-id}/team/owners/{user-id}': Operation<
    '/groups/{group-id}/team/owners/{user-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/owners`
 *
 * The list of this team&#x27;s owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user-delegated permissions, no owner can be specified (the current user is the owner). The owner must be specified as an object ID (GUID), not a UPN.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/owners']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/owners']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/owners',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/owners/{user-id}`
 *
 * The list of this team&#x27;s owners. Currently, when creating a team using application permissions, exactly one owner must be specified. When using user-delegated permissions, no owner can be specified (the current user is the owner). The owner must be specified as an object ID (GUID), not a UPN.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/owners/{user-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/owners/{user-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/owners/{user-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}
