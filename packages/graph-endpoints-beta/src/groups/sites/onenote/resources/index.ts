import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/resources': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources',
    'get'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /groups/{group-id}/sites/{site-id}/onenote/resources': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources',
    'post'
  >;
  'GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
  'DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'site-id', 'onenoteResource-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources',
    paramDefs: {
      path: ['group-id', 'site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'onenoteResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['group-id', 'site-id', 'onenoteResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/sites/{site-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/sites/{site-id}/onenote/resources']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/sites/{site-id}/onenote/resources',
    paramDefs: {
      path: ['group-id', 'site-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenoteResource-id'],
      },
      params,
    };
  },
  /**
   * `PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  set: function set(
    body: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['body'],
    params?: IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['group-id', 'site-id', 'onenoteResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'site-id', 'onenoteResource-id'],
      },
      params,
    };
  },
};
