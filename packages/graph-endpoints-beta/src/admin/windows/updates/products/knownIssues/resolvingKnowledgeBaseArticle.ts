import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    'patch'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
 *
 * Knowledge base article associated with the release when the known issue was resolved or mitigated.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
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
 * `PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
    body,
  };
}
