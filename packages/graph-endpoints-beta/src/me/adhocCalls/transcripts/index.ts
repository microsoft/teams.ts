import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'delete'
  >;
  'GET /me/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts',
    'get'
  >;
  'GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'get'
  >;
  'PATCH /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    'patch'
  >;
  'POST /me/adhocCalls/{adhocCall-id}/transcripts': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts',
    'post'
  >;
  'GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'get'
  >;
  'PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'put'
  >;
  'DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
    'delete'
  >;
  'GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'get'
  >;
  'PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'put'
  >;
  'DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent': Operation<
    '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
    'delete'
  >;
}

/**
 * `DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['adhocCall-id', 'callTranscript-id'],
    },
    params,
  };
}

/**
 * `GET /me/adhocCalls/{adhocCall-id}/transcripts`
 *
 * The transcripts of a call. Read-only.
 */
export function list(
  params?: IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['adhocCall-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 * The transcripts of a call. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callTranscript-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['body'],
  params?: IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}',
    paramDefs: {
      path: ['adhocCall-id', 'callTranscript-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/adhocCalls/{adhocCall-id}/transcripts`
 *
 */
export function create(
  body: IEndpoints['POST /me/adhocCalls/{adhocCall-id}/transcripts']['body'],
  params?: IEndpoints['POST /me/adhocCalls/{adhocCall-id}/transcripts']['parameters']
): EndpointRequest<IEndpoints['POST /me/adhocCalls/{adhocCall-id}/transcripts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/adhocCalls/{adhocCall-id}/transcripts',
    paramDefs: {
      path: ['adhocCall-id'],
    },
    params,
    body,
  };
}

export const content = {
  /**
   * `GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['body'],
    params?: IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content`
   *
   * The content of the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/content',
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
   * `GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['body'],
    params?: IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent`
   *
   * The time-aligned metadata of the utterances in the transcript. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/adhocCalls/{adhocCall-id}/transcripts/{callTranscript-id}/metadataContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['adhocCall-id', 'callTranscript-id'],
      },
      params,
    };
  },
};
