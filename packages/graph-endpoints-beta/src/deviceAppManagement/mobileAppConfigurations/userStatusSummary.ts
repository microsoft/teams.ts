import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    'patch'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
 *
 * App configuration user status summary.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatusSummary',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
