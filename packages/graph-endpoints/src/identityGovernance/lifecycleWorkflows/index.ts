export * as customTaskExtensions from './customTaskExtensions';
export * as deletedItems from './deletedItems';
export * as workflowTemplates from './workflowTemplates';
export * as workflows from './workflows';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows': Operation<
    '/identityGovernance/lifecycleWorkflows',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows': Operation<
    '/identityGovernance/lifecycleWorkflows',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows': Operation<
    '/identityGovernance/lifecycleWorkflows',
    'patch'
  >;
  'GET /identityGovernance/lifecycleWorkflows/insights': Operation<
    '/identityGovernance/lifecycleWorkflows/insights',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/insights': Operation<
    '/identityGovernance/lifecycleWorkflows/insights',
    'patch'
  >;
  'DELETE /identityGovernance/lifecycleWorkflows/insights': Operation<
    '/identityGovernance/lifecycleWorkflows/insights',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/settings': Operation<
    '/identityGovernance/lifecycleWorkflows/settings',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/settings': Operation<
    '/identityGovernance/lifecycleWorkflows/settings',
    'patch'
  >;
  'GET /identityGovernance/lifecycleWorkflows/taskDefinitions': Operation<
    '/identityGovernance/lifecycleWorkflows/taskDefinitions',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows']['parameters']
): EndpointRequest<IEndpoints['DELETE /identityGovernance/lifecycleWorkflows']['response']> {
  return {
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows`
 *
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/lifecycleWorkflows']['response']> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/lifecycleWorkflows`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows']['body']
): EndpointRequest<IEndpoints['PATCH /identityGovernance/lifecycleWorkflows']['response']> {
  return {
    method: 'patch',
    path: '/identityGovernance/lifecycleWorkflows',
    body,
  };
}

export const insights = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/insights`
   *
   * The insight container holding workflow insight summaries for a tenant.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/insights']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/insights',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/lifecycleWorkflows/insights`
   *
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/insights']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/insights']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/lifecycleWorkflows/insights',
      body,
    };
  },
  /**
   * `DELETE /identityGovernance/lifecycleWorkflows/insights`
   *
   */
  del: function del(
    params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/insights']['parameters']
  ): EndpointRequest<
    IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/insights']['response']
  > {
    return {
      method: 'delete',
      path: '/identityGovernance/lifecycleWorkflows/insights',
      paramDefs: {
        header: ['If-Match'],
      },
      params,
    };
  },
};

export const settings = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/settings`
   *
   * Read the properties and relationships of a lifecycleManagementSettings object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/settings']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/settings']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/settings',
      paramDefs: {
        query: ['$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `PATCH /identityGovernance/lifecycleWorkflows/settings`
   *
   * Update the properties of a lifecycleManagementSettings object.
   */
  update: function update(
    body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/settings']['body']
  ): EndpointRequest<
    IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/settings']['response']
  > {
    return {
      method: 'patch',
      path: '/identityGovernance/lifecycleWorkflows/settings',
      body,
    };
  },
};

export const taskDefinitions = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/taskDefinitions`
   *
   * Get a list of built-in tasks in Lifecycle Workflows. A task is represented by the taskDefinition object.
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/taskDefinitions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/taskDefinitions']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/taskDefinitions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}`
   *
   * Read the details of a built-in workflow task in Lifecycle Workflows.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/taskDefinitions/{taskDefinition-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['taskDefinition-id'],
      },
      params,
    };
  },
};
