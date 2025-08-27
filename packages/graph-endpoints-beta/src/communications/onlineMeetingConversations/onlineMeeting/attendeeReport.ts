import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
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
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport`
 *
 * The content stream of the attendee report of a Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/attendeeReport',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}
