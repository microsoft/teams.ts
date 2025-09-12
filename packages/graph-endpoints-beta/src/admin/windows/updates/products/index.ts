export * as knownIssues from './knownIssues';
export * as revisions from './revisions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'delete'
  >;
  'GET /admin/windows/updates/products': Operation<'/admin/windows/updates/products', 'get'>;
  'GET /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}': Operation<
    '/admin/windows/updates/products/{product-id}',
    'patch'
  >;
  'POST /admin/windows/updates/products': Operation<'/admin/windows/updates/products', 'post'>;
  'GET /admin/windows/updates/products/{product-id}/editions': Operation<
    '/admin/windows/updates/products/{product-id}/editions',
    'get'
  >;
  'POST /admin/windows/updates/products/{product-id}/editions': Operation<
    '/admin/windows/updates/products/{product-id}/editions',
    'post'
  >;
  'GET /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'get'
  >;
  'PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'patch'
  >;
  'DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}': Operation<
    '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
    'delete'
  >;
}

/**
 * `DELETE /admin/windows/updates/products/{product-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['product-id'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/products`
 *
 * A collection of Windows products.
 */
export function list(
  params?: IEndpoints['GET /admin/windows/updates/products']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/products']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /admin/windows/updates/products/{product-id}`
 *
 * A collection of Windows products.
 */
export function get(
  params?: IEndpoints['GET /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['GET /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: {
      path: ['product-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/windows/updates/products/{product-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['body'],
  params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /admin/windows/updates/products/{product-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/admin/windows/updates/products/{product-id}',
    paramDefs: {
      path: ['product-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /admin/windows/updates/products`
 *
 */
export function create(
  body: IEndpoints['POST /admin/windows/updates/products']['body']
): EndpointRequest<IEndpoints['POST /admin/windows/updates/products']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/admin/windows/updates/products',
    body,
  };
}

export const editions = {
  /**
   * `GET /admin/windows/updates/products/{product-id}/editions`
   *
   * Represents an edition of a particular Windows product.
   */
  list: function list(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/editions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/editions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/editions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['product-id'],
      },
      params,
    };
  },
  /**
   * `POST /admin/windows/updates/products/{product-id}/editions`
   *
   */
  create: function create(
    body: IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['body'],
    params?: IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /admin/windows/updates/products/{product-id}/editions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/admin/windows/updates/products/{product-id}/editions',
      paramDefs: {
        path: ['product-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /admin/windows/updates/products/{product-id}/editions/{edition-id}`
   *
   * Represents an edition of a particular Windows product.
   */
  get: function get(
    params?: IEndpoints['GET /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['product-id', 'edition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['body'],
    params?: IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
      paramDefs: {
        path: ['product-id', 'edition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /admin/windows/updates/products/{product-id}/editions/{edition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/admin/windows/updates/products/{product-id}/editions/{edition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['product-id', 'edition-id'],
      },
      params,
    };
  },
};
