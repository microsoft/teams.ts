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
  'GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    'get'
  >;
  'POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
    'post'
  >;
  'GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'get'
  >;
  'PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'patch'
  >;
  'DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}': Operation<
    '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
    'delete'
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
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainerTypeRegistration-id'],
    },
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
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
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
    paramDefs: {
      path: ['fileStorageContainerTypeRegistration-id'],
      query: ['$select', '$expand'],
    },
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
    paramDefs: {
      path: ['fileStorageContainerTypeRegistration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containerTypeRegistrations`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations']['body']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/containerTypeRegistrations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containerTypeRegistrations',
    body,
  };
}

export const applicationPermissionGrants = {
  /**
   * `GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants`
   *
   * List all app permission grants in a fileStorageContainerTypeRegistration.
   */
  list: function list(
    params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['fileStorageContainerTypeRegistration-id'],
      },
      params,
    };
  },
  /**
   * `POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['body'],
    params?: IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants',
      paramDefs: {
        path: ['fileStorageContainerTypeRegistration-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
   *
   * Read a specific app permission grant in a fileStorageContainerTypeRegistration.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'fileStorageContainerTypeRegistration-id',
          'fileStorageContainerTypeAppPermissionGrant-appId',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
   *
   * Update the properties of a fileStorageContainerTypeAppPermissionGrant object.
   */
  update: function update(
    body: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['body'],
    params?: IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
      paramDefs: {
        path: [
          'fileStorageContainerTypeRegistration-id',
          'fileStorageContainerTypeAppPermissionGrant-appId',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}`
   *
   * Delete a fileStorageContainerTypeAppPermissionGrant object in a fileStorageContainerTypeRegistration.
   */
  del: function del(
    params?: IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/storage/fileStorage/containerTypeRegistrations/{fileStorageContainerTypeRegistration-id}/applicationPermissionGrants/{fileStorageContainerTypeAppPermissionGrant-appId}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'fileStorageContainerTypeRegistration-id',
          'fileStorageContainerTypeAppPermissionGrant-appId',
        ],
      },
      params,
    };
  },
};
