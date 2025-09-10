import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'delete'
  >;
  'GET /users/{user-id}/teamwork/installedApps': Operation<
    '/users/{user-id}/teamwork/installedApps',
    'get'
  >;
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'patch'
  >;
  'POST /users/{user-id}/teamwork/installedApps': Operation<
    '/users/{user-id}/teamwork/installedApps',
    'post'
  >;
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    'get'
  >;
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * Uninstall an app from the personal scope of the specified user.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id', 'userScopeTeamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/installedApps`
 *
 * Retrieve the list of apps installed in the personal scope of the specified user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/teamwork/installedApps']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps',
    paramDefs: {
      path: ['user-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * Retrieve the app installed in the personal scope of the specified user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      path: ['user-id', 'userScopeTeamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      path: ['user-id', 'userScopeTeamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/teamwork/installedApps`
 *
 * Install an app in the personal scope of the specified user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/teamwork/installedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/teamwork/installedApps']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/teamwork/installedApps',
    paramDefs: {
      path: ['user-id'],
    },
    params,
    body,
  };
}

export const chat = {
  /**
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat`
   *
   * Retrieve the chat of the specified user and Teams app.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsApp = {
  /**
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['user-id', 'userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};
