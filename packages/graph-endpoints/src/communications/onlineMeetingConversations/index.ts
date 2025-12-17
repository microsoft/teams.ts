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
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeetingEngagementConversation-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations`
 *
 * A collection of structured question-and-answer (Q&amp;A) threads in Teams directly associated with online meetings.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations']['parameters']
): EndpointRequest<IEndpoints['GET /communications/onlineMeetingConversations']['response']> {
  return {
    method: 'get',
    path: '/communications/onlineMeetingConversations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}`
 *
 * A collection of structured question-and-answer (Q&amp;A) threads in Teams directly associated with online meetings.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations']['body']
): EndpointRequest<IEndpoints['POST /communications/onlineMeetingConversations']['response']> {
  return {
    method: 'post',
    path: '/communications/onlineMeetingConversations',
    body,
  };
}
