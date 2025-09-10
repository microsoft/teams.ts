export * as installedApps from './installedApps';
export * as members from './members';
export * as messages from './messages';
export * as pinnedMessages from './pinnedMessages';
export * as tabs from './tabs';

import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}': Operation<'/chats/{chat-id}', 'delete'>;
  'GET /chats': Operation<'/chats', 'get'>;
  'GET /chats/{chat-id}': Operation<'/chats/{chat-id}', 'get'>;
  'PATCH /chats/{chat-id}': Operation<'/chats/{chat-id}', 'patch'>;
  'POST /chats': Operation<'/chats', 'post'>;
  'POST /chats/{chat-id}/completeMigration': Operation<
    '/chats/{chat-id}/completeMigration',
    'post'
  >;
  'POST /chats/{chat-id}/hideForUser': Operation<'/chats/{chat-id}/hideForUser', 'post'>;
  'GET /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'get'
  >;
  'PATCH /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'patch'
  >;
  'DELETE /chats/{chat-id}/lastMessagePreview': Operation<
    '/chats/{chat-id}/lastMessagePreview',
    'delete'
  >;
  'POST /chats/{chat-id}/markChatReadForUser': Operation<
    '/chats/{chat-id}/markChatReadForUser',
    'post'
  >;
  'POST /chats/{chat-id}/markChatUnreadForUser': Operation<
    '/chats/{chat-id}/markChatUnreadForUser',
    'post'
  >;
  'GET /chats/{chat-id}/operations': Operation<'/chats/{chat-id}/operations', 'get'>;
  'POST /chats/{chat-id}/operations': Operation<'/chats/{chat-id}/operations', 'post'>;
  'GET /chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'patch'
  >;
  'DELETE /chats/{chat-id}/operations/{teamsAsyncOperation-id}': Operation<
    '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/permissionGrants': Operation<'/chats/{chat-id}/permissionGrants', 'get'>;
  'POST /chats/{chat-id}/permissionGrants': Operation<'/chats/{chat-id}/permissionGrants', 'post'>;
  'GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'patch'
  >;
  'DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}': Operation<
    '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
    'delete'
  >;
  'POST /chats/{chat-id}/removeAllAccessForUser': Operation<
    '/chats/{chat-id}/removeAllAccessForUser',
    'post'
  >;
  'POST /chats/{chat-id}/sendActivityNotification': Operation<
    '/chats/{chat-id}/sendActivityNotification',
    'post'
  >;
  'POST /chats/{chat-id}/unhideForUser': Operation<'/chats/{chat-id}/unhideForUser', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}`
 *
 * Soft-delete a chat. When invoked with delegated permissions, this operation only works for tenant admins and Teams service admins.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/chats/{chat-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id'],
    },
    params,
  };
}

/**
 * `GET /chats`
 *
 * Retrieve the list of chats that the user is part of. This method supports federation. When a user ID is provided, the calling application must belong to the same tenant that the user belongs to.
 */
export function list(
  params?: IEndpoints['GET /chats']['parameters']
): EndpointRequest<IEndpoints['GET /chats']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}`
 *
 * Retrieve a single chat (without its messages). This method supports federation. To access a chat, at least one chat member must belong to the tenant the request initiated from.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}',
    paramDefs: {
      path: ['chat-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}`
 *
 * Update the properties of a chat object.
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/chats/{chat-id}',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /chats`
 *
 * Create a new chat object.
 */
export function create(
  body: IEndpoints['POST /chats']['body']
): EndpointRequest<IEndpoints['POST /chats']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats',
    body,
  };
}

export const completeMigration = {
  /**
   * `POST /chats/{chat-id}/completeMigration`
   *
   */
  create: function create(
    params?: IEndpoints['POST /chats/{chat-id}/completeMigration']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/completeMigration']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/completeMigration',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
    };
  },
};

export const hideForUser = {
  /**
   * `POST /chats/{chat-id}/hideForUser`
   *
   * Hide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/hideForUser']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/hideForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/hideForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/hideForUser',
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
   * `GET /chats/{chat-id}/lastMessagePreview`
   *
   * Preview of the last message sent in the chat. Null if no messages are sent in the chat. Currently, only the list chats operation supports this property.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['GET /chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /chats/{chat-id}/lastMessagePreview`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['body'],
    params?: IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['PATCH /chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/chats/{chat-id}/lastMessagePreview',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /chats/{chat-id}/lastMessagePreview`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /chats/{chat-id}/lastMessagePreview']['parameters']
  ): EndpointRequest<IEndpoints['DELETE /chats/{chat-id}/lastMessagePreview']['response']> {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/chats/{chat-id}/lastMessagePreview',
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
   * `POST /chats/{chat-id}/markChatReadForUser`
   *
   * Mark a chat as read for a user.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/markChatReadForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/markChatReadForUser',
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
   * `POST /chats/{chat-id}/markChatUnreadForUser`
   *
   * Mark a chat as unread for a user.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/markChatUnreadForUser']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/markChatUnreadForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/markChatUnreadForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/markChatUnreadForUser',
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
   * `GET /chats/{chat-id}/operations`
   *
   * List all Teams async operations that ran or are running on the specified chat.
   */
  list: function list(
    params?: IEndpoints['GET /chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['GET /chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/chats/{chat-id}/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /chats/{chat-id}/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/operations']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/operations']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/operations']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/operations',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   * Get the specified Teams async operation that ran or is running on a specific resource.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsAsyncOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['body'],
    params?: IEndpoints['PATCH /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
      paramDefs: {
        path: ['chat-id', 'teamsAsyncOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /chats/{chat-id}/operations/{teamsAsyncOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /chats/{chat-id}/operations/{teamsAsyncOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/chats/{chat-id}/operations/{teamsAsyncOperation-id}',
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
   * `GET /chats/{chat-id}/permissionGrants`
   *
   * List all resource-specific permission grants on the chat. This list specifies the Microsoft Entra apps that have access to the chat, along with the corresponding resource-specific access that each app has.
   */
  list: function list(
    params?: IEndpoints['GET /chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['GET /chats/{chat-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'get',
      path: '/chats/{chat-id}/permissionGrants',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['chat-id'],
      },
      params,
    };
  },
  /**
   * `POST /chats/{chat-id}/permissionGrants`
   *
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/permissionGrants']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/permissionGrants']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/permissionGrants']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/permissionGrants',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
  /**
   * `GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   * A collection of permissions granted to apps for the chat.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['body'],
    params?: IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
      paramDefs: {
        path: ['chat-id', 'resourceSpecificPermissionGrant-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/chats/{chat-id}/permissionGrants/{resourceSpecificPermissionGrant-id}',
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
   * `POST /chats/{chat-id}/removeAllAccessForUser`
   *
   * Remove access to a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/removeAllAccessForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/removeAllAccessForUser',
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
   * `POST /chats/{chat-id}/sendActivityNotification`
   *
   * Send an activity feed notification in the scope of a chat. For more information, see sending Teams activity notifications.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/sendActivityNotification']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/sendActivityNotification',
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
   * `POST /chats/{chat-id}/unhideForUser`
   *
   * Unhide a chat for a user.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/unhideForUser']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/unhideForUser']['parameters']
  ): EndpointRequest<IEndpoints['POST /chats/{chat-id}/unhideForUser']['response']> {
    return {
      ver: 'beta',
      method: 'post',
      path: '/chats/{chat-id}/unhideForUser',
      paramDefs: {
        path: ['chat-id'],
      },
      params,
      body,
    };
  },
};
