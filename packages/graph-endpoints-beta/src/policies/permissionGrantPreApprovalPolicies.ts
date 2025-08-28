import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'delete'
  >;
  'GET /policies/permissionGrantPreApprovalPolicies': Operation<
    '/policies/permissionGrantPreApprovalPolicies',
    'get'
  >;
  'GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'get'
  >;
  'PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}': Operation<
    '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    'patch'
  >;
  'POST /policies/permissionGrantPreApprovalPolicies': Operation<
    '/policies/permissionGrantPreApprovalPolicies',
    'post'
  >;
}

/**
 * `DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
 *
 * Delete a permissionGrantPreApprovalPolicy object.
 */
export function del(
  params?: IEndpoints['DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'permissionGrantPreApprovalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /policies/permissionGrantPreApprovalPolicies`
 *
 * Retrieve the list of permissionGrantPreApprovalPolicy objects in the tenant.
 */
export function list(
  params?: IEndpoints['GET /policies/permissionGrantPreApprovalPolicies']['parameters']
): EndpointRequest<IEndpoints['GET /policies/permissionGrantPreApprovalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/permissionGrantPreApprovalPolicies',
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
 * `GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
 *
 * Read the properties and relationships of a permissionGrantPreApprovalPolicy object.
 */
export function get(
  params?: IEndpoints['GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'permissionGrantPreApprovalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}`
 *
 * Update the properties of a permissionGrantPreApprovalPolicy object.
 */
export function update(
  body: IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['body'],
  params?: IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/policies/permissionGrantPreApprovalPolicies/{permissionGrantPreApprovalPolicy-id}',
    paramDefs: [{ name: 'permissionGrantPreApprovalPolicy-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /policies/permissionGrantPreApprovalPolicies`
 *
 * Create a new permissionGrantPreApprovalPolicy object.
 */
export function create(
  body: IEndpoints['POST /policies/permissionGrantPreApprovalPolicies']['body'],
  params?: IEndpoints['POST /policies/permissionGrantPreApprovalPolicies']['parameters']
): EndpointRequest<IEndpoints['POST /policies/permissionGrantPreApprovalPolicies']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/policies/permissionGrantPreApprovalPolicies',
    paramDefs: [],
    params,
    body,
  };
}
