export * as activatedUsing from './activatedUsing';
export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/directory/roleAssignmentScheduleInstances',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentScheduleInstances`
 *
 * Get the instances of active role assignments in your tenant. The active assignments include those made through assignments and activation requests, and directly through the role assignments API.
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances',
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
 * `GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 * Get the instance of an active role assignment.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [{ name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentScheduleInstances`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleInstances']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleInstances']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentScheduleInstances',
    paramDefs: [],
    params,
    body,
  };
}
