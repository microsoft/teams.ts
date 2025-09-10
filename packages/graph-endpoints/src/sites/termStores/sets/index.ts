export * as children from './children';
export * as parentGroup from './parentGroup';
export * as relations from './relations';
export * as terms from './terms';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    'delete'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/sets': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets',
    'get'
  >;
  'GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    'patch'
  >;
  'POST /sites/{site-id}/termStores/{store-id}/sets': Operation<
    '/sites/{site-id}/termStores/{store-id}/sets',
    'post'
  >;
}

/**
 * `DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['response']
> {
  return {
    method: 'delete',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'store-id', 'set-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/sets`
 *
 * Collection of all sets available in the term store. This relationship can only be used to load a specific term set.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets']['response']> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/sets',
    paramDefs: {
      path: ['site-id', 'store-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}`
 *
 * Collection of all sets available in the term store. This relationship can only be used to load a specific term set.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['response']
> {
  return {
    method: 'get',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'set-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/termStores/{store-id}/sets/{set-id}']['response']
> {
  return {
    method: 'patch',
    path: '/sites/{site-id}/termStores/{store-id}/sets/{set-id}',
    paramDefs: {
      path: ['site-id', 'store-id', 'set-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/termStores/{store-id}/sets`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/sets']['body'],
  params?: IEndpoints['POST /sites/{site-id}/termStores/{store-id}/sets']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/termStores/{store-id}/sets']['response']> {
  return {
    method: 'post',
    path: '/sites/{site-id}/termStores/{store-id}/sets',
    paramDefs: {
      path: ['site-id', 'store-id'],
    },
    params,
    body,
  };
}
