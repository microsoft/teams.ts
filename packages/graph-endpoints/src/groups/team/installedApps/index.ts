import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/installedApps': Operation<
    '/groups/{group-id}/team/installedApps',
    'get'
  >;
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/installedApps': Operation<
    '/groups/{group-id}/team/installedApps',
    'post'
  >;
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/installedApps']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps',
    paramDefs: {
      path: ['group-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['group-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['group-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/installedApps']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/installedApps']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/installedApps',
    paramDefs: {
      path: ['group-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['group-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const upgrade = {
  /**
   * `POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      method: 'post',
      path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['group-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
