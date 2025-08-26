import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    'get'
  >;
  'GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates': Operation<
    '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates`
 *
 * Navigational property to a list of device states for this pool.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
 *
 * Navigational property to a list of device states for this pool.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates/{embeddedSIMDeviceState-id}',
    paramDefs: [
      { name: 'embeddedSIMActivationCodePool-id', in: 'path' },
      { name: 'embeddedSIMDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['body'],
  params?: IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/embeddedSIMActivationCodePools/{embeddedSIMActivationCodePool-id}/deviceStates',
    paramDefs: [{ name: 'embeddedSIMActivationCodePool-id', in: 'path' }],
    params,
    body,
  };
}
