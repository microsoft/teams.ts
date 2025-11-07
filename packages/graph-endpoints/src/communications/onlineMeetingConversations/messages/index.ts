export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    'patch'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages',
    'post'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation',
    'get'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions',
    'get'
  >;
  'POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions',
    'post'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
    'get'
  >;
  'PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
    'patch'
  >;
  'DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
    'delete'
  >;
  'GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo': Operation<
    '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo',
    'get'
  >;
}

/**
 * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages`
 *
 * The messages in a Viva Engage conversation.
 */
export function list(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}`
 *
 * The messages in a Viva Engage conversation.
 */
export function get(
  params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['body'],
  params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages']['body'],
  params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages']['response']
> {
  return {
    method: 'post',
    path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages',
    paramDefs: {
      path: ['onlineMeetingEngagementConversation-id'],
    },
    params,
    body,
  };
}

export const conversation = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation`
   *
   * The Viva Engage conversation to which this message belongs. This relationship establishes the thread context for the message.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/conversation',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
      },
      params,
    };
  },
};

export const reactions = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions`
   *
   * Get a list of the engagementConversationMessageReaction objects and their properties for an engagementConversationMessage in an online meeting.
   */
  list: function list(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions`
   *
   */
  create: function create(
    body: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions']['body'],
    params?: IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions']['response']
  > {
    return {
      method: 'post',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions',
      paramDefs: {
        path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}`
   *
   * A collection of reactions (such as like and smile) that users have applied to this message.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessage-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['body'],
    params?: IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessage-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/reactions/{engagementConversationMessageReaction-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'onlineMeetingEngagementConversation-id',
          'engagementConversationMessage-id',
          'engagementConversationMessageReaction-id',
        ],
      },
      params,
    };
  },
};

export const replyTo = {
  /**
   * `GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo`
   *
   * The parent message to which this message is a reply, if it is part of a reply chain.
   */
  get: function get(
    params?: IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo']['response']
  > {
    return {
      method: 'get',
      path: '/communications/onlineMeetingConversations/{onlineMeetingEngagementConversation-id}/messages/{engagementConversationMessage-id}/replyTo',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['onlineMeetingEngagementConversation-id', 'engagementConversationMessage-id'],
      },
      params,
    };
  },
};
