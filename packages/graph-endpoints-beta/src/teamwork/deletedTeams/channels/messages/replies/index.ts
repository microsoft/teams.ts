import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat',
    'post'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'get'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'post'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'chatMessage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['deletedTeam-id', 'channel-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

export const forwardToChat = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat`
   *
   * Forward a chat message, a channel message, or a channel message reply to a chat.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const hostedContents = {
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'deletedTeam-id',
          'channel-id',
          'chatMessage-id',
          'chatMessage-id1',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: [
          'deletedTeam-id',
          'channel-id',
          'chatMessage-id',
          'chatMessage-id1',
          'chatMessageHostedContent-id',
        ],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'deletedTeam-id',
          'channel-id',
          'chatMessage-id',
          'chatMessage-id1',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
};

export const replyWithQuote = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote`
   *
   * Reply with quote to a single chat message or multiple chat messages in a chat.
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};

export const setReaction = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
    params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
      paramDefs: {
        path: ['deletedTeam-id', 'channel-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};
