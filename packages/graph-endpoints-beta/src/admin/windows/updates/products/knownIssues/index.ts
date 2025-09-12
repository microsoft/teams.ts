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
  'GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
    'patch'
  >;
  'DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
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
  'DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['product-id', 'knownIssue-id'],
    },
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
    paramDefs: {
      path: ['product-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['product-id', 'knownIssue-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['product-id', 'knownIssue-id'],
    },
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
    paramDefs: {
      path: ['product-id'],
    },
    params,
    body,
  };
}

export const originatingKnowledgeBaseArticle = {
  /**
   * `GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
   *
   * Knowledge base article associated with the release when the known issue was first reported.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['product-id', 'knownIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
      paramDefs: {
        path: ['product-id', 'knownIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/originatingKnowledgeBaseArticle',
      paramDefs: {
        header: ['If-Match'],
        path: ['product-id', 'knownIssue-id'],
      },
      params,
    };
  },
};

export const resolvingKnowledgeBaseArticle = {
  /**
   * `GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
   *
   * Knowledge base article associated with the release when the known issue was resolved or mitigated.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['product-id', 'knownIssue-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
      paramDefs: {
        path: ['product-id', 'knownIssue-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/products/{product-id}/knownIssues/{knownIssue-id}/resolvingKnowledgeBaseArticle',
      paramDefs: {
        header: ['If-Match'],
        path: ['product-id', 'knownIssue-id'],
      },
      params,
    };
  },
};
