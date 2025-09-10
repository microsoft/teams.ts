export * as driveItem from './driveItem';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'get'
  >;
  'PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    'patch'
  >;
  'POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    'post'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
    'get'
  >;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities`
 *
 * The list of recent activities that took place on this item.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 * The list of recent activities that took place on this item.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities`
 *
 */
export function create(
  body: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['body'],
  params?: IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['parameters']
): EndpointRequest<
  IEndpoints['POST /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id'],
    },
    params,
    body,
  };
}

export const listItem = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem`
   *
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};
