import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
 *
 * Navigation property to deployment summary of the configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/deploymentSummary',
    paramDefs: [{ name: 'androidManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
