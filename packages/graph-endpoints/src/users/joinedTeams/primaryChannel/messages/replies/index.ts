import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'get'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
    'post'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
    'delete'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
    'post'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['user-id', 'team-id', 'chatMessage-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 * Replies for a specified message. Supports $expand for channel messages.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}',
    paramDefs: {
      path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies',
    paramDefs: {
      path: ['user-id', 'team-id', 'chatMessage-id'],
    },
    params,
    body,
  };
}

export const hostedContents = {
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents',
      paramDefs: {
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   * Content in a message hosted by Microsoft Teams - for example, images or code snippets.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'user-id',
          'team-id',
          'chatMessage-id',
          'chatMessage-id1',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'patch',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        path: [
          'user-id',
          'team-id',
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
   * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}']['response']
  > {
    return {
      method: 'delete',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/hostedContents/{chatMessageHostedContent-id}',
      paramDefs: {
        header: ['If-Match'],
        path: [
          'user-id',
          'team-id',
          'chatMessage-id',
          'chatMessage-id1',
          'chatMessageHostedContent-id',
        ],
      },
      params,
    };
  },
};

export const setReaction = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
      paramDefs: {
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};

export const softDelete = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
   *
   * Delete a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
      paramDefs: {
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const undoSoftDelete = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete`
   *
   * Undo soft deletion of a single chatMessage or a chat message reply in a channel or a chat.
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/undoSoftDelete',
      paramDefs: {
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
    };
  },
};

export const unsetReaction = {
  /**
   * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
    params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
  > {
    return {
      method: 'post',
      path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
      paramDefs: {
        path: ['user-id', 'team-id', 'chatMessage-id', 'chatMessage-id1'],
      },
      params,
      body,
    };
  },
};
