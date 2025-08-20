export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleEligibilitySchedules': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleEligibilitySchedules': Operation<
    '/roleManagement/entitlementManagement/roleEligibilitySchedules',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleEligibilitySchedules`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules',
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
 * `GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleEligibilitySchedule-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules/{unifiedRoleEligibilitySchedule-id}',
    paramDefs: [{ name: 'unifiedRoleEligibilitySchedule-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleEligibilitySchedules`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleEligibilitySchedules']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleEligibilitySchedules']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleEligibilitySchedules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleEligibilitySchedules',
    paramDefs: [],
    params,
    body,
  };
}
