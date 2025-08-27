import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/memberOf': Operation<'/me/memberOf', 'get'>;
  'GET /me/memberOf/{directoryObject-id}': Operation<'/me/memberOf/{directoryObject-id}', 'get'>;
}

/**
 * `GET /me/memberOf`
 *
 * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /me/memberOf']['parameters']
): EndpointRequest<IEndpoints['GET /me/memberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/memberOf',
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
 * `GET /me/memberOf/{directoryObject-id}`
 *
 * The groups, directory roles, and administrative units that the user is a member of. Read-only. Nullable. Supports $expand.
 */
export function get$1(
  params?: IEndpoints['GET /me/memberOf/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/memberOf/{directoryObject-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/memberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
