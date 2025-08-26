export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children`
 *
 * Children of current term.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children',
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
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 * Children of current term.
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}
