export * as childrenChildren from './childrenChildren';
export * as relations from './relations';
export * as set from './set';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children`
 *
 * Children terms of set in term [store].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
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
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 * Children terms of set in term [store].
 */
export function get$1(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children/{term-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/children',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
