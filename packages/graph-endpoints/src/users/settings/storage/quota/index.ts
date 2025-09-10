import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'delete'
  >;
  'GET /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'get'
  >;
  'PATCH /users/{user-id}/settings/storage/quota': Operation<
    '/users/{user-id}/settings/storage/quota',
    'patch'
  >;
  'GET /users/{user-id}/settings/storage/quota/services': Operation<
    '/users/{user-id}/settings/storage/quota/services',
    'get'
  >;
  'POST /users/{user-id}/settings/storage/quota/services': Operation<
    '/users/{user-id}/settings/storage/quota/services',
    'post'
  >;
  'GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/settings/storage/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/settings/storage/quota']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/settings/storage/quota`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/settings/storage/quota']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/settings/storage/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/settings/storage/quota']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/settings/storage/quota',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const services = {
  /**
   * `GET /users/{user-id}/settings/storage/quota/services`
   *
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/settings/storage/quota/services']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/settings/storage/quota/services']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/storage/quota/services',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/settings/storage/quota/services`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['body'],
    params?: IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/settings/storage/quota/services']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/settings/storage/quota/services',
      paramDefs: {
        path: ['user-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        path: ['user-id', 'serviceStorageQuotaBreakdown-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
};
