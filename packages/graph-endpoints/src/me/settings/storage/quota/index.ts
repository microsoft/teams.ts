import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'delete'>;
  'GET /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'get'>;
  'PATCH /me/settings/storage/quota': Operation<'/me/settings/storage/quota', 'patch'>;
  'GET /me/settings/storage/quota/services': Operation<
    '/me/settings/storage/quota/services',
    'get'
  >;
  'POST /me/settings/storage/quota/services': Operation<
    '/me/settings/storage/quota/services',
    'post'
  >;
  'GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
}

/**
 * `DELETE /me/settings/storage/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/settings/storage/quota']['response']> {
  return {
    method: 'delete',
    path: '/me/settings/storage/quota',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/settings/storage/quota`
 *
 */
export function get(
  params?: IEndpoints['GET /me/settings/storage/quota']['parameters']
): EndpointRequest<IEndpoints['GET /me/settings/storage/quota']['response']> {
  return {
    method: 'get',
    path: '/me/settings/storage/quota',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/settings/storage/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/settings/storage/quota']['body']
): EndpointRequest<IEndpoints['PATCH /me/settings/storage/quota']['response']> {
  return {
    method: 'patch',
    path: '/me/settings/storage/quota',
    body,
  };
}

export const services = {
  /**
   * `GET /me/settings/storage/quota/services`
   *
   */
  list: function list(
    params?: IEndpoints['GET /me/settings/storage/quota/services']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/settings/storage/quota/services']['response']> {
    return {
      method: 'get',
      path: '/me/settings/storage/quota/services',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /me/settings/storage/quota/services`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/settings/storage/quota/services']['body']
  ): EndpointRequest<IEndpoints['POST /me/settings/storage/quota/services']['response']> {
    return {
      method: 'post',
      path: '/me/settings/storage/quota/services',
      body,
    };
  },
  /**
   * `GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
    params?: IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/settings/storage/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
};
