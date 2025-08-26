import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
 *
 * Managed device mobile app configuration states for this device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
 *
 * Managed device mobile app configuration states for this device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates/{managedDeviceMobileAppConfigurationState-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'managedDeviceMobileAppConfigurationState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/managedDeviceMobileAppConfigurationStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
