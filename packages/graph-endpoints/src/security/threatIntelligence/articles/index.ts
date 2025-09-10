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
    paramDefs: {
      header: ['If-Match'],
      path: ['article-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['article-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['article-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/articles`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/articles']['body']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/articles']['response']> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/articles',
    body,
  };
}

export const indicators = {
  /**
   * `GET /security/threatIntelligence/articles/{article-id}/indicators`
   *
   * Get a list of articleIndicator objects that represent indicators of threat or compromise related to the contents of an article.
   */
  list: function list(
    params?: IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/articles/{article-id}/indicators',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['article-id'],
      },
      params,
    };
  },
  /**
   * `GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}`
   *
   * Indicators related to this article.
   */
  get: function get(
    params?: IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}']['response']
  > {
    return {
      method: 'get',
      path: '/security/threatIntelligence/articles/{article-id}/indicators/{articleIndicator-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['article-id', 'articleIndicator-id'],
      },
      params,
    };
  },
};
