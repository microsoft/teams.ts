import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /users/{user-id}/chats/{chat-id}/installedApps': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /users/{user-id}/chats/{chat-id}/installedApps': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps',
    'post'
  >;
  'GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/installedApps`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['user-id', 'chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/chats/{chat-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['user-id', 'chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const upgrade = {
  /**
   * `POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/users/{user-id}/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['user-id', 'chat-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
