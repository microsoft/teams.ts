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
  'GET /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/root/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/root/contentStream',
    'delete'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/root`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root']['response']> {
  return {
    ver: 'beta',
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
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      ver: 'beta',
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
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['PUT /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      ver: 'beta',
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
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/content']['response']> {
    return {
      ver: 'beta',
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

export const contentStream = {
  /**
   * `GET /shares/{sharedDriveItem-id}/root/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/root/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/root/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/root/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /shares/{sharedDriveItem-id}/root/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/root/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/root/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/root/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/root/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id'],
      },
      params,
    };
  },
};
