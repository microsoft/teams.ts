import type { EndpointRequest, Operation } from './types/common.ts';

export interface IEndpoints {
  'DELETE /subscribedSkus/{subscribedSku-id}': Operation<
    '/subscribedSkus/{subscribedSku-id}',
    'delete'
  >;
  'GET /subscribedSkus': Operation<'/subscribedSkus', 'get'>;
  'GET /subscribedSkus/{subscribedSku-id}': Operation<'/subscribedSkus/{subscribedSku-id}', 'get'>;
  'PATCH /subscribedSkus/{subscribedSku-id}': Operation<
    '/subscribedSkus/{subscribedSku-id}',
    'patch'
  >;
  'POST /subscribedSkus': Operation<'/subscribedSkus', 'post'>;
}

/**
 * `DELETE /subscribedSkus/{subscribedSku-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /subscribedSkus/{subscribedSku-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /subscribedSkus/{subscribedSku-id}']['response']> {
  return {
    method: 'delete',
    path: '/subscribedSkus/{subscribedSku-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'subscribedSku-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /subscribedSkus`
 *
 * Get the list of commercial subscriptions that an organization has acquired. For the mapping of license names as displayed on the Microsoft Entra admin center or the Microsoft 365 admin center against their Microsoft Graph skuId and skuPartNumber properties, see Product names and service plan identifiers for licensing.
 */
export function list(
  params?: IEndpoints['GET /subscribedSkus']['parameters']
): EndpointRequest<IEndpoints['GET /subscribedSkus']['response']> {
  return {
    method: 'get',
    path: '/subscribedSkus',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /subscribedSkus/{subscribedSku-id}`
 *
 * Get a specific commercial subscription that an organization has acquired.
 */
export function get(
  params?: IEndpoints['GET /subscribedSkus/{subscribedSku-id}']['parameters']
): EndpointRequest<IEndpoints['GET /subscribedSkus/{subscribedSku-id}']['response']> {
  return {
    method: 'get',
    path: '/subscribedSkus/{subscribedSku-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: 'subscribedSku-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /subscribedSkus/{subscribedSku-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['body'],
  params?: IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /subscribedSkus/{subscribedSku-id}']['response']> {
  return {
    method: 'patch',
    path: '/subscribedSkus/{subscribedSku-id}',
    paramDefs: [{ name: 'subscribedSku-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /subscribedSkus`
 *
 */
export function create(
  body: IEndpoints['POST /subscribedSkus']['body'],
  params?: IEndpoints['POST /subscribedSkus']['parameters']
): EndpointRequest<IEndpoints['POST /subscribedSkus']['response']> {
  return {
    method: 'post',
    path: '/subscribedSkus',
    paramDefs: [],
    params,
    body,
  };
}
