export * as messages from './messages';
export * as onlineMeeting from './onlineMeeting';
export * as starter from './starter';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations': Operation<
    '/communications/onlineMeetingConversations',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    'patch'
  >;
  'POST /communications/onlineMeetingConversations': Operation<
    '/communications/onlineMeetingConversations',
    'post'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations`
 *
 * A collection of structured question-and-answer (Q&amp;A) thread in Teams directly associated with online meetings.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations']['parameters']
): EndpointRequest<IEndpoints['GET /communications/onlineMeetingConversations']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}`
 *
 * A collection of structured question-and-answer (Q&amp;A) thread in Teams directly associated with online meetings.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'onlineMeetingEngagementConversation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: [{ name: 'onlineMeetingEngagementConversation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations']['body'],
  params?: IEndpoints['POST /communications/onlineMeetingConversations']['parameters']
): EndpointRequest<IEndpoints['POST /communications/onlineMeetingConversations']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/onlineMeetingConversations',
    paramDefs: [],
    params,
    body,
  };
}
