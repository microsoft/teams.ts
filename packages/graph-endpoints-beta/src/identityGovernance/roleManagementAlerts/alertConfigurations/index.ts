import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    'delete'
  >;
  'GET /identityGovernance/roleManagementAlerts/alertConfigurations': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations',
    'get'
  >;
  'GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    'patch'
  >;
  'POST /identityGovernance/roleManagementAlerts/alertConfigurations': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations',
    'post'
  >;
  'GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition': Operation<
    '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleManagementAlertConfiguration-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alertConfigurations`
 *
 * Get a list of the alert configurations. The alert configurations are a collection of following types that are derived from the unifiedRoleManagementAlertConfiguration object:
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alertConfigurations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}`
 *
 * The various configurations of an alert for Microsoft Entra roles. The configurations are predefined and can&#x27;t be created or deleted, but some of the configurations can be modified.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlertConfiguration-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlertConfiguration-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/roleManagementAlerts/alertConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/roleManagementAlerts/alertConfigurations']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/roleManagementAlerts/alertConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/roleManagementAlerts/alertConfigurations',
    body,
  };
}

export const alertDefinition = {
  /**
   * `GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition`
   *
   * The definition of the alert that contains its description, impact, and measures to mitigate or prevent it. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/alertConfigurations/{unifiedRoleManagementAlertConfiguration-id}/alertDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementAlertConfiguration-id'],
      },
      params,
    };
  },
};
