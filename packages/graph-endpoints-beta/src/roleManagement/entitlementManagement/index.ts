export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignmentApprovals from './roleAssignmentApprovals';
export * as roleAssignmentScheduleInstances from './roleAssignmentScheduleInstances';
export * as roleAssignmentScheduleRequests from './roleAssignmentScheduleRequests';
export * as roleAssignmentSchedules from './roleAssignmentSchedules';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleEligibilityScheduleInstances from './roleEligibilityScheduleInstances';
export * as roleEligibilityScheduleRequests from './roleEligibilityScheduleRequests';
export * as roleEligibilitySchedules from './roleEligibilitySchedules';
export * as transitiveRoleAssignments from './transitiveRoleAssignments';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement': Operation<
    '/roleManagement/entitlementManagement',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement': Operation<
    '/roleManagement/entitlementManagement',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement': Operation<
    '/roleManagement/entitlementManagement',
    'patch'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/entitlementManagement']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement`
 *
 * The RbacApplication for Entitlement Management
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/entitlementManagement']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement/entitlementManagement']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement',
    paramDefs: [],
    params,
    body,
  };
}
