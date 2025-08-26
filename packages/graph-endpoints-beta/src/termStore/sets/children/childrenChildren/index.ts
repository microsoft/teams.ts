export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children',
    'get'
  >;
  'GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/children/{term-id}/children': Operation<
    '/termStore/sets/{set-id}/children/{term-id}/children',
    'post'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/children/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/children/{term-id}/children',
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
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/children/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/children/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/children/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/sets/{set-id}/children/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/children/{term-id}/children',
    paramDefs: [
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}
