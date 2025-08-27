import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/directReports': Operation<'/me/directReports', 'get'>;
  'GET /me/directReports/{directoryObject-id}': Operation<
    '/me/directReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/directReports`
 *
 * Get a user&#x27;s direct reports. Returns the users and contacts for whom this user is assigned as manager. This API doesn&#x27;t support getting the direct report chain beyond the specified user&#x27;s direct reports.
 */
export function list(
  params?: IEndpoints['GET /me/directReports']['parameters']
): EndpointRequest<IEndpoints['GET /me/directReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/directReports',
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
 * `GET /me/directReports/{directoryObject-id}`
 *
 * The users and contacts that report to the user. (The users and contacts with their manager property set to this user.) Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /me/directReports/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/directReports/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/directReports/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
