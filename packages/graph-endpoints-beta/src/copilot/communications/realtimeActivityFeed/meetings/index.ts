import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'delete'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings',
    'get'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    'patch'
  >;
  'POST /copilot/communications/realtimeActivityFeed/meetings': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings',
    'post'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    'get'
  >;
  'POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
    'post'
  >;
  'GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'get'
  >;
  'PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'patch'
  >;
  'DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}': Operation<
    '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
    'delete'
  >;
}

/**
 * `DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['realtimeActivityMeeting-id'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/meetings`
 *
 */
export function list(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: {
      path: ['realtimeActivityMeeting-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['body'],
  params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}',
    paramDefs: {
      path: ['realtimeActivityMeeting-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /copilot/communications/realtimeActivityFeed/meetings`
 *
 */
export function create(
  body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings']['body']
): EndpointRequest<
  IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/copilot/communications/realtimeActivityFeed/meetings',
    body,
  };
}

export const transcripts = {
  /**
   * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts`
   *
   */
  list: function list(
    params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['realtimeActivityMeeting-id'],
      },
      params,
    };
  },
  /**
   * `POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts`
   *
   */
  create: function create(
    body: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['body'],
    params?: IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts',
      paramDefs: {
        path: ['realtimeActivityMeeting-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['realtimeActivityMeeting-id', 'realTimeTranscript-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['body'],
    params?: IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
      paramDefs: {
        path: ['realtimeActivityMeeting-id', 'realTimeTranscript-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/copilot/communications/realtimeActivityFeed/meetings/{realtimeActivityMeeting-id}/transcripts/{realTimeTranscript-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['realtimeActivityMeeting-id', 'realTimeTranscript-id'],
      },
      params,
    };
  },
};
