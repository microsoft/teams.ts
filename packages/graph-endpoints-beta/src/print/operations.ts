import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'delete'
  >;
  'GET /print/operations': Operation<'/print/operations', 'get'>;
  'GET /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'get'
  >;
  'PATCH /print/operations/{printOperation-id}': Operation<
    '/print/operations/{printOperation-id}',
    'patch'
  >;
  'POST /print/operations': Operation<'/print/operations', 'post'>;
}

/**
 * `DELETE /print/operations/{printOperation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /print/operations/{printOperation-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /print/operations/{printOperation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/print/operations/{printOperation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'printOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /print/operations`
 *
 * Retrieve the properties and relationships of a printOperation object.
 */
export function list(
  params?: IEndpoints['GET /print/operations']['parameters']
): EndpointRequest<IEndpoints['GET /print/operations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/operations',
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
 * `GET /print/operations/{printOperation-id}`
 *
 * Retrieve the properties and relationships of a printOperation object.
 */
export function get(
  params?: IEndpoints['GET /print/operations/{printOperation-id}']['parameters']
): EndpointRequest<IEndpoints['GET /print/operations/{printOperation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/print/operations/{printOperation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'printOperation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /print/operations/{printOperation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /print/operations/{printOperation-id}']['body'],
  params?: IEndpoints['PATCH /print/operations/{printOperation-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /print/operations/{printOperation-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/print/operations/{printOperation-id}',
    paramDefs: [{ name: 'printOperation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /print/operations`
 *
 */
export function create(
  body: IEndpoints['POST /print/operations']['body'],
  params?: IEndpoints['POST /print/operations']['parameters']
): EndpointRequest<IEndpoints['POST /print/operations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/print/operations',
    paramDefs: [],
    params,
    body,
  };
}
