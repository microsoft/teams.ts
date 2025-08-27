export * as editions from './editions';
export * as knownIssues from './knownIssues';
export * as revisions from './revisions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'delete'
  >;
  'GET /admin/windows/updates/products': Operation<'/admin/windows/updates/products', 'get'>;
  'GET /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'patch'
  >;
  'POST /admin/windows/updates/products': Operation<'/admin/windows/updates/products', 'post'>;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products`
 *
 * A collection of Windows products.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/products']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/products']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products',
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
 * `GET /admin/windows/updates/products/{product-id}`
 *
 * A collection of Windows products.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'product-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/products/{product-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: [{ name: 'product-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/products`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/products']['body'],
  params?: IEndpoints['POST /admin/windows/updates/products']['parameters']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/products']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/products',
    paramDefs: [],
    params,
    body,
  };
}
