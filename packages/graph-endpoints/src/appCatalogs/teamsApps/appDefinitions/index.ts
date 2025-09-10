import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    'delete'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
    'get'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    'patch'
  >;
  'POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
    'post'
  >;
  'GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'get'
  >;
  'PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'patch'
  >;
  'DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot': Operation<
    '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
    'delete'
  >;
}

/**
 * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
> {
  return {
    method: 'delete',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions`
 *
 * The details for each version of the app.
 */
export function list(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['response']
> {
  return {
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
    paramDefs: {
      path: ['teamsApp-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
 *
 * The details for each version of the app.
 */
export function get(
  params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
> {
  return {
    method: 'get',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
  * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}`
  *
  * Publish an app to the Microsoft Teams app catalog.
Specifically, this API publishes the app to your organization&#x27;s catalog (the tenant app catalog);
the created resource has a distributionMethod property value of organization. The requiresReview property allows any user to submit an app for review by an administrator. Admins can approve or reject these apps via this API or the Microsoft Teams admin center.
  */
export function update(
  body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['body'],
  params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}']['response']
> {
  return {
    method: 'patch',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}',
    paramDefs: {
      path: ['teamsApp-id', 'teamsAppDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions`
 *
 * Update an app previously published to the Microsoft Teams app catalog. To update an app, the distributionMethod property for the app must be set to organization. This API specifically updates an app published to your organization&#x27;s app catalog (the tenant app catalog).
 */
export function create(
  body: IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['body'],
  params?: IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['POST /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions']['response']
> {
  return {
    method: 'post',
    path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions',
    paramDefs: {
      path: ['teamsApp-id'],
    },
    params,
    body,
  };
}

export const bot = {
  /**
   * `GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   * Get the bot associated with a specific definition of the  TeamsApp.
   */
  get: function get(
    params?: IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
  > {
    return {
      method: 'get',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['body'],
    params?: IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
  > {
    return {
      method: 'patch',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      paramDefs: {
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot']['response']
  > {
    return {
      method: 'delete',
      path: '/appCatalogs/teamsApps/{teamsApp-id}/appDefinitions/{teamsAppDefinition-id}/bot',
      paramDefs: {
        header: ['If-Match'],
        path: ['teamsApp-id', 'teamsAppDefinition-id'],
      },
      params,
    };
  },
};
