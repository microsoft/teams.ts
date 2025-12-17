import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'delete'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings',
    'get'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'get'
  >;
  'PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    'patch'
  >;
  'POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings',
    'post'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'put'
  >;
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'adhocCall-id', 'callRecording-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings`
 *
 * Get a callRecording object associated with a scheduled online meeting and an ad hoc call. This API supports the retrieval of call recordings from private chat meetings, channel meetings, ad hoc calls, including PSTN, 1:1, and group calls. Private channel meetings are not supported. For a recording, this API returns the metadata of the single recording associated with the online meeting or an ad hoc call. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 * Get a callRecording object associated with a scheduled online meeting and an ad hoc call. This API supports the retrieval of call recordings from private chat meetings, channel meetings, ad hoc calls, including PSTN, 1:1, and group calls. Private channel meetings are not supported. For a recording, this API returns the metadata of the single recording associated with the online meeting or an ad hoc call. For the content of a recording, this API returns the stream of bytes associated with the recording.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id', 'callRecording-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id', 'callRecording-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings']['body'],
  params?: IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/recordings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * Get a callRecording object associated with a scheduled online meeting and an ad hoc call. This API supports the retrieval of call recordings from private chat meetings, channel meetings, ad hoc calls, including PSTN, 1:1, and group calls. Private channel meetings are not supported. For a recording, this API returns the metadata of the single recording associated with the online meeting or an ad hoc call. For the content of a recording, this API returns the stream of bytes associated with the recording.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callRecording-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['body'],
    params?: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callRecording-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content`
   *
   * The content of the recording. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/recordings/{callRecording-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'adhocCall-id', 'callRecording-id'],
      },
      params,
    };
  },
};
