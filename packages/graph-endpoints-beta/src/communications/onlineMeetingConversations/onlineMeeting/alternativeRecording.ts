import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'get'
  >;
  'PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    'put'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording`
 *
 * The content stream of the alternative recording of a Microsoft Teams live event. Read-only.
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/alternativeRecording',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}
