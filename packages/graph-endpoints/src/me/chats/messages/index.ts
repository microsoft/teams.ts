export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/messages': Operation<'/me/chats/{chat-id}/messages', 'get'>;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/messages': Operation<'/me/chats/{chat-id}/messages', 'post'>;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/messages']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/messages',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/messages']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/messages']['response']> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/messages',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const hostedContents = {
  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'get',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['chat-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const setReaction = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      method: 'post',
      path: '/me/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
