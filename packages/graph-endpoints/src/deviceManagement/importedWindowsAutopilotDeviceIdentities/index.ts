export * as import from './import';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/importedWindowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    'get'
  >;
  'GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/importedWindowsAutopilotDeviceIdentities': Operation<
    '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 * Deletes a importedWindowsAutopilotDeviceIdentity.
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'importedWindowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/importedWindowsAutopilotDeviceIdentities`
 *
 * List properties and relationships of the importedWindowsAutopilotDeviceIdentity objects.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
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
 * `GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 * Read properties and relationships of the importedWindowsAutopilotDeviceIdentity object.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'importedWindowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities/{importedWindowsAutopilotDeviceIdentity-id}',
    paramDefs: [{ name: 'importedWindowsAutopilotDeviceIdentity-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/importedWindowsAutopilotDeviceIdentities`
 *
 * Create a new importedWindowsAutopilotDeviceIdentity object.
 */
export function create(
  body: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/importedWindowsAutopilotDeviceIdentities']['response']
> {
  return {
    method: 'post',
    path: '/deviceManagement/importedWindowsAutopilotDeviceIdentities',
    paramDefs: [],
    params,
    body,
  };
}
