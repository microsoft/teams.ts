export * as activatedUsing from './activatedUsing';
export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances`
 *
 * Instances for active role assignments.
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
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
 * `GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 * Instances for active role assignments.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}']['response']
> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances/{unifiedRoleAssignmentScheduleInstance-id}',
    paramDefs: [{ name: 'unifiedRoleAssignmentScheduleInstance-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances`
 *
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentScheduleInstances']['response']
> {
  return {
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentScheduleInstances',
    paramDefs: [],
    params,
    body,
  };
}
