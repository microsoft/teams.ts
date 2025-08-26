import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'delete'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    'get'
  >;
  'GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    'patch'
  >;
  'POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses': Operation<
    '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 * Deletes a managedDeviceMobileAppConfigurationUserStatus.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses`
 *
 * List properties and relationships of the managedDeviceMobileAppConfigurationUserStatus objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 * Read properties and relationships of the managedDeviceMobileAppConfigurationUserStatus object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}`
 *
 * Update the properties of a managedDeviceMobileAppConfigurationUserStatus object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses/{managedDeviceMobileAppConfigurationUserStatus-id}',
    paramDefs: [
      { name: 'managedDeviceMobileAppConfiguration-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationUserStatus-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses`
 *
 * Create a new managedDeviceMobileAppConfigurationUserStatus object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['body'],
  params?: IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/mobileAppConfigurations/{managedDeviceMobileAppConfiguration-id}/userStatuses',
    paramDefs: [{ name: 'managedDeviceMobileAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
