import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    'get'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates`
 *
 * List of run states for the hardware configuration across all devices. Read-Only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
 *
 * List of run states for the hardware configuration across all devices. Read-Only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates/{hardwareConfigurationDeviceState-id}',
    paramDefs: [
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/deviceRunStates',
    paramDefs: [{ name: 'hardwareConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
