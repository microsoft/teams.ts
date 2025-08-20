import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'delete'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'get'
  >;
  'GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'get'
  >;
  'PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'patch'
  >;
  'POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
 *
 * The security baseline state for different settings for a device
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 * The security baseline state for different settings for a device
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['body'],
  params?: IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
    body,
  };
}
