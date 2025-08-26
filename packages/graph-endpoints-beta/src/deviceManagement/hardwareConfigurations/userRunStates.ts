import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'delete'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
    'get'
  >;
  'GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'get'
  >;
  'PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    'patch'
  >;
  'POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates': Operation<
    '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationUserState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates`
 *
 * List of run states for the hardware configuration across all users. Read-Only.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
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
 * `GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
 *
 * List of run states for the hardware configuration across all users. Read-Only.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationUserState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates/{hardwareConfigurationUserState-id}',
    paramDefs: [
      { name: 'hardwareConfiguration-id', in: 'path' },
      { name: 'hardwareConfigurationUserState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['body'],
  params?: IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/hardwareConfigurations/{hardwareConfiguration-id}/userRunStates',
    paramDefs: [{ name: 'hardwareConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
