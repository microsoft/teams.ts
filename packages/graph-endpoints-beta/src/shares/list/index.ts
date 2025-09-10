export * as columns from './columns';
export * as contentTypes from './contentTypes';
export * as createdByUser from './createdByUser';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as permissions from './permissions';
export * as subscriptions from './subscriptions';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list': Operation<
    '/shares/{sharedDriveItem-id}/list',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list': Operation<'/shares/{sharedDriveItem-id}/list', 'get'>;
  'PATCH /shares/{sharedDriveItem-id}/list': Operation<
    '/shares/{sharedDriveItem-id}/list',
    'patch'
  >;
  'GET /shares/{sharedDriveItem-id}/list/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/activities',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/activities',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/drive': Operation<
    '/shares/{sharedDriveItem-id}/list/drive',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/operations': Operation<
    '/shares/{sharedDriveItem-id}/list/operations',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/operations': Operation<
    '/shares/{sharedDriveItem-id}/list/operations',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'patch'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list`
 *
 * Used to access the underlying list
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}/list']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const activities = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/activities`
   *
   * The recent activities that took place within this list.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/activities']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/activities']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/activities',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /shares/{sharedDriveItem-id}/list/activities`
   *
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['parameters']
  ): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/activities']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/activities',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
};

export const drive = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/drive`
   *
   * Allows access to the list as a drive resource with driveItems. Only present on document libraries.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/drive']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/drive']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/drive',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/operations`
   *
   * The collection of long-running operations on the list.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `POST /shares/{sharedDriveItem-id}/list/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/operations',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
   *
   * The collection of long-running operations on the list.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        path: ['sharedDriveItem-id', 'richLongRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/operations/{richLongRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'richLongRunningOperation-id'],
      },
      params,
    };
  },
};
