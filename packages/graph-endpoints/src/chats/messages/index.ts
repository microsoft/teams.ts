export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/messages': Operation<'/chats/{chat-id}/messages', 'get'>;
  'GET /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/messages/{chatMessage-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/messages': Operation<'/chats/{chat-id}/messages', 'post'>;
  'GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages`
 *
 * Retrieve the list of messages in a chat. This method supports federation. To list chat messages in application context, the request must be made from the tenant that the channel owner belongs to (represented by the tenantId property on the channel).
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/messages']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/messages',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/messages/{chatMessage-id}`
 *
 * Retrieve a single message or a message reply in a channel or a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}']['response']> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['chat-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/messages`
 *
 * Send a new chatMessage in the specified chat. This API can&#x27;t create a new chat; you must use the list chats method to retrieve the ID of an existing chat before you can create a chat message.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/messages']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/messages']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/messages']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/messages',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const hostedContents = {
  /**
   * `GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Retrieve the list of chatMessageHostedContent objects from a message. This API only lists the hosted content objects. To get the content bytes, see get chatmessage hosted content.
   */
  list: function list(
    params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'get',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Retrieve the properties and relationships of chatMessageHostedContent object.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
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
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/setReaction',
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
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['chat-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
