import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps',
    'post'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}',
    paramDefs: {
      path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps',
    paramDefs: {
      path: ['teamTemplateDefinition-id'],
    },
    params,
    body,
  };
}

export const teamsApp = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp`
   *
   * The app that is installed.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsApp',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const teamsAppDefinition = {
  /**
   * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
   *
   * The details of this version of the app.
   */
  get: function get(
    params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
      },
      params,
    };
  },
};

export const upgrade = {
  /**
   * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade`
   *
   * Upgrade an app installation within a chat.
   */
  create: function create(
    body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
    params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/installedApps/{teamsAppInstallation-id}/upgrade',
      paramDefs: {
        path: ['teamTemplateDefinition-id', 'teamsAppInstallation-id'],
      },
      params,
      body,
    };
  },
};
