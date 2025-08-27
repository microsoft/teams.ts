import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    'get'
  >;
  'GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps`
 *
 * List of apps to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * List of apps to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'androidManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'androidManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/androidManagedAppProtections/{androidManagedAppProtection-id}/apps',
    paramDefs: [{ name: 'androidManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
