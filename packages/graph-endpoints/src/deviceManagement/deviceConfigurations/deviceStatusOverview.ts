import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
 *
 * Read properties and relationships of the deviceConfigurationDeviceOverview object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview`
 *
 * Update the properties of a deviceConfigurationDeviceOverview object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/deviceStatusOverview',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
