import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'delete'
  >;
  'GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    'get'
  >;
  'GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'get'
  >;
  'PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'patch'
  >;
  'POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
 *
 * Delete a fileStorageContainerTypeAppPermissionGrant object in a fileStorageContainerTypeRegistration.
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
      { name: 'fileStorageContainerTypeAppPermissionGrant-appId', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants`
 *
 * List all app permission grants in a fileStorageContainerTypeRegistration.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
 *
 * Read a specific app permission grant in a fileStorageContainerTypeRegistration.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
      { name: 'fileStorageContainerTypeAppPermissionGrant-appId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
 *
 * Create a new fileStorageContainerTypeAppPermissionGrant object in a fileStorageContainerTypeRegistration.
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    paramDefs: [
      { name: 'fileStorageContainerTypeRegistration-id', in: 'path' },
      { name: 'fileStorageContainerTypeAppPermissionGrant-appId', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['body'],
  params?: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['parameters']
): EndpointRequest<
  IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    paramDefs: [{ name: 'fileStorageContainerTypeRegistration-id', in: 'path' }],
    params,
    body,
  };
}
