export * as children from './children';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets`
 *
 * All sets under the group in a term [store].
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
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
      { name: 'set-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 * All sets under the group in a term [store].
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets/{set-id1}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'set-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup/sets',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'set-id', in: 'path' },
    ],
    params,
    body,
  };
}
