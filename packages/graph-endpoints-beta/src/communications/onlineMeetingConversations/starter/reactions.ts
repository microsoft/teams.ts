import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'patch'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessageReaction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions`
 *
 * A collection of reactions (such as like and smile) that users have applied to this message.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
 *
 * A collection of reactions (such as like and smile) that users have applied to this message.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessageReaction-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    paramDefs: [
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessageReaction-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['body'],
  params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}
