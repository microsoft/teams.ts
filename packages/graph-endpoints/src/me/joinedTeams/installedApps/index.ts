import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps': Operation<
    '/me/joinedTeams/{team-id}/installedApps',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/installedApps': Operation<
    '/me/joinedTeams/{team-id}/installedApps',
    'post'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/installedApps']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/installedApps',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['team-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['team-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/installedApps',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['team-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const upgrade = {
  /**
   * `POST /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      method: 'post',
      path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['team-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
