import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    'patch'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
 *
 * The knowledge base article associated with the product revision.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
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
 * `PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'productRevision-id', in: 'path' },
    ],
    params,
    body,
  };
}
