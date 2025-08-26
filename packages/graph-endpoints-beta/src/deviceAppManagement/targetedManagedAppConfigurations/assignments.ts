import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments': Operation<
    '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments`
 *
 * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Navigation property to list of inclusion and exclusion groups to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'targetedManagedAppConfiguration-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/targetedManagedAppConfigurations/{targetedManagedAppConfiguration-id}/assignments',
    paramDefs: [{ name: 'targetedManagedAppConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
