import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo',
    'get'
  >;
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo`
 *
 * The parent message to which this message is a reply, if it is part of a reply chain.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}/replyTo',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
  };
}
