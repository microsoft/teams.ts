export * as settingStates from './settingStates';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'delete'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates',
    'get'
  >;
  'GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'get'
  >;
  'PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    'patch'
  >;
  'POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates': Operation<
    '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 * Security baseline states for this device.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates',
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
 * `GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 * Security baseline states for this device.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates/{securityBaselineState-id}',
    paramDefs: [
      { name: 'managedDevice-id', in: 'path' },
      { name: 'securityBaselineState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates']['body'],
  params?: IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/managedDevices/{managedDevice-id}/securityBaselineStates',
    paramDefs: [{ name: 'managedDevice-id', in: 'path' }],
    params,
    body,
  };
}
