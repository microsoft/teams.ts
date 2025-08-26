export * as endpoints from './endpoints';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /print/services/{printService-id}': Operation<
    '/print/services/{printService-id}',
    'delete'
  >;
  'GET /print/services': Operation<'/print/services', 'get'>;
  'GET /print/services/{printService-id}': Operation<'/print/services/{printService-id}', 'get'>;
  'PATCH /print/services/{printService-id}': Operation<
    '/print/services/{printService-id}',
    'patch'
  >;
  'POST /print/services': Operation<'/print/services', 'post'>;
}

/**
 * `DELETE /print/services/{printService-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/services/{printService-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/services/{printService-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/services`
 *
 * Retrieve a list of printService objects that represent the services available to your tenant.
 */
export function list(
  params?: IEndpoints['GET /print/services']['parameters']
): EndpointRequest<IEndpoints['GET /print/services']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/services',
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
 * `GET /print/services/{printService-id}`
 *
 * Retrieve the properties and relationships of a print service.
 */
export function get(
  params?: IEndpoints['GET /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/services/{printService-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/services/{printService-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printService-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/services/{printService-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/services/{printService-id}']['body'],
  params?: IEndpoints['PATCH /print/services/{printService-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/services/{printService-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/services/{printService-id}',
    paramDefs: [{ name: 'printService-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/services`
 *
 */
export function create(
  body: IEndpoints['POST /print/services']['body'],
  params?: IEndpoints['POST /print/services']['parameters']
): EndpointRequest<IEndpoints['POST /print/services']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/services',
    paramDefs: [],
    params,
    body,
  };
}
