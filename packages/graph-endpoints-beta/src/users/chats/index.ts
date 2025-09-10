export * as installedApps from './installedApps';
export * as members from './members';
export * as messages from './messages';
export * as pinnedMessages from './pinnedMessages';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}': Operation<
    '/users/{user-id}/chats/{chat-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats': Operation<'/users/{user-id}/chats', 'get'>;
  'GET /users/{user-id}/chats/{chat-id}': Operation<'/users/{user-id}/chats/{chat-id}', 'get'>;
  'PATCH /users/{user-id}/chats/{chat-id}': Operation<'/users/{user-id}/chats/{chat-id}', 'patch'>;
  'POST /users/{user-id}/chats': Operation<'/users/{user-id}/chats', 'post'>;
  'POST /users/{user-id}/chats/{chat-id}/completeMigration': Operation<
    '/users/{user-id}/chats/{chat-id}/completeMigration',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/hideForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/hideForUser',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
  'DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview': Operation<
    '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'POST /users/{user-id}/chats/{chat-id}/markChatReadForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/markChatReadForUser',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/markChatUnreadForUser',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/operations': Operation<
    '/users/{user-id}/chats/{chat-id}/operations',
    'get'
  >;
  'POST /users/{user-id}/chats/{chat-id}/operations': Operation<
    '/users/{user-id}/chats/{chat-id}/operations',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/permissionGrants': Operation<
    '/users/{user-id}/chats/{chat-id}/permissionGrants',
    'get'
  >;
  'POST /users/{user-id}/chats/{chat-id}/permissionGrants': Operation<
    '/users/{user-id}/chats/{chat-id}/permissionGrants',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/sendActivityNotification': Operation<
    '/users/{user-id}/chats/{chat-id}/sendActivityNotification',
    'post'
  >;
  'POST /users/{user-id}/chats/{chat-id}/unhideForUser': Operation<
    '/users/{user-id}/chats/{chat-id}/unhideForUser',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'chat-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats`
 *
 * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}`
 *
 * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: {
      path: ['user-id', 'chat-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}',
    paramDefs: {
      path: ['user-id', 'chat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const completeMigration = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/completeMigration`
   *
   */
  create: function create(
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/completeMigration']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/completeMigration']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/completeMigration',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
    };
  },
};

export const hideForUser = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/hideForUser`
   *
   * Hide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/hideForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/hideForUser',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const lastMessagePreview = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   * Preview of the last message sent in the chat. Null if no messages are sent in the chat. Currently, only the list chats operation supports this property.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/lastMessagePreview']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'chat-id'],
      },
      params,
    };
  },
};

export const markChatReadForUser = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/markChatReadForUser`
   *
   * Mark a chat as read for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatReadForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/markChatReadForUser',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const markChatUnreadForUser = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser`
   *
   * Mark a chat as unread for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/markChatUnreadForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/markChatUnreadForUser',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const operations = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/operations`
   *
   * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/chats/{chat-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/operations',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['user-id', 'chat-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'chat-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/permissionGrants`
   *
   * A collection of permissions granted to apps for the chat.
   */
  list: function list(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['user-id', 'chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /users/{user-id}/chats/{chat-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/permissionGrants']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/permissionGrants',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['user-id', 'chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/users/{user-id}/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['user-id', 'chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const removeAllAccessForUser = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser`
   *
   * Remove access to a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/removeAllAccessForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/removeAllAccessForUser',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const sendActivityNotification = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/sendActivityNotification`
   *
   * Send an activity feed notification in the scope of a chat. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/sendActivityNotification']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/sendActivityNotification',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};

export const unhideForUser = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/unhideForUser`
   *
   * Unhide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/unhideForUser']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/unhideForUser',
      paramDefs: {
        path: ['user-id', 'chat-id'],
      },
      params,
      body,
    };
  },
};
