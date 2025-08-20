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
    ver: 'beta',
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
 * Device Configuration users status overview
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
> {
  return {
    ver: 'beta',
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
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['body'],
  params?: IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/deviceConfigurations/{deviceConfiguration-id}/userStatusOverview',
    paramDefs: [{ name: 'deviceConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
