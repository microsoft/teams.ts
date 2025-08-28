import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/transitiveReports': Operation<'/users/{user-id}/transitiveReports', 'get'>;
  'GET /users/{user-id}/transitiveReports/{directoryObject-id}': Operation<
    '/users/{user-id}/transitiveReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/transitiveReports`
 *
 * Retrieve a count of transitive reports for a user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/transitiveReports']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/transitiveReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/transitiveReports',
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
 * `GET /users/{user-id}/transitiveReports/{directoryObject-id}`
 *
 * The transitive reports for a user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/transitiveReports/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/transitiveReports/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/transitiveReports/{directoryObject-id}',
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
