import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'delete'
  >;
  'GET /me/onenote/resources': Operation<'/me/onenote/resources', 'get'>;
  'GET /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'get'
  >;
  'PATCH /me/onenote/resources/{onenoteResource-id}': Operation<
    '/me/onenote/resources/{onenoteResource-id}',
    'patch'
  >;
  'POST /me/onenote/resources': Operation<'/me/onenote/resources', 'post'>;
  'GET /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'get'
  >;
  'PUT /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'put'
  >;
  'DELETE /me/onenote/resources/{onenoteResource-id}/content': Operation<
    '/me/onenote/resources/{onenoteResource-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /me/onenote/resources/{onenoteResource-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onenoteResource-id'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/resources`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/onenote/resources']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/resources']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/resources',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onenote/resources/{onenoteResource-id}`
 *
 * The image and other file resources in OneNote pages. Getting a resources collection isn&#x27;t supported, but you can get the binary content of a specific resource. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'get',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['onenoteResource-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onenote/resources/{onenoteResource-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['body'],
  params?: IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/onenote/resources/{onenoteResource-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/onenote/resources/{onenoteResource-id}',
    paramDefs: {
      path: ['onenoteResource-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onenote/resources`
 *
 */
export function create(
  body: IEndpoints['POST /me/onenote/resources']['body']
): EndpointRequest<IEndpoints['POST /me/onenote/resources']['response']> {
  return {
    method: 'post',
    path: '/me/onenote/resources',
    body,
  };
}

export const content = {
  /**
   * `GET /me/onenote/resources/{onenoteResource-id}/content`
   *
   * Retrieve the binary data of a file or image resource object.
   */
  get: function get(
    params?: IEndpoints['GET /me/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/me/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['onenoteResource-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onenote/resources/{onenoteResource-id}/content`
   *
   * The content stream
   */
  set: function set(
    body: IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['body'],
    params?: IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/me/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        path: ['onenoteResource-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onenote/resources/{onenoteResource-id}/content`
   *
   * The content stream
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onenote/resources/{onenoteResource-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/me/onenote/resources/{onenoteResource-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onenoteResource-id'],
      },
      params,
    };
  },
};
