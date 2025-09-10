import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    'delete'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    'patch'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
    'patch'
  >;
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
    'delete'
  >;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon`
 *
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon`
 *
 * Retrieve a Teams app icon associated with a specific definition of an app.
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon`
 *
 */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
    body,
  };
}

export const hostedContent = {
  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent`
   *
   * Retrieve the hosted content in an app&#x27;s icon.
   */
  get: function get(
    params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['body'],
    params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
      paramDefs: {
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/colorIcon/hostedContent',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
};
