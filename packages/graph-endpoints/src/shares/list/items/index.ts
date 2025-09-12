export * as createdByUser from './createdByUser';
export * as documentSetVersions from './documentSetVersions';
export * as driveItem from './driveItem';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items': Operation<
    '/shares/{sharedDriveItem-id}/list/items',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items': Operation<
    '/shares/{sharedDriveItem-id}/list/items',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics',
    'get'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
    'patch'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
    'delete'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'listItem-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items`
 *
 * All items contained in the list.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/list/items']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 * All items contained in the list.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}']['response']
> {
  return {
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['parameters']
): EndpointRequest<IEndpoints['POST /shares/{sharedDriveItem-id}/list/items']['response']> {
  return {
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

export const analytics = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics`
   *
   * Analytics about the view activities that took place on this item.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/analytics',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
    };
  },
};

export const createLink = {
  /**
   * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink`
   *
   */
  create: function create(
    body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['body'],
    params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink']['response']
  > {
    return {
      method: 'post',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/createLink',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
};

export const fields = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields`
   *
   * The values of the columns set on this list item.
   */
  list: function list(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['body'],
    params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'patch',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields']['response']
  > {
    return {
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/fields',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'listItem-id'],
      },
      params,
    };
  },
};
