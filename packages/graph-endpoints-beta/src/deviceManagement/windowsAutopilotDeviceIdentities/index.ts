export * as allowNextEnrollment from './allowNextEnrollment';
export * as assignResourceAccountToDevice from './assignResourceAccountToDevice';
export * as assignUserToDevice from './assignUserToDevice';
export * as deploymentProfile from './deploymentProfile';
export * as intendedDeploymentProfile from './intendedDeploymentProfile';
export * as unassignResourceAccountFromDevice from './unassignResourceAccountFromDevice';
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
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
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
 * The Windows autopilot device identities contained collection.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
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
 * The Windows autopilot device identities contained collection.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeviceIdentities/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
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
    ver: 'beta',
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
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeviceIdentities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeviceIdentities',
    paramDefs: [],
    params,
    body,
  };
}
