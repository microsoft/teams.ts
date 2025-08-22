export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups`
 *
 * Collection of all groups available in the term store.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}`
 *
 * Collection of all groups available in the term store.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups/{group-id1}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/groups',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
    params,
    body,
  };
}
