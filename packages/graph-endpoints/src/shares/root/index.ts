import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/root': Operation<'/shares/{sharedDriveItem-id}/root', 'get'>;
  'GET /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/root/content': Operation<
    '/shares/{sharedDriveItem-id}/root/content',
    'delete'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/root`
 *
 * Used to access the underlying driveItem. Deprecated -- use driveItem instead.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root']['response']> {
  return {
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/root',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /shares/{sharedDriveItem-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/root/content',
      paramDefs: {
        query: ['$format'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/root/content',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/root/content`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/root/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
