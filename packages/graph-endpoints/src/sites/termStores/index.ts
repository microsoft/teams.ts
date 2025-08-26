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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
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
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: 'site-id', in: 'path' },
      { name: 'store-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'site-id', in: 'path' }],
    params,
    body,
  };
}
