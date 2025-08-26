import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/transitiveReports': Operation<'/me/transitiveReports', 'get'>;
  'GET /me/transitiveReports/{directoryObject-id}': Operation<
    '/me/transitiveReports/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/transitiveReports`
 *
 * The transitive reports for a user. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/transitiveReports']['parameters']
): EndpointRequest<IEndpoints['GET /me/transitiveReports']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/transitiveReports',
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
 * `GET /me/transitiveReports/{directoryObject-id}`
 *
 * The transitive reports for a user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/transitiveReports/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/transitiveReports/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/transitiveReports/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
