export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/primaryChannel/messages': Operation<
    '/groups/{group-id}/team/primaryChannel/messages',
    'get'
  >;
  'GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages': Operation<
    '/groups/{group-id}/team/primaryChannel/messages',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/forwardToChat',
    'post'
  >;
  'GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/replyWithQuote',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/messages`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/messages',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      path: ['group-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      path: ['group-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/forwardToChat',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['group-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['group-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['group-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['group-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/replyWithQuote',
      paramDefs: {
        path: ['group-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction',
      paramDefs: {
        path: ['group-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['group-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['group-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['group-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
