export * as steps from './steps';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'delete'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals': Operation<
    '/roleManagement/directory/roleAssignmentApprovals',
    'get'
  >;
  'GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'get'
  >;
  'PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}': Operation<
    '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    'patch'
  >;
  'POST /roleManagement/directory/roleAssignmentApprovals': Operation<
    '/roleManagement/directory/roleAssignmentApprovals',
    'post'
  >;
}

/**
 * `DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function del(
  params?: IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /roleManagement/directory/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function list(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals',
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
 * `GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function get(
  params?: IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'approval-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}`
 *
 * @deprecated
 */
export function update(
  body: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['body'],
  params?: IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /roleManagement/directory/roleAssignmentApprovals/{approval-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/roleManagement/directory/roleAssignmentApprovals/{approval-id}',
    paramDefs: [{ name: 'approval-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /roleManagement/directory/roleAssignmentApprovals`
 *
 * @deprecated
 */
export function create(
  body: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals']['body'],
  params?: IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals']['parameters']
): EndpointRequest<
  IEndpoints['POST /roleManagement/directory/roleAssignmentApprovals']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/roleManagement/directory/roleAssignmentApprovals',
    paramDefs: [],
    params,
    body,
  };
}
