import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts',
    'get'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts',
    'post'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
  'DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
}

/**
 * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting and an ad hoc call. This API supports the retrieval of call transcripts from private chat meetings and channel meetings, and ad hoc calls including PSTN, 1:1, and group calls. Private channel meetings are not supported.  Retrieving the transcript returns the metadata of the single transcript associated with an online meeting or an ad hoc call. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting and an ad hoc call. This API supports the retrieval of call transcripts from private chat meetings and channel meetings, and ad hoc calls including PSTN, 1:1, and group calls. Private channel meetings are not supported.  Retrieving the transcript returns the metadata of the single transcript associated with an online meeting or an ad hoc call. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts']['body'],
  params?: IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['user-id', 'adhocCall-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
};

export const metadataContent = {
  /**
   * `GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
};
