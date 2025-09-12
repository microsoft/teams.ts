export * as replies from './replies';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
    'post'
  >;
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'channel-id', 'chatMessage-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    paramDefs: {
      path: ['team-id', 'channel-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 * A collection of all the messages in the channel. A navigation property. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'chatMessage-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}',
    paramDefs: {
      path: ['team-id', 'channel-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages',
    paramDefs: {
      path: ['team-id', 'channel-id'],
    },
    params,
    body,
  };
}

export const hostedContents = {
  /**
   * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['team-id', 'channel-id', 'chatMessage-id', 'chatMessageHostedContent-id'],
      },
      params,
    };
  },
};

export const setReaction = {
  /**
   * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
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
   * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/softDelete',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/undoSoftDelete',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/unsetReaction',
      paramDefs: {
        path: ['team-id', 'channel-id', 'chatMessage-id'],
      },
      params,
      body,
    };
  },
};
