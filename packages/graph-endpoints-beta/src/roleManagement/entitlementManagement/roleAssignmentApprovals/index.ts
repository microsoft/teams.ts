export * as steps from './steps';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    'get'
  >;
  'GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /roleManagement/entitlementManagement/roleAssignmentApprovals': Operation<
    '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals',
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
 * `GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals/{approval-id}',
    paramDefs: [{ name: 'approval-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/entitlementManagement/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals']['body'],
  params?: IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/entitlementManagement/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/entitlementManagement/roleAssignmentApprovals',
    paramDefs: [],
    params,
    body,
  };
}
