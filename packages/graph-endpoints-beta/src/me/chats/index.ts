export * as installedApps from './installedApps';
export * as members from './members';
export * as messages from './messages';
export * as pinnedMessages from './pinnedMessages';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'delete'>;
  'GET /me/chats': Operation<'/me/chats', 'get'>;
  'GET /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'get'>;
  'PATCH /me/chats/{chat-id}': Operation<'/me/chats/{chat-id}', 'patch'>;
  'POST /me/chats': Operation<'/me/chats', 'post'>;
  'POST /me/chats/{chat-id}/completeMigration': Operation<
    '/me/chats/{chat-id}/completeMigration',
    'post'
  >;
  'POST /me/chats/{chat-id}/hideForUser': Operation<'/me/chats/{chat-id}/hideForUser', 'post'>;
  'GET /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
  'DELETE /me/chats/{chat-id}/lastMessagePreview': Operation<
    '/me/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'POST /me/chats/{chat-id}/markChatReadForUser': Operation<
    '/me/chats/{chat-id}/markChatReadForUser',
    'post'
  >;
  'POST /me/chats/{chat-id}/markChatUnreadForUser': Operation<
    '/me/chats/{chat-id}/markChatUnreadForUser',
    'post'
  >;
  'GET /me/chats/{chat-id}/operations': Operation<'/me/chats/{chat-id}/operations', 'get'>;
  'POST /me/chats/{chat-id}/operations': Operation<'/me/chats/{chat-id}/operations', 'post'>;
  'GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/permissionGrants': Operation<
    '/me/chats/{chat-id}/permissionGrants',
    'get'
  >;
  'POST /me/chats/{chat-id}/permissionGrants': Operation<
    '/me/chats/{chat-id}/permissionGrants',
    'post'
  >;
  'GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'POST /me/chats/{chat-id}/removeAllAccessForUser': Operation<
    '/me/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
  'POST /me/chats/{chat-id}/sendActivityNotification': Operation<
    '/me/chats/{chat-id}/sendActivityNotification',
    'post'
  >;
  'POST /me/chats/{chat-id}/unhideForUser': Operation<'/me/chats/{chat-id}/unhideForUser', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id'],
    },
    params,
  };
}

/**
 * `GET /me/chats`
 *
 */
export function list(
  params?: IEndpoints['GET /me/chats']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}',
    paramDefs: {
      path: ['chat-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats']['body']
): EndpointRequest<IEndpoints['POST /me/chats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats',
    body,
  };
}

export const completeMigration = {
  /**
   * `POST /me/chats/{chat-id}/completeMigration`
   *
   */
  create: function create(
    params?: IEndpoints['POST /me/chats/{chat-id}/completeMigration']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/completeMigration']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/completeMigration',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
    };
  },
};

export const hideForUser = {
  /**
   * `POST /me/chats/{chat-id}/hideForUser`
   *
   * Hide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/hideForUser']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/hideForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/hideForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/hideForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const lastMessagePreview = {
  /**
   * `GET /me/chats/{chat-id}/lastMessagePreview`
   *
   * Preview of the last message sent in the chat. Null if no messages are sent in the chat. Currently, only the list chats operation supports this property.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/chats/{chat-id}/lastMessagePreview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['body'],
    params?: IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /me/chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/chats/{chat-id}/lastMessagePreview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /me/chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        header: ['If-Match'],
        path: ['chat-id'],
      },
      params,
    };
  },
};

export const markChatReadForUser = {
  /**
   * `POST /me/chats/{chat-id}/markChatReadForUser`
   *
   * Mark a chat as read for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/markChatReadForUser']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/markChatReadForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/markChatReadForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/markChatReadForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const markChatUnreadForUser = {
  /**
   * `POST /me/chats/{chat-id}/markChatUnreadForUser`
   *
   * Mark a chat as unread for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/markChatUnreadForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/markChatUnreadForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const operations = {
  /**
   * `GET /me/chats/{chat-id}/operations`
   *
   * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
   */
  list: function list(
    params?: IEndpoints['GET /me/chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/chats/{chat-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/operations']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/operations',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   * A collection of all the Teams async operations that ran or are running on the chat. Nullable.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['chat-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['chat-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
};

export const permissionGrants = {
  /**
   * `GET /me/chats/{chat-id}/permissionGrants`
   *
   * A collection of permissions granted to apps for the chat.
   */
  list: function list(
    params?: IEndpoints['GET /me/chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /me/chats/{chat-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/permissionGrants',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/me/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
};

export const removeAllAccessForUser = {
  /**
   * `POST /me/chats/{chat-id}/removeAllAccessForUser`
   *
   * Remove access to a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/removeAllAccessForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/removeAllAccessForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const sendActivityNotification = {
  /**
   * `POST /me/chats/{chat-id}/sendActivityNotification`
   *
   * Send an activity feed notification in the scope of a chat. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/sendActivityNotification']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/sendActivityNotification',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};

export const unhideForUser = {
  /**
   * `POST /me/chats/{chat-id}/unhideForUser`
   *
   * Unhide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/unhideForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/unhideForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};
