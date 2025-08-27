import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments': Operation<
    '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments`
 *
 * Navigation property to list of security groups targeted for policy.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Navigation property to list of security groups targeted for policy.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'windowsInformationProtectionPolicy-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsInformationProtectionPolicies/{windowsInformationProtectionPolicy-id}/assignments',
    paramDefs: [{ name: 'windowsInformationProtectionPolicy-id', in: 'path' }],
    params,
    body,
  };
}
