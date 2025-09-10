import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/driveItem': Operation<
    '/shares/{sharedDriveItem-id}/driveItem',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/content',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/driveItem/content',
    'delete'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/driveItem`
 *
 * Access a shared DriveItem or a collection of shared items by using a shareId or sharing URL. To use a sharing URL with this API, your app needs to transform the URL into a sharing token.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/driveItem',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /shares/{sharedDriveItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/driveItem/content']['response']> {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<IEndpoints['PUT /shares/{sharedDriveItem-id}/driveItem/content']['response']> {
    return {
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/driveItem/content',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/driveItem/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/driveItem/content']['response']
  > {
    return {
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/driveItem/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
