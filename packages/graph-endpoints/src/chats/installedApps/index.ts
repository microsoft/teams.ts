import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/installedApps': Operation<'/chats/{chat-id}/installedApps', 'get'>;
  'GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/installedApps': Operation<'/chats/{chat-id}/installedApps', 'post'>;
  'GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Uninstall an app installed within a chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['chat-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/installedApps`
 *
 * List all app installations within a chat.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/installedApps']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['chat-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Get an app installed in a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['chat-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['chat-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/installedApps`
 *
 * Install a teamsApp to the specified chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/installedApps']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/installedApps']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/installedApps',
    paramDefs: {
      path: ['chat-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
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
   * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
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
   * `POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      method: 'post',
      path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['chat-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
