import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'delete'
  >;
  'GET /deviceManagement/operationApprovalPolicies': Operation<
    '/deviceManagement/operationApprovalPolicies',
    'get'
  >;
  'GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'get'
  >;
  'PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}': Operation<
    '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    'patch'
  >;
  'POST /deviceManagement/operationApprovalPolicies': Operation<
    '/deviceManagement/operationApprovalPolicies',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'operationApprovalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/operationApprovalPolicies`
 *
 * The Operation Approval Policies
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/operationApprovalPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /deviceManagement/operationApprovalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalPolicies',
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
 * `GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
 *
 * The Operation Approval Policies
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'operationApprovalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/operationApprovalPolicies/{operationApprovalPolicy-id}',
    paramDefs: [{ name: 'operationApprovalPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/operationApprovalPolicies`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/operationApprovalPolicies']['body'],
  params?: IEndpoints['POST /deviceManagement/operationApprovalPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /deviceManagement/operationApprovalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/operationApprovalPolicies',
    paramDefs: [],
    params,
    body,
  };
}
