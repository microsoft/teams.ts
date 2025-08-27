export * as activatedUsing from './activatedUsing';
export * as appScope from './appScope';
export * as cancel from './cancel';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';
export * as targetSchedule from './targetSchedule';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentScheduleRequests',
    paramDefs: [{ name: 'rbacApplication-id', in: 'path' }],
    params,
    body,
  };
}
