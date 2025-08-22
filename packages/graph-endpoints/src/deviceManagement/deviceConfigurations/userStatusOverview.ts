import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'delete'
  >;
  'GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'get'
  >;
  'PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview': Operation<
    '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    'patch'
  >;
}

/**
 * `DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
 *
 * Read properties and relationships of the deviceConfigurationUserOverview object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview`
 *
 * Update the properties of a deviceConfigurationUserOverview object.
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
