import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
    'get'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
    'post'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
  'DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
}

/**
 * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeeting-id', 'callTranscript-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: {
      path: ['onlineMeeting-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of an online meeting. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callTranscript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['onlineMeeting-id', 'callTranscript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['body'],
  params?: IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetings/{onlineMeeting-id}/transcripts']['response']
> {
  return {
    method: 'post',
    path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts',
    paramDefs: {
      path: ['onlineMeeting-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/content',
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
   * `GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      method: 'put',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetings/{onlineMeeting-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeeting-id', 'callTranscript-id'],
      },
      params,
    };
  },
};
