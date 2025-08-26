import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'delete'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'get'
  >;
  'GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'get'
  >;
  'PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    'patch'
  >;
  'POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates': Operation<
    '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    'post'
  >;
}

/**
 * `DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
 *
 * The security baseline state for different settings for a device
 */
export function list(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
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
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 * The security baseline state for different settings for a device
 */
export function get(
  params?: IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['body'],
  params?: IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates/{securityBaselineSettingState-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
      { name: 'securityBaselineSettingState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates`
 *
 */
export function create(
  body: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['body'],
  params?: IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}/settingStates',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
    body,
  };
}
