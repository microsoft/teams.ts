import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
    'get'
  >;
  'GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses`
 *
 * The list of user installation states for this mobile app configuration.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
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
 * `GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 * The list of user installation states for this mobile app configuration.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'iosLobAppProvisioningConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/iosLobAppProvisioningConfigurations/{iosLobAppProvisioningConfiguration-id}/userStatuses',
    paramDefs: [{ name: 'iosLobAppProvisioningConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
