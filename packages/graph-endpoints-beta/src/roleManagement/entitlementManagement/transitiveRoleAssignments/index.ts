export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/transitiveRoleAssignments': Operation<
    '/roleManagement/entitlementManagement/transitiveRoleAssignments',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/transitiveRoleAssignments': Operation<
    '/roleManagement/entitlementManagement/transitiveRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/transitiveRoleAssignments',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
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
 * `GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'ConsistencyLevel', in: 'header' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/transitiveRoleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/transitiveRoleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
