export * as children from './children';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms',
    'get'
  >;
  'GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets/{set-id}/terms': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}/terms',
    'post'
  >;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms`
 *
 * Read the properties and relationships of a term object.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 * Read the properties and relationships of a term object.
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /termStore/groups/{group-id}/sets/{set-id}/terms']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets/{set-id}/terms',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
