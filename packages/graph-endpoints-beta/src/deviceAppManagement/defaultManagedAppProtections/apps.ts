import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    'get'
  >;
  'GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps`
 *
 * List of apps to which the policy is deployed.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * List of apps to which the policy is deployed.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'defaultManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'defaultManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps`
 *
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/deviceAppManagement/defaultManagedAppProtections/{defaultManagedAppProtection-id}/apps',
    paramDefs: [{ name: 'defaultManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
