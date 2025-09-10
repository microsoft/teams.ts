export * as createdByUser from './createdByUser';
export * as driveItem from './driveItem';
export * as items from './items';
export * as lastModifiedByUser from './lastModifiedByUser';
export * as doList from './list';
export * as permission from './permission';
export * as root from './root';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'delete'>;
  'GET /shares': Operation<'/shares', 'get'>;
  'GET /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'get'>;
  'PATCH /shares/{sharedDriveItem-id}': Operation<'/shares/{sharedDriveItem-id}', 'patch'>;
  'POST /shares': Operation<'/shares', 'post'>;
  'GET /shares/{sharedDriveItem-id}/listItem': Operation<
    '/shares/{sharedDriveItem-id}/listItem',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/site': Operation<'/shares/{sharedDriveItem-id}/site', 'get'>;
}

/**
 * `DELETE /shares/{sharedDriveItem-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['sharedDriveItem-id'],
    },
    params,
  };
}

/**
 * `GET /shares`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function list(
  params?: IEndpoints['GET /shares']['parameters']
): EndpointRequest<IEndpoints['GET /shares']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /shares/{sharedDriveItem-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /shares/{sharedDriveItem-id}']['body'],
  params?: IEndpoints['PATCH /shares/{sharedDriveItem-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /shares/{sharedDriveItem-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/shares/{sharedDriveItem-id}',
    paramDefs: {
      path: ['sharedDriveItem-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /shares`
 *
 */
export function create(
  body: IEndpoints['POST /shares']['body']
): EndpointRequest<IEndpoints['POST /shares']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/shares',
    body,
  };
}

export const listItem = {
  /**
   * `GET /shares/{sharedDriveItem-id}/listItem`
   *
   * Used to access the underlying listItem
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/listItem']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/listItem']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/listItem',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};

export const site = {
  /**
   * `GET /shares/{sharedDriveItem-id}/site`
   *
   * Used to access the underlying site
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/site']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/site']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/site',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
