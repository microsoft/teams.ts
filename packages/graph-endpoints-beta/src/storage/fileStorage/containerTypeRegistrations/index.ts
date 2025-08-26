export * as applicationPermissionGrants from './applicationPermissionGrants';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containerTypeRegistrations': Operation<
    '/storage/fileStorage/containerTypeRegistrations',
    'get'
  >;
  'GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containerTypeRegistrations': Operation<
    '/storage/fileStorage/containerTypeRegistrations',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}`
 *
 * Delete a fileStorageContainerTypeRegistration object. A registration can only be deleted if it has neither containers nor deleted containers
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containerTypeRegistrations`
 *
 * Get a list of the fileStorageContainerTypeRegistration objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/containerTypeRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypeRegistrations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}`
 *
 * Read the properties and relationships of a fileStorageContainerTypeRegistration object.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}`
 *
 * Create or replace a fileStorageContainerTypeRegistration object. This method registers a fileStorageContainerType in the tenant.  For standard containers, billing must be valid for the registration to complete successfully. Settings can&#x27;t be modified during registration.
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}',
    paramDefs: [{ name: 'fileStorageContainerTypeRegistration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containerTypeRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations']['parameters']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/containerTypeRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containerTypeRegistrations',
    paramDefs: [],
    params,
    body,
  };
}
