import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /admin/sharepoint': Operation<'/admin/sharepoint', 'delete'>;
  'GET /admin/sharepoint': Operation<'/admin/sharepoint', 'get'>;
  'PATCH /admin/sharepoint': Operation<'/admin/sharepoint', 'patch'>;
  'GET /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'get'>;
  'PATCH /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'patch'>;
  'DELETE /admin/sharepoint/settings': Operation<'/admin/sharepoint/settings', 'delete'>;
}

/**
 * `DELETE /admin/sharepoint`
 *
 */
export function del(
  params?: IEndpoints['DELETE /admin/sharepoint']['parameters']
): EndpointRequest<IEndpoints['DELETE /admin/sharepoint']['response']> {
  return {
    method: 'delete',
    path: '/admin/sharepoint',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /admin/sharepoint`
 *
 */
export function get(
  params?: IEndpoints['GET /admin/sharepoint']['parameters']
): EndpointRequest<IEndpoints['GET /admin/sharepoint']['response']> {
  return {
    method: 'get',
    path: '/admin/sharepoint',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin/sharepoint`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin/sharepoint']['body']
): EndpointRequest<IEndpoints['PATCH /admin/sharepoint']['response']> {
  return {
    method: 'patch',
    path: '/admin/sharepoint',
    body,
  };
}

export const settings = {
  /**
   * `GET /admin/sharepoint/settings`
   *
   * Get the tenant-level settings for SharePoint and OneDrive.
   */
  list: function list(
    params?: IEndpoints['GET /admin/sharepoint/settings']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/sharepoint/settings']['response']> {
    return {
      method: 'get',
      path: '/admin/sharepoint/settings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/sharepoint/settings`
   *
   * Update one or more tenant-level settings for SharePoint and OneDrive.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/sharepoint/settings']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/sharepoint/settings']['response']> {
    return {
      method: 'patch',
      path: '/admin/sharepoint/settings',
      body,
    };
  },
  /**
   * `DELETE /admin/sharepoint/settings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/sharepoint/settings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/sharepoint/settings']['response']> {
    return {
      method: 'delete',
      path: '/admin/sharepoint/settings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
