import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /shares/{sharedDriveItem-id}/items': Operation<'/shares/{sharedDriveItem-id}/items', 'get'>;
  'GET /shares/{sharedDriveItem-id}/items/{driveItem-id}': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}',
    'get'
  >;
  'GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/content': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/content': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
    'delete'
  >;
  'GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'get'
  >;
  'PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'put'
  >;
  'DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream': Operation<
    '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
    'delete'
  >;
}

/**
 * `GET /shares/{sharedDriveItem-id}/items`
 *
 * All driveItems contained in the sharing root. This collection cannot be enumerated.
 */
export function list(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items']['parameters']
): EndpointRequest<IEndpoints['GET /shares/{sharedDriveItem-id}/items']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/items',
    paramDefs: {
      path: ['sharedDriveItem-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /shares/{sharedDriveItem-id}/items/{driveItem-id}`
 *
 * All driveItems contained in the sharing root. This collection cannot be enumerated.
 */
export function get(
  params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}',
    paramDefs: {
      path: ['sharedDriveItem-id', 'driveItem-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const content = {
  /**
   * `GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
      paramDefs: {
        query: ['$format'],
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
      paramDefs: {
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/content`
   *
   * The content stream, if the item represents a file. The content property will have a potentially breaking change in behavior in the future. It will stream content directly instead of redirecting. To proactively opt in to the new behavior ahead of time, use the contentStream property instead.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
    };
  },
};

export const contentStream = {
  /**
   * `GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  get: function get(
    params?: IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
    };
  },
  /**
   * `PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  set: function set(
    body: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['body'],
    params?: IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
      paramDefs: {
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream`
   *
   * The content stream, if the item represents a file.
   */
  del: function del(
    params?: IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/shares/{sharedDriveItem-id}/items/{driveItem-id}/contentStream',
      paramDefs: {
        header: ['If-Match'],
        path: ['sharedDriveItem-id', 'driveItem-id'],
      },
      params,
    };
  },
};
