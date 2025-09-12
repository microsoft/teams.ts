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
  'GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
    'patch'
  >;
  'DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
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
  'DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle': Operation<
    '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['product-id', 'productRevision-id'],
    },
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
    paramDefs: {
      path: ['product-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['product-id', 'productRevision-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['product-id', 'productRevision-id'],
    },
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
    paramDefs: {
      path: ['product-id'],
    },
    params,
    body,
  };
}

export const catalogEntry = {
  /**
   * `GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
   *
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['product-id', 'productRevision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
      paramDefs: {
        path: ['product-id', 'productRevision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/catalogEntry',
      paramDefs: {
        header: ['If-Match'],
        path: ['product-id', 'productRevision-id'],
      },
      params,
    };
  },
};

export const knowledgeBaseArticle = {
  /**
   * `GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
   *
   * The knowledge base article associated with the product revision.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['product-id', 'productRevision-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
      paramDefs: {
        path: ['product-id', 'productRevision-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/products/{product-id}/revisions/{productRevision-id}/knowledgeBaseArticle',
      paramDefs: {
        header: ['If-Match'],
        path: ['product-id', 'productRevision-id'],
      },
      params,
    };
  },
};
