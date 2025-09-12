import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/teamwork/installedApps': Operation<'/me/teamwork/installedApps', 'get'>;
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/teamwork/installedApps': Operation<'/me/teamwork/installedApps', 'post'>;
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    'get'
  >;
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['userScopeTeamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /me/teamwork/installedApps`
 *
 * The apps installed in the personal scope of this user.
 */
export function list(
  params?: IEndpoints['GET /me/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/teamwork/installedApps']['response']> {
  return {
    method: 'get',
    path: '/me/teamwork/installedApps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * The apps installed in the personal scope of this user.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      path: ['userScopeTeamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: {
      path: ['userScopeTeamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/teamwork/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/teamwork/installedApps']['body']
): EndpointRequest<IEndpoints['POST /me/teamwork/installedApps']['response']> {
  return {
    method: 'post',
    path: '/me/teamwork/installedApps',
    body,
  };
}

export const chat = {
  /**
   * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat`
   *
   * The chat between the user and Teams app.
   */
  get: function get(
    params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['response']
  > {
    return {
      method: 'get',
      path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsApp = {
  /**
   * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['userScopeTeamsAppInstallation-id'],
      },
      params,
    };
  },
};
