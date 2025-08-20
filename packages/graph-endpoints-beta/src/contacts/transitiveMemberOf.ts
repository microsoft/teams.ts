import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /contacts/{orgContact-id}/transitiveMemberOf': Operation<
    '/contacts/{orgContact-id}/transitiveMemberOf',
    'get'
  >;
  'GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}': Operation<
    '/contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}',
    'get'
  >;
}

/**
 * `GET /contacts/{orgContact-id}/transitiveMemberOf`
 *
 * Get groups that this organizational contact is a member of. The API request is transitive, and returns all groups the organizational contact is a nested member of.
 */
export function get(
  params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf']['parameters']
): EndpointRequest<IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/contacts/{orgContact-id}/transitiveMemberOf',
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
      { name: 'orgContact-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}`
 *
 */
export function get$1(
  params?: IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/contacts/{orgContact-id}/transitiveMemberOf/{directoryObject-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'orgContact-id', in: 'path' },
      { name: 'directoryObject-id', in: 'path' },
    ],
    params,
  };
}
