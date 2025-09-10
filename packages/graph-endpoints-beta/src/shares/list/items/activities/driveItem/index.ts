import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
    'delete'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem`
 *
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem',
    paramDefs: {
      path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
      paramDefs: {
        query: ['$format'],
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/list/items/{listItem-id}/activities/{itemActivityOLD-id}/driveItem/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'listItem-id', 'itemActivityOLD-id'],
      },
      params,
    };
  },
};
