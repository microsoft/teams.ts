export * as indicators from './indicators';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/articles/{article-id}': Operation<
    '/security/threatIntelligence/articles/{article-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/articles': Operation<
    '/security/threatIntelligence/articles',
    'get'
  >;
  'GET /security/threatIntelligence/articles/{article-id}': Operation<
    '/security/threatIntelligence/articles/{article-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/articles/{article-id}': Operation<
    '/security/threatIntelligence/articles/{article-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/articles': Operation<
    '/security/threatIntelligence/articles',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/articles/{article-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/articles/{article-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/articles/{article-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/articles/{article-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'article-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/articles`
 *
 * Get a list of article objects, including their properties and relationships.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/articles']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/articles']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articles',
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
 * `GET /security/threatIntelligence/articles/{article-id}`
 *
 * Read the properties and relationships of an article object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/articles/{article-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articles/{article-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articles/{article-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'article-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/articles/{article-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/articles/{article-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/articles/{article-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/articles/{article-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/articles/{article-id}',
    paramDefs: [{ name: 'article-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/articles`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/articles']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/articles']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/articles']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/articles',
    paramDefs: [],
    params,
    body,
  };
}
