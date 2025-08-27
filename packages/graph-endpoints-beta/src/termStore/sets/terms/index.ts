export * as children from './children';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/terms': Operation<'/termStore/sets/{set-id}/terms', 'get'>;
  'GET /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/terms': Operation<'/termStore/sets/{set-id}/terms', 'post'>;
}

/**
 * `DELETE /termStore/sets/{set-id}/terms/{term-id}`
 *
 * Delete a term object.
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/terms/{term-id}`
 *
 * Update the properties of a term object.
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/sets/{set-id}/terms/{term-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/terms',
    paramDefs: [{ name: 'set-id', in: 'path' }],
    params,
    body,
  };
}
