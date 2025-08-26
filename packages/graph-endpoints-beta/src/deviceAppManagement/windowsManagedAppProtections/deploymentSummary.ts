import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
 *
 * Navigation property to deployment summary of the configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/deploymentSummary',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
