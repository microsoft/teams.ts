import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/recordings': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings',
    'get'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /communications/adhocCalls/{adhocCall-id}/recordings': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings',
    'post'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'put'
  >;
  'DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['adhocCall-id', 'callRecording-id'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls/{adhocCall-id}/recordings`
 *
 * The recordings of a call. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls/{adhocCall-id}/recordings',
    paramDefs: {
      path: ['adhocCall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 * The recordings of a call. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callRecording-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callRecording-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/adhocCalls/{adhocCall-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/recordings']['body'],
  params?: IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/adhocCalls/{adhocCall-id}/recordings',
    paramDefs: {
      path: ['adhocCall-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callRecording-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['body'],
    params?: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callRecording-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['adhocCall-id', 'callRecording-id'],
      },
      params,
    };
  },
};
