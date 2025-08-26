import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'delete'
  >;
  'GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'get'
  >;
  'PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus': Operation<
    '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
 *
 * Endpoint privilege management (EPM) tenant provisioning status contains tenant level license and onboarding state information.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['body'],
  params?: IEndpoints['PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/endpointPrivilegeManagementProvisioningStatus']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/endpointPrivilegeManagementProvisioningStatus',
    paramDefs: [],
    params,
    body,
  };
}
