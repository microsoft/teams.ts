import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    'get'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /me/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    'post'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
  'DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
}

/**
 * `DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'callTranscript-id'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 * Retrieve a callTranscript object associated with a scheduled onlineMeeting and an ad hoc call. This API supports the retrieval of call transcripts from private chat meetings and channel meetings, and ad hoc calls including PSTN, 1:1, and group calls. Private channel meetings are not supported.  Retrieving the transcript returns the metadata of the single transcript associated with an online meeting or an ad hoc call. Retrieving the content of the transcript returns the stream of text associated with the transcript.
 */
export function list(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callTranscript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callTranscript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
};

export const metadataContent = {
  /**
   * `GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
};
