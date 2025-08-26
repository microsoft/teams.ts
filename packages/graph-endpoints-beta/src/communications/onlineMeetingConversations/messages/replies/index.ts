export * as conversation from './conversation';
export * as reactions from './reactions';
export * as replyTo from './replyTo';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
    'patch'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
      { name: 'engagementConversationMessage-id1', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies`
 *
 * A collection of messages that are replies to this message and form a threaded discussion.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies',
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
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}`
 *
 * A collection of messages that are replies to this message and form a threaded discussion.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
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

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies/{engagementConversationMessage-id1}',
    paramDefs: [
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
      { name: 'engagementConversationMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies']['body'],
  params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replies',
    paramDefs: [
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
      { name: 'engagementConversationMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
