export * as assignUserToDevice from './assignUserToDevice';
export * as unassignUserFromDevice from './unassignUserFromDevice';
export * as updateDeviceProperties from './updateDeviceProperties';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/windowsAutopilotDeviceIdentities',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 * Deletes a windowsAutopilotDeviceIdentity.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities`
 *
 * List properties and relationships of the windowsAutopilotDeviceIdentity objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 * Read properties and relationships of the windowsAutopilotDeviceIdentity object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [{ name: 'windowsAutopilotDeviceIdentity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeviceIdentities`
 *
 * Create a new windowsAutopilotDeviceIdentity object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    paramDefs: [],
    params,
    body,
  };
}
