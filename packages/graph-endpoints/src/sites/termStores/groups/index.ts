export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/groups': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups',
    'get'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStores/{store-id}/groups': Operation<
    '/sites/{site-id}/termStores/{store-id}/groups',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'store-id', 'group-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups`
 *
 * Collection of all groups available in the term store.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups',
    paramDefs: {
      path: ['site-id', 'store-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
 *
 * Collection of all groups available in the term store.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/groups/{group-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStores/{store-id}/groups/{group-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'group-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStores/{store-id}/groups`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStores/{store-id}/groups']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStores/{store-id}/groups',
    paramDefs: {
      path: ['site-id', 'store-id'],
    },
    params,
    body,
  };
}
