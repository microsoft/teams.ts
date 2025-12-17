import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting',
    'get'
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
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const attendeeReport = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
   *
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  set: function set(
    body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['body'],
    params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
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
   * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
  > {
    return {
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
