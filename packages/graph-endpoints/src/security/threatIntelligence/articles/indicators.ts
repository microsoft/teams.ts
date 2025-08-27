import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/articles/{article-id}/indicators': Operation<
    '/security/threatIntelligence/articles/{article-id}/indicators',
    'get'
  >;
  'GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}': Operation<
    '/security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/articles/{article-id}/indicators`
 *
 * Get a list of articleIndicator objects that represent indicators of threat or compromise related to the contents of an article.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articles/{article-id}/indicators',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'article-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}`
 *
 * Indicators related to this article.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'article-id', in: 'path' },
      { name: 'articleIndicator-id', in: 'path' },
    ],
    params,
  };
}
