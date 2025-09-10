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
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps': Operation<'/roleManagement/enterpriseApps', 'get'>;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps': Operation<'/roleManagement/enterpriseApps', 'post'>;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['rbacApplication-id'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/enterpriseApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}',
    paramDefs: {
      path: ['rbacApplication-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}',
    paramDefs: {
      path: ['rbacApplication-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps']['body']
): EndpointRequest<IEndpoints['POST /roleManagement/enterpriseApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps',
    body,
  };
}
