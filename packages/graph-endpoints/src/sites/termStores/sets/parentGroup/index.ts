export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'delete'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'get'
  >;
  'PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    'patch'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'store-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 * The parent [group] that contains the set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['site-id', 'store-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}/parentGroup',
    paramDefs: {
      path: ['site-id', 'store-id', 'set-id'],
    },
    params,
    body,
  };
}
