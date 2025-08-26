import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    'patch'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
    body,
  };
}
