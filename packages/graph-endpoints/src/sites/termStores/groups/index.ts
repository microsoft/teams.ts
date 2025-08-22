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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
      { name: 'group-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
    params,
    body,
  };
}
