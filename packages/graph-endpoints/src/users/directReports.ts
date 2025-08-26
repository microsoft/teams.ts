import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/directReports': Operation<'/users/{user-id}/directReports', 'get'>;
  'GET /users/{user-id}/directReports/{directoryObject-id}': Operation<
    '/users/{user-id}/directReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/directReports`
 *
 * The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/directReports']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/directReports']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/directReports',
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
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/directReports/{directoryObject-id}`
 *
 * The users and contacts that report to the user. (The users and contacts that have their manager property set to this user.) Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/directReports/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/directReports/{directoryObject-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/directReports/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
