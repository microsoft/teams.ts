export * as activatedUsing from './activatedUsing';
export * as appScope from './appScope';
export * as cancel from './cancel';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';
export * as targetSchedule from './targetSchedule';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentScheduleRequests': Operation<
    '/roleManagement/directory/roleAssignmentScheduleRequests',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentScheduleRequests`
 *
 * Retrieve the requests for active role assignments to principals. The active assignments include those made through assignments and activation requests, and directly through the role assignments API. The role assignments can be permanently active with or without an expiry date, or temporarily active after user activation of eligible assignments.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests',
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
 * `GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * In PIM, read the details of a request for an active and persistent role assignment made through the unifiedRoleAssignmentScheduleRequest object.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests/{unifiedRoleAssignmentScheduleRequest-id}',
    paramDefs: [{ name: 'unifiedRoleAssignmentScheduleRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentScheduleRequests`
 *
 * Create a new unifiedRoleAssignmentScheduleRequest object. This operation allows both admins and users to add, remove, extend, or renew assignments. To run this request, the calling user must have multifactor authentication (MFA) enforced, and running the query in a session in which they were challenged for MFA. See Enable per-user Microsoft Entra multifactor authentication to secure sign-in events.
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentScheduleRequests',
    paramDefs: [],
    params,
    body,
  };
}
