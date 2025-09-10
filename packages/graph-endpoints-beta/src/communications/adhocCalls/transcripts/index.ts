import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts',
    'get'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /communications/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts',
    'post'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
  'DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
  'DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
}

/**
 * `DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['adhocCall-id', 'callTranscript-id'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls/{adhocCall-id}/transcripts`
 *
 * The transcripts of a call. Read-only.
 */
export function list(
  params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['adhocCall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of a call. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callTranscript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callTranscript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/adhocCalls/{adhocCall-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/transcripts']['body'],
  params?: IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/adhocCalls/{adhocCall-id}/transcripts']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['adhocCall-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        header: ['If-Match'],
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
};

export const metadataContent = {
  /**
   * `GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
};
