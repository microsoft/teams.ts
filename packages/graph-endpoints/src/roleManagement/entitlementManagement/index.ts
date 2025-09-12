export * as resourceNamespaces from './resourceNamespaces';
export * as roleAssignmentScheduleInstances from './roleAssignmentScheduleInstances';
export * as roleAssignmentScheduleRequests from './roleAssignmentScheduleRequests';
export * as roleAssignmentSchedules from './roleAssignmentSchedules';
export * as roleAssignments from './roleAssignments';
export * as roleDefinitions from './roleDefinitions';
export * as roleEligibilityScheduleInstances from './roleEligibilityScheduleInstances';
export * as roleEligibilityScheduleRequests from './roleEligibilityScheduleRequests';
export * as roleEligibilitySchedules from './roleEligibilitySchedules';

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
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/entitlementManagement']['response']> {
  return {
    method: 'delete',
    path: '/roleManagement/entitlementManagement',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement`
 *
 * Container for roles and assignments for entitlement management resources.
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/entitlementManagement']['response']> {
  return {
    method: 'get',
    path: '/roleManagement/entitlementManagement',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement`
 *
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement']['body']
): EndpointRequest<IEndpoints['PATCH /roleManagement/entitlementManagement']['response']> {
  return {
    method: 'patch',
    path: '/roleManagement/entitlementManagement',
    body,
  };
}
