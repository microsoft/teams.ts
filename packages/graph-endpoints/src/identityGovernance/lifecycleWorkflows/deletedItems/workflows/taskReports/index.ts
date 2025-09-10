export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports`
 *
 * Represents the aggregation of task execution data for tasks within a workflow object.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}`
 *
 * Represents the aggregation of task execution data for tasks within a workflow object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}',
    paramDefs: {
      path: ['workflow-id', 'taskReport-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const task = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task`
   *
   * The related lifecycle workflow task.Supports $filter(eq, ne) and $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/task',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'taskReport-id'],
      },
      params,
    };
  },
};

export const taskDefinition = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition`
   *
   * The taskDefinition associated with the related lifecycle workflow task.Supports $filter(eq, ne) and $expand.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'taskReport-id'],
      },
      params,
    };
  },
};
