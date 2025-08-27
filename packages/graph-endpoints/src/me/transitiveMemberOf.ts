import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/transitiveMemberOf': Operation<'/me/transitiveMemberOf', 'get'>;
  'GET /me/transitiveMemberOf/{directoryObject-id}': Operation<
    '/me/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /me/transitiveMemberOf`
 *
 * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/transitiveMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /me/transitiveMemberOf']['response']> {
  return {
    method: 'get',
    path: '/me/transitiveMemberOf',
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
 * `GET /me/transitiveMemberOf/{directoryObject-id}`
 *
 * The groups, including nested groups, and directory roles that a user is a member of. Nullable.
 */
export function get$1(
  params?: IEndpoints['GET /me/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/transitiveMemberOf/{directoryObject-id}']['response']> {
  return {
    method: 'get',
    path: '/me/transitiveMemberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
