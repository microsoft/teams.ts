export * as approve from './approve';
export * as cancelApproval from './cancelApproval';
export * as cancelMyRequest from './cancelMyRequest';
export * as reject from './reject';
export * as retrieveRequestStatus from './retrieveRequestStatus';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'delete'
  >;
  'GET /deviceManagement/operationApprovalRequests': Operation<
    '/deviceManagement/operationApprovalRequests',
    'get'
  >;
  'GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'get'
  >;
  'PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}': Operation<
    '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    'patch'
  >;
  'POST /deviceManagement/operationApprovalRequests': Operation<
    '/deviceManagement/operationApprovalRequests',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'operationApprovalRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/operationApprovalRequests`
 *
 * The Operation Approval Requests
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/operationApprovalRequests']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/operationApprovalRequests']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalRequests',
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
 * `GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 * The Operation Approval Requests
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'operationApprovalRequest-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/operationApprovalRequests/{operationApprovalRequest-id}',
    paramDefs: [{ name: 'operationApprovalRequest-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/operationApprovalRequests`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalRequests']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalRequests']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/operationApprovalRequests']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalRequests',
    paramDefs: [],
    params,
    body,
  };
}
