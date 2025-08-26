export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'delete'
  >;
  'GET /termStore/groups/{group-id}/sets': Operation<'/termStore/groups/{group-id}/sets', 'get'>;
  'GET /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'get'
  >;
  'PATCH /termStore/groups/{group-id}/sets/{set-id}': Operation<
    '/termStore/groups/{group-id}/sets/{set-id}',
    'patch'
  >;
  'POST /termStore/groups/{group-id}/sets': Operation<'/termStore/groups/{group-id}/sets', 'post'>;
}

/**
 * `DELETE /termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets`
 *
 * Get a list of the set objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets',
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
    ],
    params,
  };
}

/**
 * `GET /termStore/groups/{group-id}/sets/{set-id}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /termStore/groups/{group-id}/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /termStore/groups/{group-id}/sets/{set-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/groups/{group-id}/sets/{set-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /termStore/groups/{group-id}/sets`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/groups/{group-id}/sets']['body'],
  params?: IEndpoints['POST /termStore/groups/{group-id}/sets']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/groups/{group-id}/sets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/groups/{group-id}/sets',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
