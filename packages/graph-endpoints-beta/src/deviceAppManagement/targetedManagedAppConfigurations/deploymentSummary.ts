import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
 *
 * Navigation property to deployment summary of the configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/deploymentSummary',
    paramDefs: [{ name: 'targetedManagedAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
