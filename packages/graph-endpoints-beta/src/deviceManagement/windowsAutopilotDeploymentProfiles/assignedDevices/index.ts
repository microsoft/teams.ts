export * as allowNextEnrollment from './allowNextEnrollment';
export * as assignResourceAccountToDevice from './assignResourceAccountToDevice';
export * as assignUserToDevice from './assignUserToDevice';
export * as deploymentProfile from './deploymentProfile';
export * as intendedDeploymentProfile from './intendedDeploymentProfile';
export * as unassignResourceAccountFromDevice from './unassignResourceAccountFromDevice';
export * as unassignUserFromDevice from './unassignUserFromDevice';
export * as updateDeviceProperties from './updateDeviceProperties';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices`
 *
 * The list of assigned devices for the profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}`
 *
 * The list of assigned devices for the profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices/{windowsAutopilotDeviceIdentity-id}',
    paramDefs: [
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeviceIdentity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignedDevices',
    paramDefs: [{ name: 'windowsAutopilotDeploymentProfile-id', in: 'path' }],
    params,
    body,
  };
}
