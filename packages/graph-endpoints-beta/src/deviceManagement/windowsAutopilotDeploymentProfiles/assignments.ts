import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments': Operation<
    '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeploymentProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments`
 *
 * The list of group assignments for the profile.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
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
 * `GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
 *
 * The list of group assignments for the profile.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeploymentProfileAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments/{windowsAutopilotDeploymentProfileAssignment-id}',
    paramDefs: [
      { name: 'windowsAutopilotDeploymentProfile-id', in: 'path' },
      { name: 'windowsAutopilotDeploymentProfileAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsAutopilotDeploymentProfiles/{windowsAutopilotDeploymentProfile-id}/assignments',
    paramDefs: [{ name: 'windowsAutopilotDeploymentProfile-id', in: 'path' }],
    params,
    body,
  };
}
