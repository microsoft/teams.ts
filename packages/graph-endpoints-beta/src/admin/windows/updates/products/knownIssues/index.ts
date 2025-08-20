export * as originatingKnowledgeBaseArticle from './originatingKnowledgeBaseArticle';
export * as resolvingKnowledgeBaseArticle from './resolvingKnowledgeBaseArticle';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
    'delete'
  >;
  'GET /admin/windows/updates/products/{product-id}/knownIssues': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues',
    'get'
  >;
  'GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
    'patch'
  >;
  'POST /admin/windows/updates/products/{product-id}/knownIssues': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues',
    'post'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}/knownIssues`
 *
 * Represents a known issue related to a Windows product.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/knownIssues',
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
 * `GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}`
 *
 * Represents a known issue related to a Windows product.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
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
 * `PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}',
    paramDefs: [
      { name: 'product-id', in: 'path' },
      { name: 'knownIssue-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/products/{product-id}/knownIssues`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/products/{product-id}/knownIssues']['body'],
  params?: IEndpoints['POST /admin/windows/updates/products/{product-id}/knownIssues']['parameters']
): EndpointRequest<
  IEndpoints['POST /admin/windows/updates/products/{product-id}/knownIssues']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/products/{product-id}/knownIssues',
    paramDefs: [{ name: 'product-id', in: 'path' }],
    params,
    body,
  };
}
