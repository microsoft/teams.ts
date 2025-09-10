import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /teams/{team-id}/installedApps': Operation<'/teams/{team-id}/installedApps', 'get'>;
  'GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /teams/{team-id}/installedApps': Operation<'/teams/{team-id}/installedApps', 'post'>;
  'GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Uninstalls an app from the specified team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/installedApps`
 *
 * Retrieve a list of apps installed in the specified team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/installedApps']['response']> {
  return {
    method: 'get',
    path: '/teams/{team-id}/installedApps',
    paramDefs: {
      path: ['team-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Retrieve the app installed in the specified team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['team-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['team-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/installedApps`
 *
 * Install an app to the specified team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/installedApps']['body'],
  params?: IEndpoints['POST /teams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/installedApps']['response']> {
  return {
    method: 'post',
    path: '/teams/{team-id}/installedApps',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
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
   * `GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
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
   * `POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      method: 'post',
      path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['team-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
