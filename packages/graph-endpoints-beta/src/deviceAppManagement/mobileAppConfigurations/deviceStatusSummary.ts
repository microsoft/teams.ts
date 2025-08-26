import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
 *
 * App configuration device status summary.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/deviceStatusSummary',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
