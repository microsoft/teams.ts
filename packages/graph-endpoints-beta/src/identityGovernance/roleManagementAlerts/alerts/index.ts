export * as alertIncidents from './alertIncidents';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    'delete'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts': Operation<
    '/identityGovernance/roleManagementAlerts/alerts',
    'get'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    'patch'
  >;
  'POST /identityGovernance/roleManagementAlerts/alerts': Operation<
    '/identityGovernance/roleManagementAlerts/alerts',
    'post'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration',
    'get'
  >;
  'GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition',
    'get'
  >;
  'POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh',
    'post'
  >;
  'POST /identityGovernance/roleManagementAlerts/alerts/refresh': Operation<
    '/identityGovernance/roleManagementAlerts/alerts/refresh',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['unifiedRoleManagementAlert-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alerts`
 *
 * Get a list of the unifiedRoleManagementAlert objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alerts',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}`
 *
 * Represents the alert entity.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}',
    paramDefs: {
      path: ['unifiedRoleManagementAlert-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/roleManagementAlerts/alerts`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts']['body']
): EndpointRequest<IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/roleManagementAlerts/alerts',
    body,
  };
}

export const alertConfiguration = {
  /**
   * `GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration`
   *
   * The configuration of the alert in PIM for Microsoft Entra roles. Alert configurations are pre-defined and cannot be created or deleted, but some configurations can be modified. Supports $filter for the isEnabled property and $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertConfiguration',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementAlert-id'],
      },
      params,
    };
  },
};

export const alertDefinition = {
  /**
   * `GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition`
   *
   * Contains the description, impact, and measures to mitigate or prevent the security alert from being triggered in your tenant. Supports $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/alertDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementAlert-id'],
      },
      params,
    };
  },
};

export const refresh = {
  /**
   * `POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh`
   *
   */
  create: function create(
    params?: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/roleManagementAlerts/alerts/{unifiedRoleManagementAlert-id}/refresh',
      paramDefs: {
        path: ['unifiedRoleManagementAlert-id'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/roleManagementAlerts/alerts/refresh`
   *
   * Refresh incidents on all security alerts or on a single security alert in Privileged Identity Management (PIM) for Microsoft Entra roles. This task is a long-running operation and the unifiedRoleManagementAlert object will be updated only when the operation completes.
   */
  create$1: function create$1(
    body: IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/refresh']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/roleManagementAlerts/alerts/refresh']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/roleManagementAlerts/alerts/refresh',
      body,
    };
  },
};
