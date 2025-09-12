export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'store-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 * The parent [group] that contains the set.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['group-id', 'site-id', 'store-id', 'set-id'],
    },
    params,
    body,
  };
}
