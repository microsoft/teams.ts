export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages',
    'get'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/forwardToChat',
    'post'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/replyWithQuote',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages`
 *
 * Retrieve the list of messages (without the replies) in a channel of a team. To get the replies for a message, call the list message replies or the get message reply API. This method supports federation. To list channel messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * Retrieve a single message or a message reply in a channel or a chat.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * Update a chatMessage object. You can update all the properties of chatMessage in delegated permissions scenarios, except for the policyViolation property and read-only properties. The policyViolation property is the only property that can be updated in application permissions scenarios. Updating works only for chats where conversation members are Microsoft Teams users. If one of the members is using Skype, the operation fails. This method doesn&#x27;t support federation. Only the user in the tenant who sent the message can perform data loss prevention (DLP) updates on the specified chat message.
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages`
 *
 * Send a new chatMessage in the specified channel.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/forwardToChat',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content.s
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/replyWithQuote',
      paramDefs: {
        path: ['team-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
