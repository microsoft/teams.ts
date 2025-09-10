import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    'delete'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    'patch'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
    'patch'
  >;
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
    'delete'
  >;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon`
 *
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon`
 *
 * Retrieve a Teams app icon associated with a specific definition of an app.
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
    body,
  };
}

export const hostedContent = {
  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent`
   *
   * Retrieve the hosted content in an app&#x27;s icon.
   */
  get: function get(
    params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['body'],
    params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
      paramDefs: {
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/outlineIcon/hostedContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
};
