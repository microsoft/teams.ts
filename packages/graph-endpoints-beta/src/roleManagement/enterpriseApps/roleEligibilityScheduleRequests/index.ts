export * as appScope from './appScope';
export * as cancel from './cancel';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';
export * as targetSchedule from './targetSchedule';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests',
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
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests/{unifiedRoleEligibilityScheduleRequest-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'unifiedRoleEligibilityScheduleRequest-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleEligibilityScheduleRequests',
    paramDefs: [{ name: 'rbacApplication-id', in: 'path' }],
    params,
    body,
  };
}
