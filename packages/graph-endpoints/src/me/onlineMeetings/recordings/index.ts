import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings',
    'get'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/recordings': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 * Get a callRecording object associated with a scheduled onlineMeeting. This API supports the retrieval of call recordings from private chat meetings and channel meetings. However, private channel meetings are not supported at this time. For a recording, this API returns the metadata of the single recording associated with the online meeting. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings']['response']> {
  return {
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 * The recordings of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callRecording-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/recordings']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/recordings']['response']
> {
  return {
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/recordings',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callRecording-id'],
      },
      params,
    };
  },
};
