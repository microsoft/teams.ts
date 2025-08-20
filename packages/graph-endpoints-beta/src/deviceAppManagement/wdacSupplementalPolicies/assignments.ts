import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments': Operation<
    '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments`
 *
 * The associated group assignments for the Windows Defender Application Control Supplemental Policy.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
 *
 * The associated group assignments for the Windows Defender Application Control Supplemental Policy.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments/{windowsDefenderApplicationControlSupplementalPolicyAssignment-id}',
    paramDefs: [
      { name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' },
      { name: 'windowsDefenderApplicationControlSupplementalPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/wdacSupplementalPolicies/{windowsDefenderApplicationControlSupplementalPolicy-id}/assignments',
    paramDefs: [{ name: 'windowsDefenderApplicationControlSupplementalPolicy-id', in: 'path' }],
    params,
    body,
  };
}
