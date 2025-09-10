export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'set-id', 'set-id1'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets`
 *
 * All sets under the group in a term [store].
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id', 'set-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/sets/{set-id}/parentGroup/sets',
    paramDefs: {
      path: ['group-id', 'site-id', 'set-id'],
    },
    params,
    body,
  };
}
