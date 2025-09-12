import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/outlook': Operation<'/me/outlook', 'get'>;
  'GET /me/outlook/masterCategories': Operation<'/me/outlook/masterCategories', 'get'>;
  'POST /me/outlook/masterCategories': Operation<'/me/outlook/masterCategories', 'post'>;
  'GET /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'get'
  >;
  'PATCH /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'patch'
  >;
  'DELETE /me/outlook/masterCategories/{outlookCategory-id}': Operation<
    '/me/outlook/masterCategories/{outlookCategory-id}',
    'delete'
  >;
}

/**
 * `GET /me/outlook`
 *
 */
export function get(
  params?: IEndpoints['GET /me/outlook']['parameters']
): EndpointRequest<IEndpoints['GET /me/outlook']['response']> {
  return {
    method: 'get',
    path: '/me/outlook',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const masterCategories = {
  /**
   * `GET /me/outlook/masterCategories`
   *
   * Get all the categories that have been defined for a user.
   */
  list: function list(
    params?: IEndpoints['GET /me/outlook/masterCategories']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/outlook/masterCategories']['response']> {
    return {
      method: 'get',
      path: '/me/outlook/masterCategories',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/outlook/masterCategories`
   *
   * Create an outlookCategory object in the user&#x27;s master list of categories.
   */
  create: function create(
    body: IEndpoints['POST /me/outlook/masterCategories']['body']
  ): EndpointRequest<IEndpoints['POST /me/outlook/masterCategories']['response']> {
    return {
      method: 'post',
      path: '/me/outlook/masterCategories',
      body,
    };
  },
  /**
   * `GET /me/outlook/masterCategories/{outlookCategory-id}`
   *
   * Get the properties and relationships of the specified outlookCategory object.
   */
  get: function get(
    params?: IEndpoints['GET /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['outlookCategory-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/outlook/masterCategories/{outlookCategory-id}`
   *
   * Update the writable property, color, of the specified outlookCategory object. You can&#x27;t modify the displayName property once you have created the category.
   */
  update: function update(
    body: IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['body'],
    params?: IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        path: ['outlookCategory-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/outlook/masterCategories/{outlookCategory-id}`
   *
   * Delete the specified outlookCategory object.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/outlook/masterCategories/{outlookCategory-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/outlook/masterCategories/{outlookCategory-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/outlook/masterCategories/{outlookCategory-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['outlookCategory-id'],
      },
      params,
    };
  },
};
