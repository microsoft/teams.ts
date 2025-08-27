import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /deviceManagement/tenantAttachRBAC/enable': Operation<
    '/deviceManagement/tenantAttachRBAC/enable',
    'post'
  >;
}

/**
 * `POST /deviceManagement/tenantAttachRBAC/enable`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/tenantAttachRBAC/enable']['body'],
  params?: IEndpoints['POST /deviceManagement/tenantAttachRBAC/enable']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/tenantAttachRBAC/enable']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/tenantAttachRBAC/enable',
    paramDefs: [],
    params,
    body,
  };
}
