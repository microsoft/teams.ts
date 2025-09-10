import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat',
    'post'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'get'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'post'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/forwardToChat',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/replyWithQuote',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};
