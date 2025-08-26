export * as catalogEntry from './catalogEntry';
export * as knowledgeBaseArticle from './knowledgeBaseArticle';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/revisions': Operation<
    '/admin/windows/updates/products/{product-id}/revisions',
    'get'
  >;
  'GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
    'patch'
  >;
  'POST /admin/windows/updates/products/{product-id}/revisions': Operation<
    '/admin/windows/updates/products/{product-id}/revisions',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/revisions`
 *
 * Represents a product revision.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/revisions',
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
 * `GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}`
 *
 * Represents a product revision.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
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
 * `PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/products/{product-id}/revisions`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/products/{product-id}/revisions']['body'],
  params?: IEndpoints['POST /admin/windows/updates/products/{product-id}/revisions']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/products/{product-id}/revisions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/products/{product-id}/revisions',
    paramDefs: [{ name: 'product-id', in: 'path' }],
    params,
    body,
  };
}
