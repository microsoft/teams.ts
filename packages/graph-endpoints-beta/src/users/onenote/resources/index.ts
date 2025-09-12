import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /users/{user-id}/onenote/resources': Operation<'/users/{user-id}/onenote/resources', 'get'>;
  'GET /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /users/{user-id}/onenote/resources': Operation<
    '/users/{user-id}/onenote/resources',
    'post'
  >;
  'GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
  'DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content': Operation<
    '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'onenoteResource-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/resources',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['user-id', 'onenoteResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/onenote/resources/{onenoteResource-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['user-id', 'onenoteResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/onenote/resources']['body'],
  params?: IEndpoints['POST /users/{user-id}/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/onenote/resources']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/onenote/resources',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['user-id', 'onenoteResource-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['body'],
    params?: IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['user-id', 'onenoteResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content`
   *
   * The content of the resource.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'onenoteResource-id'],
      },
      params,
    };
  },
};
