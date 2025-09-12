export * as alertConfigurations from './alertConfigurations';
export * as alerts from './alerts';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/roleManagementAlerts': Operation<
    '/identityGovernance/roleManagementAlerts',
    'delete'
  >;
  'GET /identityGovernance/roleManagementAlerts': Operation<
    '/identityGovernance/roleManagementAlerts',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts': Operation<
    '/identityGovernance/roleManagementAlerts',
    'patch'
  >;
  'GET /identityGovernance/roleManagementAlerts/alertDefinitions': Operation<
    '/identityGovernance/roleManagementAlerts/alertDefinitions',
    'get'
  >;
  'POST /identityGovernance/roleManagementAlerts/alertDefinitions': Operation<
    '/identityGovernance/roleManagementAlerts/alertDefinitions',
    'post'
  >;
  'GET /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
    'patch'
  >;
  'DELETE /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}': Operation<
    '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
    'delete'
  >;
  'GET /identityGovernance/roleManagementAlerts/operations': Operation<
    '/identityGovernance/roleManagementAlerts/operations',
    'get'
  >;
  'POST /identityGovernance/roleManagementAlerts/operations': Operation<
    '/identityGovernance/roleManagementAlerts/operations',
    'post'
  >;
  'GET /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}': Operation<
    '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
    'get'
  >;
  'PATCH /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}': Operation<
    '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
    'patch'
  >;
  'DELETE /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}': Operation<
    '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
    'delete'
  >;
}

/**
 * `DELETE /identityGovernance/roleManagementAlerts`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/roleManagementAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/roleManagementAlerts',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/roleManagementAlerts`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/roleManagementAlerts']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/roleManagementAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/roleManagementAlerts',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/roleManagementAlerts`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/roleManagementAlerts']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/roleManagementAlerts',
    body,
  };
}

export const alertDefinitions = {
  /**
   * `GET /identityGovernance/roleManagementAlerts/alertDefinitions`
   *
   * Get a list of the unifiedRoleManagementAlertDefinition objects and their properties.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alertDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/alertDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/alertDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/roleManagementAlerts/alertDefinitions`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/roleManagementAlerts/alertDefinitions']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/roleManagementAlerts/alertDefinitions']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/roleManagementAlerts/alertDefinitions',
      body,
    };
  },
  /**
   * `GET /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}`
   *
   * Defines an alert, its impact, and measures to mitigate or prevent it.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['unifiedRoleManagementAlertDefinition-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
      paramDefs: {
        path: ['unifiedRoleManagementAlertDefinition-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/roleManagementAlerts/alertDefinitions/{unifiedRoleManagementAlertDefinition-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['unifiedRoleManagementAlertDefinition-id'],
      },
      params,
    };
  },
};

export const operations = {
  /**
   * `GET /identityGovernance/roleManagementAlerts/operations`
   *
   * Represents operations on resources that take a long time to complete and can run in the background until completion.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/operations']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/operations',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `POST /identityGovernance/roleManagementAlerts/operations`
   *
   */
  create: function create(
    body: IEndpoints['POST /identityGovernance/roleManagementAlerts/operations']['body']
  ): EndpointRequest<
    IEndpoints['POST /identityGovernance/roleManagementAlerts/operations']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identityGovernance/roleManagementAlerts/operations',
      body,
    };
  },
  /**
   * `GET /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}`
   *
   * Represents operations on resources that take a long time to complete and can run in the background until completion.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['body'],
    params?: IEndpoints['PATCH /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'patch',
      path: '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
      paramDefs: {
        path: ['longRunningOperation-id'],
      },
      params,
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'delete',
      path: '/identityGovernance/roleManagementAlerts/operations/{longRunningOperation-id}',
      paramDefs: {
        header: ['If-Match'],
        path: ['longRunningOperation-id'],
      },
      params,
    };
  },
};
