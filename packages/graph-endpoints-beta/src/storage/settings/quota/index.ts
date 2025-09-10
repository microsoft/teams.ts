import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/settings/quota': Operation<'/storage/settings/quota', 'delete'>;
  'GET /storage/settings/quota': Operation<'/storage/settings/quota', 'get'>;
  'PATCH /storage/settings/quota': Operation<'/storage/settings/quota', 'patch'>;
  'GET /storage/settings/quota/services': Operation<'/storage/settings/quota/services', 'get'>;
  'POST /storage/settings/quota/services': Operation<'/storage/settings/quota/services', 'post'>;
  'GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'get'
  >;
  'PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'patch'
  >;
  'DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}': Operation<
    '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
    'delete'
  >;
}

/**
 * `DELETE /storage/settings/quota`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/settings/quota']['parameters']
): EndpointRequest<IEndpoints['DELETE /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/settings/quota',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /storage/settings/quota`
 *
 */
export function get(
  params?: IEndpoints['GET /storage/settings/quota']['parameters']
): EndpointRequest<IEndpoints['GET /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/settings/quota',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/settings/quota`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/settings/quota']['body']
): EndpointRequest<IEndpoints['PATCH /storage/settings/quota']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/settings/quota',
    body,
  };
}

export const services = {
  /**
   * `GET /storage/settings/quota/services`
   *
   * The breakdown of services contributing to the user&#x27;s quota usage.
   */
  list: function list(
    params?: IEndpoints['GET /storage/settings/quota/services']['parameters']
  ): EndpointRequest<IEndpoints['GET /storage/settings/quota/services']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/settings/quota/services',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /storage/settings/quota/services`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/settings/quota/services']['body']
  ): EndpointRequest<IEndpoints['POST /storage/settings/quota/services']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/settings/quota/services',
      body,
    };
  },
  /**
   * `GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   * The breakdown of services contributing to the user&#x27;s quota usage.
   */
  get: function get(
    params?: IEndpoints['GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['body'],
    params?: IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/storage/settings/quota/services/{serviceStorageQuotaBreakdown-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['serviceStorageQuotaBreakdown-id'],
      },
      params,
    };
  },
};
