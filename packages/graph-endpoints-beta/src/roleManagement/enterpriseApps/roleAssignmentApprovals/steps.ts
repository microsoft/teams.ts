import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
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
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['body'],
  params?: IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/enterpriseApps/{rbacApplication-id}/roleAssignmentApprovals/{approval-id}/steps',
    paramDefs: [
      { name: 'rbacApplication-id', in: 'path' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
    body,
  };
}
