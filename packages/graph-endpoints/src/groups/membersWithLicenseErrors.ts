import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/membersWithLicenseErrors': Operation<
    '/groups/{group-id}/membersWithLicenseErrors',
    'get'
  >;
  'GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}': Operation<
    '/groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/membersWithLicenseErrors`
 *
 * A list of group members with license errors from this group-based license assignment. Read-only.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/membersWithLicenseErrors',
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
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}`
 *
 * A list of group members with license errors from this group-based license assignment. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/membersWithLicenseErrors/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
