import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/tenantAttachRBAC': Operation<
    '/deviceManagement/tenantAttachRBAC',
    'delete'
  >;
  'GET /deviceManagement/tenantAttachRBAC': Operation<'/deviceManagement/tenantAttachRBAC', 'get'>;
  'PATCH /deviceManagement/tenantAttachRBAC': Operation<
    '/deviceManagement/tenantAttachRBAC',
    'patch'
  >;
  'POST /deviceManagement/tenantAttachRBAC/enable': Operation<
    '/deviceManagement/tenantAttachRBAC/enable',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/tenantAttachRBAC`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/tenantAttachRBAC']['parameters']
): EndpointRequest<IEndpoints['DELETE /deviceManagement/tenantAttachRBAC']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/tenantAttachRBAC',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /deviceManagement/tenantAttachRBAC`
 *
 * TenantAttach RBAC Enablement
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/tenantAttachRBAC']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/tenantAttachRBAC']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/tenantAttachRBAC',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /deviceManagement/tenantAttachRBAC`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/tenantAttachRBAC']['body']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/tenantAttachRBAC']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/tenantAttachRBAC',
    body,
  };
}

export const enable = {
  /**
   * `POST /deviceManagement/tenantAttachRBAC/enable`
   *
   */
  create: function create(
    body: IEndpoints['POST /deviceManagement/tenantAttachRBAC/enable']['body']
  ): EndpointRequest<IEndpoints['POST /deviceManagement/tenantAttachRBAC/enable']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/deviceManagement/tenantAttachRBAC/enable',
      body,
    };
  },
};
