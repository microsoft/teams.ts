export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'delete'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets',
    'get'
  >;
  'GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'get'
  >;
  'PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'patch'
  >;
  'POST /termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/termStore/sets/{set-id}/parentGroup/sets',
    'post'
  >;
}

/**
 * `DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['set-id', 'set-id1'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets`
 *
 * All sets under the group in a term [store].
 */
export function list(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets',
    paramDefs: {
      path: ['set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      path: ['set-id', 'set-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['body'],
  params?: IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      path: ['set-id', 'set-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /termStore/sets/{set-id}/parentGroup/sets`
 *
 */
export function create(
  body: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets']['body'],
  params?: IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<IEndpoints['POST /termStore/sets/{set-id}/parentGroup/sets']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/termStore/sets/{set-id}/parentGroup/sets',
    paramDefs: {
      path: ['set-id'],
    },
    params,
    body,
  };
}
