import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments`
 *
 * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/assignments',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
