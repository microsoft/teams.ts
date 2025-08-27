export * as conversation from './conversation';
export * as reactions from './reactions';
export * as replyTo from './replyTo';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    'patch'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies`
 *
 * A collection of messages that are replies to this message and form a threaded discussion.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies',
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
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}`
 *
 * A collection of messages that are replies to this message and form a threaded discussion.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies/{engagementConversationMessage-id}',
    paramDefs: [
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies']['body'],
  params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replies',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}
