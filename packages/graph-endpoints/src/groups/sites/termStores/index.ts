export * as groups from './groups';
export * as sets from './sets';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/termStores': Operation<
    '/groups/{group-id}/sites/{site-id}/termStores',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores`
 *
 * The collection of termStores under this site.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores',
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
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}`
 *
 * The collection of termStores under this site.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    paramDefs: [
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
 * `PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/termStores/{store-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/termStores/{store-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/termStores`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/sites/{site-id}/termStores']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/termStores',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'site-id', in: 'path' },
    ],
    params,
    body,
  };
}
