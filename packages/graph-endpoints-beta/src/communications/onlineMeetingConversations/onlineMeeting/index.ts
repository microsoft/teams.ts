export * as alternativeRecording from './alternativeRecording';
export * as attendeeReport from './attendeeReport';
export * as broadcastRecording from './broadcastRecording';
export * as recording from './recording';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/onlineMeeting',
    'get'
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
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}
