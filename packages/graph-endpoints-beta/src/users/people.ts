import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/people': Operation<'/users/{user-id}/people', 'get'>;
  'GET /users/{user-id}/people/{person-id}': Operation<
    '/users/{user-id}/people/{person-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/people`
 *
 * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/people']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/people',
    paramDefs: [
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
 * `GET /users/{user-id}/people/{person-id}`
 *
 * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
 */
export function get$1(
  params?: IEndpoints['GET /users/{user-id}/people/{person-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/people/{person-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/people/{person-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'person-id', in: 'path' },
    ],
    params,
  };
}
