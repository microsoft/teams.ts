import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    'patch'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
 *
 * Knowledge base article associated with the release when the known issue was first reported.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
    body,
  };
}
