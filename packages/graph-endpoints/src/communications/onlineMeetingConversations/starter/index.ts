export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    'patch'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    'get'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
    'post'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo',
    'get'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeetingEngagementConversation-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter`
 *
 * The first message in a Viva Engage conversation.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
    },
    params,
    body,
  };
}

export const conversation = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation`
   *
   * The Viva Engage conversation to which this message belongs. This relationship establishes the thread context for the message.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/conversation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};

export const reactions = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions`
   *
   * A collection of reactions (such as like and smile) that users have applied to this message.
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['body'],
    params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions']['response']
  > {
    return {
      method: 'post',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
   *
   * A collection of reactions (such as like and smile) that users have applied to this message.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
    };
  },
};

export const replyTo = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo`
   *
   * The parent message to which this message is a reply, if it is part of a reply chain.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/starter/replyTo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id'],
      },
      params,
    };
  },
};
