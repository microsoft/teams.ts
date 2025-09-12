export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/messages': Operation<
    '/teams/{team-id}/primaryChannel/messages',
    'get'
  >;
  'GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teams/{team-id}/primaryChannel/messages': Operation<
    '/teams/{team-id}/primaryChannel/messages',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/forwardToChat': Operation<
    '/teams/{team-id}/primaryChannel/messages/forwardToChat',
    'post'
  >;
  'GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/replyWithQuote': Operation<
    '/teams/{team-id}/primaryChannel/messages/replyWithQuote',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction': Operation<
    '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/messages`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/messages',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages`
 *
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/messages']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/forwardToChat',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['team-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['team-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/replyWithQuote',
      paramDefs: {
        path: ['team-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/setReaction',
      paramDefs: {
        path: ['team-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['team-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['team-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teams/{team-id}/primaryChannel/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['team-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
