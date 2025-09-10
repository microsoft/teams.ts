import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /sites/{site-id}/onenote/resources': Operation<'/sites/{site-id}/onenote/resources', 'get'>;
  'GET /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /sites/{site-id}/onenote/resources': Operation<
    '/sites/{site-id}/onenote/resources',
    'post'
  >;
  'GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
}

/**
 * `DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['site-id', 'onenoteResource-id'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /sites/{site-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/resources',
    paramDefs: {
      path: ['site-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['site-id', 'onenoteResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /sites/{site-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['site-id', 'onenoteResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /sites/{site-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /sites/{site-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /sites/{site-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /sites/{site-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/sites/{site-id}/onenote/resources',
    paramDefs: {
      path: ['site-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  get: function get(
    params?: IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['site-id', 'onenoteResource-id'],
      },
      params,
    };
  },
  /**
   * `PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  set: function set(
    body: IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['body'],
    params?: IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /sites/{site-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/sites/{site-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['site-id', 'onenoteResource-id'],
      },
      params,
      body,
    };
  },
};
