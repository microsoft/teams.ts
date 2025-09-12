import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/installedApps': Operation<'/me/chats/{chat-id}/installedApps', 'get'>;
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/installedApps': Operation<'/me/chats/{chat-id}/installedApps', 'post'>;
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/installedApps`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['chat-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['chat-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/installedApps']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['chat-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const upgrade = {
  /**
   * `POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['chat-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
