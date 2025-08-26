import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
    'get'
  >;
  'GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps`
 *
 * List of apps to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
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
 * `GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * List of apps to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'windowsManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/windowsManagedAppProtections/{windowsManagedAppProtection-id}/apps',
    paramDefs: [{ name: 'windowsManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
