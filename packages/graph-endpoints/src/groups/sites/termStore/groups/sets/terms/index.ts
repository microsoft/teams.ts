export * as children from './children';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms': Operation<
    '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
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
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms`
 *
 * All the terms under the set.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 * All the terms under the set.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms/{term-id}',
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

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStore/groups/{group-id1}/sets/{set-id}/terms',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
