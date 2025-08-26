import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /me/people': Operation<'/me/people', 'get'>;
  'GET /me/people/{person-id}': Operation<'/me/people/{person-id}', 'get'>;
}

/**
 * `GET /me/people`
 *
 * Retrieve a list of person objects ordered by their relevance to the user, which is determined by the user&#x27;s communication and collaboration patterns, and business relationships.
 */
export function get(
  params?: IEndpoints['GET /me/people']['parameters']
): EndpointRequest<IEndpoints['GET /me/people']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/people',
    paramDefs: [
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
 * `GET /me/people/{person-id}`
 *
 * Read-only. The most relevant people to the user. The collection is ordered by their relevance to the user, which is determined by the user&#x27;s communication, collaboration, and business relationships. A person aggregates information from mail, contacts, and social networks.
 */
export function get$1(
  params?: IEndpoints['GET /me/people/{person-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/people/{person-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/people/{person-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'person-id', in: 'path' },
    ],
    params,
  };
}
