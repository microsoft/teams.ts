import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
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
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
 *
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
  };
}

/**
 * `PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording`
 *
 */
export function set(
  body: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['body'],
  params?: IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['parameters']
): EndpointRequest<
  IEndpoints['PUT /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting/broadcastRecording',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}
