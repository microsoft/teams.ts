export * as enable from './enable';

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
    paramDefs: [{ name: 'If-Match', in: 'header' }],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/tenantAttachRBAC`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/tenantAttachRBAC']['body'],
  params?: IEndpoints['PATCH /deviceManagement/tenantAttachRBAC']['parameters']
): EndpointRequest<IEndpoints['PATCH /deviceManagement/tenantAttachRBAC']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/tenantAttachRBAC',
    paramDefs: [],
    params,
    body,
  };
}
