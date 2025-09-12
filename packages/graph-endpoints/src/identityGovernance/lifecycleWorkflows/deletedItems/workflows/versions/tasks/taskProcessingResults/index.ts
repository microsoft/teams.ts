export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults`
 *
 * The result of processing the task.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber', 'task-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}`
 *
 * The result of processing the task.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber', 'task-id', 'taskProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const task = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task`
   *
   * The related workflow task
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task',
      paramDefs: {
        query: ['$select', '$expand'],
        path: [
          'workflow-id',
          'workflowVersion-versionNumber',
          'task-id',
          'taskProcessingResult-id',
        ],
      },
      params,
    };
  },
};
