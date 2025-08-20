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
  'DELETE /roleManagement/directory': Operation<'/roleManagement/directory', 'delete'>;
  'GET /roleManagement/directory': Operation<'/roleManagement/directory', 'get'>;
  'PATCH /roleManagement/directory': Operation<'/roleManagement/directory', 'patch'>;
}

/**
 * `DELETE /roleManagement/directory`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory']['parameters']
): EndpointRequest<IEndpoints['DELETE /roleManagement/directory']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /roleManagement/directory`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory']['parameters']
): EndpointRequest<IEndpoints['GET /roleManagement/directory']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory']['parameters']
): EndpointRequest<IEndpoints['PATCH /roleManagement/directory']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory',
    paramDefs: [],
    params,
    body,
  };
}
