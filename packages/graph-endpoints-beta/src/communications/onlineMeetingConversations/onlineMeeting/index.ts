import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'get'
  >;
  'PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'put'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    'get'
  >;
  'PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    'put'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    'get'
  >;
  'PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    'put'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
    'get'
  >;
  'PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
    'put'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
    'delete'
  >;
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting`
 *
 * The online meeting associated with the conversation.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const alternativeRecording = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
   *
   * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};

export const attendeeReport = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
   *
   * The content stream of the attendee report of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};

export const broadcastRecording = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
   *
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
   *
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};

export const recording = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
  /**
   * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'put',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording`
   *
   * The content stream of the recording of a Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/recording',
      paramDefs: {
        header: ['If-Match'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};
