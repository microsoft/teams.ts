import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/outlook': Operation<'/users/{user-id}/outlook', 'get'>;
  'GET /users/{user-id}/outlook/masterCategories': Operation<
    '/users/{user-id}/outlook/masterCategories',
    'get'
  >;
  'POST /users/{user-id}/outlook/masterCategories': Operation<
    '/users/{user-id}/outlook/masterCategories',
    'post'
  >;
  'GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'get'
  >;
  'PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
    'delete'
  >;
}

/**
 * `GET /users/{user-id}/outlook`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/outlook',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const masterCategories = {
  /**
   * `GET /users/{user-id}/outlook/masterCategories`
   *
   * A list of categories defined for the user.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/outlook/masterCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/outlook/masterCategories']['response']> {
    return {
      method: 'get',
      path: '/users/{user-id}/outlook/masterCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/outlook/masterCategories`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/outlook/masterCategories']['body'],
    params?: IEndpoints['POST /users/{user-id}/outlook/masterCategories']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/outlook/masterCategories']['response']> {
    return {
      method: 'post',
      path: '/users/{user-id}/outlook/masterCategories',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
   *
   * A list of categories defined for the user.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'outlookCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        path: ['user-id', 'outlookCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'outlookCategory-id'],
      },
      params,
    };
  },
};
