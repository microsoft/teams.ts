import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/editions': Operation<
    '/admin/windows/updates/products/{product-id}/editions',
    'get'
  >;
  'GET /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'patch'
  >;
  'POST /admin/windows/updates/products/{product-id}/editions': Operation<
    '/admin/windows/updates/products/{product-id}/editions',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'edition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/editions`
 *
 * Represents an edition of a particular Windows product.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/editions']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/editions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/editions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'product-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/editions/{edition-id}`
 *
 * Represents an edition of a particular Windows product.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'product-id', in: 'path' },
      { name: 'edition-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'edition-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/products/{product-id}/editions`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['body'],
  params?: IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/products/{product-id}/editions',
    paramDefs: [{ name: 'product-id', in: 'path' }],
    params,
    body,
  };
}
