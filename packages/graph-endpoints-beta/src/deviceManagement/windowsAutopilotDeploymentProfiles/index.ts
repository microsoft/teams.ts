export * as assign from './assign';
export * as assignedDevices from './assignedDevices';
export * as assignments from './assignments';
export * as hasPayloadLinks from './hasPayloadLinks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles`
 *
 * Windows auto pilot deployment profiles
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles',
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
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 * Windows auto pilot deployment profiles
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}',
    paramDefs: [{ name: 'windowsAutopilotDeploymentProfile-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles',
    paramDefs: [],
    params,
    body,
  };
}
