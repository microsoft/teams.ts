import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles',
    'get'
  >;
  'GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}': Operation<
    '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles`
 *
 * Articles related to this vulnerability.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vulnerability-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}`
 *
 * Articles related to this vulnerability.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/vulnerabilities/{vulnerability-id}/articles/{article-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'vulnerability-id', in: 'path' },
      { name: 'article-id', in: 'path' },
    ],
    params,
  };
}
