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
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
    ],
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
    ],
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
    paramDefs: [{ name: 'rbacApplication-id', in: 'path' }],
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
  body: IEndpoints['POST /roleManagement/enterpriseApps']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps']['parameters']
): EndpointRequest<IEndpoints['POST /roleManagement/enterpriseApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps',
    paramDefs: [],
    params,
    body,
  };
}
