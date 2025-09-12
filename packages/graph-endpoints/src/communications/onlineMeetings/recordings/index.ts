import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 * The recordings of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 * The recordings of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
};
