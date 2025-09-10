export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/forwardToChat',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'teamTemplateDefinition-id',
          'channel-id',
          'chatMessage-id',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: [
          'teamTemplateDefinition-id',
          'channel-id',
          'chatMessage-id',
          'chatMessageHostedContent-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'teamTemplateDefinition-id',
          'channel-id',
          'chatMessage-id',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/replyWithQuote',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
