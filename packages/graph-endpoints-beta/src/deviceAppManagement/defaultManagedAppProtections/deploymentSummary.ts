import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'delete'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
 *
 * Navigation property to deployment summary of the configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/deploymentSummary',
    paramDefs: [{ name: 'defaultManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
