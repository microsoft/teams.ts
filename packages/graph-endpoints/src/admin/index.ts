export * as edge from './edge';
export * as microsoft365Apps from './microsoft365Apps';
export * as people from './people';
export * as serviceAnnouncement from './serviceAnnouncement';
export * as sharepoint from './sharepoint';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /admin': Operation<'/admin', 'get'>;
  'PATCH /admin': Operation<'/admin', 'patch'>;
  'GET /admin/reportSettings': Operation<'/admin/reportSettings', 'get'>;
  'PATCH /admin/reportSettings': Operation<'/admin/reportSettings', 'patch'>;
  'DELETE /admin/reportSettings': Operation<'/admin/reportSettings', 'delete'>;
}

/**
 * `GET /admin`
 *
 */
export function get(
  params?: IEndpoints['GET /admin']['parameters']
): EndpointRequest<IEndpoints['GET /admin']['response']> {
  return {
    method: 'get',
    path: '/admin',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /admin`
 *
 */
export function update(
  body: IEndpoints['PATCH /admin']['body']
): EndpointRequest<IEndpoints['PATCH /admin']['response']> {
  return {
    method: 'patch',
    path: '/admin',
    body,
  };
}

export const reportSettings = {
  /**
   * `GET /admin/reportSettings`
   *
   * Get the tenant-level settings for Microsoft 365 reports.
   */
  list: function list(
    params?: IEndpoints['GET /admin/reportSettings']['parameters']
  ): EndpointRequest<IEndpoints['GET /admin/reportSettings']['response']> {
    return {
      method: 'get',
      path: '/admin/reportSettings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /admin/reportSettings`
   *
   * Update tenant-level settings for Microsoft 365 reports.
   */
  update: function update(
    body: IEndpoints['PATCH /admin/reportSettings']['body']
  ): EndpointRequest<IEndpoints['PATCH /admin/reportSettings']['response']> {
    return {
      method: 'patch',
      path: '/admin/reportSettings',
      body,
    };
  },
  /**
   * `DELETE /admin/reportSettings`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /admin/reportSettings']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /admin/reportSettings']['response']> {
    return {
      method: 'delete',
      path: '/admin/reportSettings',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};
