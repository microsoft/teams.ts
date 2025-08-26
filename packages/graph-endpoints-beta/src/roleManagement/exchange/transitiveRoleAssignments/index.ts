export * as appScope from './appScope';
export * as directoryScope from './directoryScope';
export * as principal from './principal';
export * as roleDefinition from './roleDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'delete'
  >;
  'GET /roleManagement/exchange/transitiveRoleAssignments': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments',
    'get'
  >;
  'GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'get'
  >;
  'PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    'patch'
  >;
  'POST /roleManagement/exchange/transitiveRoleAssignments': Operation<
    '/roleManagement/exchange/transitiveRoleAssignments',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/exchange/transitiveRoleAssignments`
 *
 * Resource to grant access to users or groups that are transitive.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/transitiveRoleAssignments',
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
 * `GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * Resource to grant access to users or groups that are transitive.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'unifiedRoleAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/exchange/transitiveRoleAssignments/{unifiedRoleAssignment-id}',
    paramDefs: [{ name: 'unifiedRoleAssignment-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/exchange/transitiveRoleAssignments`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/exchange/transitiveRoleAssignments']['body'],
  params?: IEndpoints['POST /roleManagement/exchange/transitiveRoleAssignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/exchange/transitiveRoleAssignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/exchange/transitiveRoleAssignments',
    paramDefs: [],
    params,
    body,
  };
}
