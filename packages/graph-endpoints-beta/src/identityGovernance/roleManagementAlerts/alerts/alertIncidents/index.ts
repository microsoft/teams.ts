import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    'delete'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents',
    'get'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    'patch'
  >;
  'POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents',
    'post'
  >;
  'POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleManagementAlert-id', 'unifiedRoleManagementAlertIncident-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents`
 *
 * Represents the incidents of this type of alert that have been triggered in Privileged Identity Management (PIM) for Microsoft Entra roles in the tenant. Supports $expand.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}`
 *
 * Represents the incidents of this type of alert that have been triggered in Privileged Identity Management (PIM) for Microsoft Entra roles in the tenant. Supports $expand.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id', 'unifiedRoleManagementAlertIncident-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id', 'unifiedRoleManagementAlertIncident-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents']['body'],
  params?: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id'],
    },
    params,
    body,
  };
}

export const remediate = {
  /**
   * `POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertIncidents/{unifiedRoleManagementAlertIncident-id}/remediate',
      paramDefs: {
        path: ['unifiedRoleManagementAlert-id', 'unifiedRoleManagementAlertIncident-id'],
      },
      params,
    };
  },
};
