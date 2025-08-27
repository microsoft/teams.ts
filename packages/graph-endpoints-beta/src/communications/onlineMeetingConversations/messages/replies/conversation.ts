import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation',
    'get'
  >;
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation`
 *
 * The Viva Engage conversation to which this message belongs. This relationship establishes the thread context for the message.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}/conversation',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
      { name: 'engagementConversationMessage-id1', in: 'path' },
    ],
    params,
  };
}
