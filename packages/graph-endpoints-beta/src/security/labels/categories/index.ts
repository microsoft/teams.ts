import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'delete'
  >;
  'GET /security/labels/categories': Operation<'/security/labels/categories', 'get'>;
  'GET /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/categories/{categoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}',
    'patch'
  >;
  'POST /security/labels/categories': Operation<'/security/labels/categories', 'post'>;
  'GET /security/labels/categories/{categoryTemplate-id}/subcategories': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories',
    'get'
  >;
  'POST /security/labels/categories/{categoryTemplate-id}/subcategories': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories',
    'post'
  >;
  'GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'get'
  >;
  'PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'patch'
  >;
  'DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}': Operation<
    '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
    'delete'
  >;
}

/**
 * `DELETE /security/labels/categories/{categoryTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['categoryTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /security/labels/categories`
 *
 * Get a list of the categoryTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/labels/categories']['parameters']
): EndpointRequest<IEndpoints['GET /security/labels/categories']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/categories',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /security/labels/categories/{categoryTemplate-id}`
 *
 * Read the properties and relationships of a categoryTemplate object.
 */
export function get(
  params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: {
      path: ['categoryTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /security/labels/categories/{categoryTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['body'],
  params?: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/labels/categories/{categoryTemplate-id}',
    paramDefs: {
      path: ['categoryTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /security/labels/categories`
 *
 * Create a new categoryTemplate object.
 */
export function create(
  body: IEndpoints['POST /security/labels/categories']['body']
): EndpointRequest<IEndpoints['POST /security/labels/categories']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/labels/categories',
    body,
  };
}

export const subcategories = {
  /**
   * `GET /security/labels/categories/{categoryTemplate-id}/subcategories`
   *
   * Get a list of subcategoryTemplate objects associated with a category template.
   */
  list: function list(
    params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/categories/{categoryTemplate-id}/subcategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['categoryTemplate-id'],
      },
      params,
    };
  },
  /**
   * `POST /security/labels/categories/{categoryTemplate-id}/subcategories`
   *
   * Create a new subcategoryTemplate object.
   */
  create: function create(
    body: IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['body'],
    params?: IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /security/labels/categories/{categoryTemplate-id}/subcategories']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/security/labels/categories/{categoryTemplate-id}/subcategories',
      paramDefs: {
        path: ['categoryTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
   *
   * Read the properties and relationships of a subcategoryTemplate object.
   */
  get: function get(
    params?: IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['categoryTemplate-id', 'subcategoryTemplate-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['body'],
    params?: IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
      paramDefs: {
        path: ['categoryTemplate-id', 'subcategoryTemplate-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/security/labels/categories/{categoryTemplate-id}/subcategories/{subcategoryTemplate-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['categoryTemplate-id', 'subcategoryTemplate-id'],
      },
      params,
    };
  },
};
