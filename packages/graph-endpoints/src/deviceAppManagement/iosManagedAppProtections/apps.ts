import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'delete'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
    'get'
  >;
  'GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'get'
  >;
  'PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    'patch'
  >;
  'POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps': Operation<
    '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
    'post'
  >;
}

/**
 * `DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * Deletes a managedMobileApp.
 */
export function del(
  params?: IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'delete',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps`
 *
 * List properties and relationships of the managedMobileApp objects.
 */
export function list(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
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
 * `GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * Read properties and relationships of the managedMobileApp object.
 */
export function get(
  params?: IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'get',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}`
 *
 * Update the properties of a managedMobileApp object.
 */
export function update(
  body: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['body'],
  params?: IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}']['response']
> {
  return {
    method: 'patch',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps/{managedMobileApp-id}',
    paramDefs: [
      { name: 'iosManagedAppProtection-id', in: 'path' },
      { name: 'managedMobileApp-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps`
 *
 * Create a new managedMobileApp object.
 */
export function create(
  body: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['body'],
  params?: IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['parameters']
): EndpointRequest<
  IEndpoints['POST /deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps']['response']
> {
  return {
    method: 'post',
    path: '/deviceAppManagement/iosManagedAppProtections/{iosManagedAppProtection-id}/apps',
    paramDefs: [{ name: 'iosManagedAppProtection-id', in: 'path' }],
    params,
    body,
  };
}
