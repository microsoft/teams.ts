import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
 *
 * Read properties and relationships of the managedAppPolicyDeploymentSummary object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary`
 *
 * Update the properties of a managedAppPolicyDeploymentSummary object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/deploymentSummary',
    paramDefs: [{ name: 'iosManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
