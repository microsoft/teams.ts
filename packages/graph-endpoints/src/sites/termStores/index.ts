export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStores/{store-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStores': Operation<'/sites/{site-id}/termStores', 'get'>;
  'GET /sites/{site-id}/termStores/{store-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStores/{store-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStores': Operation<'/sites/{site-id}/termStores', 'post'>;
}

/**
 * `DELETE /sites/{site-id}/termStores/{store-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}']['response']> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStores/{store-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'store-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores`
 *
 * The collection of termStores under this site.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStores']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStores']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}`
 *
 * The collection of termStores under this site.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStores/{store-id}']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}',
    paramDefs: {
      path: ['site-id', 'store-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStores/{store-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}']['response']> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStores/{store-id}',
    paramDefs: {
      path: ['site-id', 'store-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStores`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStores']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStores']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStores']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStores',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}
