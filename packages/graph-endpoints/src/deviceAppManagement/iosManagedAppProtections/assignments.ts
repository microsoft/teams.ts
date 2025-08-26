import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    'get'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Deletes a targetedManagedAppPolicyAssignment.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments`
 *
 * List properties and relationships of the targetedManagedAppPolicyAssignment objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Read properties and relationships of the targetedManagedAppPolicyAssignment object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}`
 *
 * Update the properties of a targetedManagedAppPolicyAssignment object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments/{targetedManagedAppPolicyAssignment-id}',
    paramDefs: [
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'targetedManagedAppPolicyAssignment-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/assignments',
    paramDefs: [{ name: 'iosManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
