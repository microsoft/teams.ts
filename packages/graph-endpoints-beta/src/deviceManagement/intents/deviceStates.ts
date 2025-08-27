import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'delete'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    'get'
  >;
  'GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'get'
  >;
  'PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    'patch'
  >;
  'POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates': Operation<
    '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates`
 *
 * Collection of states of all devices that the intent is applied to
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
 *
 * Collection of states of all devices that the intent is applied to
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceState-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates/{deviceManagementIntentDeviceState-id}',
    paramDefs: [
      { name: 'deviceManagementIntent-id', in: 'path' },
      { name: 'deviceManagementIntentDeviceState-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['body'],
  params?: IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/intents/{deviceManagementIntent-id}/deviceStates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/intents/{deviceManagementIntent-id}/deviceStates',
    paramDefs: [{ name: 'deviceManagementIntent-id', in: 'path' }],
    params,
    body,
  };
}
