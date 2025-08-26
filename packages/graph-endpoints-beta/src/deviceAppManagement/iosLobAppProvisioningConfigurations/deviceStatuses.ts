import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    'get'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses`
 *
 * The list of device installation states for this mobile app configuration.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
 *
 * The list of device installation states for this mobile app configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationDeviceStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses/{managedDeviceMobileAppConfigurationDeviceStatus-id}',
    paramDefs: [
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationDeviceStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/deviceStatuses',
    paramDefs: [{ name: 'iosLobAppProvisioningConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
