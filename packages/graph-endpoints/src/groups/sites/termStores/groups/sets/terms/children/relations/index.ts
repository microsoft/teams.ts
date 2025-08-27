export * as fromTerm from './fromTerm';
export * as set from './set';
export * as toTerm from './toTerm';

import type { EndpointRequest, Operation } from './../../../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations',
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
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 * To indicate which terms are related to the current term as either pinned or reused.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations/{relation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
      { name: 'relation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}/sets/{set-id}/terms/{term-id}/children/{term-id1}/relations',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
      { name: 'set-id', in: 'path' },
      { name: 'term-id', in: 'path' },
      { name: 'term-id1', in: 'path' },
    ],
    params,
    body,
  };
}
