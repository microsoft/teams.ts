import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    'get'
  >;
  'GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments': Operation<
    '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
      { name: 'windowsQualityUpdatePolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments`
 *
 * List of the groups this profile is assgined to.
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
 *
 * List of the groups this profile is assgined to.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
      { name: 'windowsQualityUpdatePolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments/{windowsQualityUpdatePolicyAssignment-id}',
    paramDefs: [
      { name: 'windowsQualityUpdatePolicy-id', in: 'path' },
      { name: 'windowsQualityUpdatePolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceManagement/windowsQualityUpdatePolicies/{windowsQualityUpdatePolicy-id}/assignments',
    paramDefs: [{ name: 'windowsQualityUpdatePolicy-id', in: 'path' }],
    params,
    body,
  };
}
