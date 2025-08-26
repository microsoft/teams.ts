import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * Used to represent the decision associated with a single step in the approval process configured in approvalStage.
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps/{approvalStep-id}',
    paramDefs: [
      { name: 'approval-id', in: 'path' },
      { name: 'approvalStep-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}/steps',
    paramDefs: [{ name: 'approval-id', in: 'path' }],
    params,
    body,
  };
}
