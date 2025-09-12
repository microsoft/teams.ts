export * as columns from './columns';
export * as migrationJobs from './migrationJobs';
export * as permissions from './permissions';
export * as recycleBin from './recycleBin';
export * as sharePointGroups from './sharePointGroups';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'delete'
  >;
  'GET /storage/fileStorage/containers': Operation<'/storage/fileStorage/containers', 'get'>;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/containers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}',
    'patch'
  >;
  'POST /storage/fileStorage/containers': Operation<'/storage/fileStorage/containers', 'post'>;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/activate': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/activate',
    'post'
  >;
  'GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/drive',
    'get'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/lock',
    'post'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete',
    'post'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers',
    'post'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/restore',
    'post'
  >;
  'POST /storage/fileStorage/containers/{fileStorageContainer-id}/unlock': Operation<
    '/storage/fileStorage/containers/{fileStorageContainer-id}/unlock',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers`
 *
 * Get a list of fileStorageContainer objects that are accessible to a caller. The containerTypeId filter parameter is required.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/containers']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/containers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 * Retrieve the properties of a fileStorageContainer.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/containers/{fileStorageContainer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/containers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/containers/{fileStorageContainer-id}',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/containers`
 *
 * Create a new fileStorageContainer object.  The respective container type identified by containerTypeId must be enabled in the tenant.  For delegated calls, the calling user is set as the owner of the fileStorageContainer.
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/containers']['body']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/containers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/containers',
    body,
  };
}

export const activate = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/activate`
   *
   * Activate a fileStorageContainer object. A fileStorageContainer object is created in an inactive state, as indicated by the status property. A container that isn&#x27;t activated within 24 hours after creation is automatically deleted. Upon activation, the value of the status property changes from inactive to active. A file storage container can be activated by calling this API or any API that updates or modifies it or its content. For example, uploading a file to a file storage container activates it. It&#x27;s also activated when you add permissions to it or update them, or create a custom property on it.
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/activate',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const drive = {
  /**
   * `GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive`
   *
   * Get the properties of a drive associated with a fileStorageContainer.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/containers/{fileStorageContainer-id}/drive']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const lock = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['body'],
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/lock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/lock',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
      body,
    };
  },
};

export const permanentDelete = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete`
   *
   * Permanently delete a fileStorageContainer object. Deleting a file storage container with this method permanently removes it. It isn&#x27;t sent to the deleted container collection. Therefore, it can&#x27;t be restored later.
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/permanentDelete',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const provisionMigrationContainers = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/provisionMigrationContainers',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/restore',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const unlock = {
  /**
   * `POST /storage/fileStorage/containers/{fileStorageContainer-id}/unlock`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/unlock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/containers/{fileStorageContainer-id}/unlock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/containers/{fileStorageContainer-id}/unlock',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};
