import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'delete'>;
  'GET /search/acronyms': Operation<'/search/acronyms', 'get'>;
  'GET /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'get'>;
  'PATCH /search/acronyms/{acronym-id}': Operation<'/search/acronyms/{acronym-id}', 'patch'>;
  'POST /search/acronyms': Operation<'/search/acronyms', 'post'>;
}

/**
 * `DELETE /search/acronyms/{acronym-id}`
 *
 * Delete an acronym object.
 */
export function del(
  params?: IEndpoints['DELETE /search/acronyms/{acronym-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /search/acronyms/{acronym-id}']['response']> {
  return {
    method: 'delete',
    path: '/search/acronyms/{acronym-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'acronym-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /search/acronyms`
 *
 * Get a list of the acronym objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /search/acronyms']['parameters']
): EndpointRequest<IEndpoints['GET /search/acronyms']['response']> {
  return {
    method: 'get',
    path: '/search/acronyms',
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
 * `GET /search/acronyms/{acronym-id}`
 *
 * Read the properties and relationships of an acronym object.
 */
export function get(
  params?: IEndpoints['GET /search/acronyms/{acronym-id}']['parameters']
): EndpointRequest<IEndpoints['GET /search/acronyms/{acronym-id}']['response']> {
  return {
    method: 'get',
    path: '/search/acronyms/{acronym-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'acronym-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /search/acronyms/{acronym-id}`
 *
 * Update the properties of an acronym object.
 */
export function update(
  body: IEndpoints['PATCH /search/acronyms/{acronym-id}']['body'],
  params?: IEndpoints['PATCH /search/acronyms/{acronym-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /search/acronyms/{acronym-id}']['response']> {
  return {
    method: 'patch',
    path: '/search/acronyms/{acronym-id}',
    paramDefs: [{ name: 'acronym-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /search/acronyms`
 *
 * Create a new acronym object.
 */
export function create(
  body: IEndpoints['POST /search/acronyms']['body'],
  params?: IEndpoints['POST /search/acronyms']['parameters']
): EndpointRequest<IEndpoints['POST /search/acronyms']['response']> {
  return {
    method: 'post',
    path: '/search/acronyms',
    paramDefs: [],
    params,
    body,
  };
}
