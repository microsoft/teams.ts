import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/drives': Operation<'/groups/{group-id}/drives', 'get'>;
  'GET /groups/{group-id}/drives/{drive-id}': Operation<
    '/groups/{group-id}/drives/{drive-id}',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/drives`
 *
 * The group&#x27;s drives. Read-only.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/drives']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/drives']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/drives',
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
 * `GET /groups/{group-id}/drives/{drive-id}`
 *
 * The group&#x27;s drives. Read-only.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/drives/{drive-id}']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/drives/{drive-id}']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/drives/{drive-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'drive-id', in: 'path' },
    ],
    params,
  };
}
