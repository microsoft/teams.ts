export * as columns from './columns';
export * as migrationJobs from './migrationJobs';
export * as permissions from './permissions';
export * as recycleBin from './recycleBin';
export * as sharePointGroups from './sharePointGroups';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'delete'
  >;
  'GET /storage/fileStorage/deletedContainers': Operation<
    '/storage/fileStorage/deletedContainers',
    'get'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'get'
  >;
  'PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    'patch'
  >;
  'POST /storage/fileStorage/deletedContainers': Operation<
    '/storage/fileStorage/deletedContainers',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
    'post'
  >;
  'GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive',
    'get'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore',
    'post'
  >;
  'POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock': Operation<
    '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock',
    'post'
  >;
}

/**
 * `DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['fileStorageContainer-id'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers`
 *
 * The collection of deleted fileStorageContainer resources.
 */
export function list(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers']['parameters']
): EndpointRequest<IEndpoints['GET /storage/fileStorage/deletedContainers']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 * The collection of deleted fileStorageContainer resources.
 */
export function get(
  params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: {
      path: ['fileStorageContainer-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['body'],
  params?: IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /storage/fileStorage/deletedContainers/{fileStorageContainer-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}',
    paramDefs: {
      path: ['fileStorageContainer-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /storage/fileStorage/deletedContainers`
 *
 */
export function create(
  body: IEndpoints['POST /storage/fileStorage/deletedContainers']['body']
): EndpointRequest<IEndpoints['POST /storage/fileStorage/deletedContainers']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/storage/fileStorage/deletedContainers',
    body,
  };
}

export const activate = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate`
   *
   * Activate a fileStorageContainer object. A fileStorageContainer object is created in an inactive state, as indicated by the status property. A container that isn&#x27;t activated within 24 hours after creation is automatically deleted. Upon activation, the value of the status property changes from inactive to active. A file storage container can be activated by calling this API or any API that updates or modifies it or its content. For example, uploading a file to a file storage container activates it. It&#x27;s also activated when you add permissions to it or update them, or create a custom property on it.
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/activate',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const drive = {
  /**
   * `GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive`
   *
   * The drive of the resource fileStorageContainer. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/drive',
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
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock`
   *
   */
  create: function create(
    body: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['body'],
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/lock',
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
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete`
   *
   * Permanently delete a fileStorageContainer object. Deleting a file storage container with this method permanently removes it. It isn&#x27;t sent to the deleted container collection. Therefore, it can&#x27;t be restored later.
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/permanentDelete',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const provisionMigrationContainers = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/provisionMigrationContainers',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const restore = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/restore',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};

export const unlock = {
  /**
   * `POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock`
   *
   */
  create: function create(
    params?: IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/storage/fileStorage/deletedContainers/{fileStorageContainer-id}/unlock',
      paramDefs: {
        path: ['fileStorageContainer-id'],
      },
      params,
    };
  },
};
