import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings',
    'get'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /app/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings',
    'post'
  >;
  'GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'put'
  >;
  'DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 * The recordings of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 * The recordings of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /app/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
  params?: IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /app/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
  /**
   * `PUT /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
    params?: IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/app/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
};
