export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults`
 *
 * The result of processing the task.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults',
    paramDefs: {
      path: ['workflowTemplate-id', 'task-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}`
 *
 * The result of processing the task.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}',
    paramDefs: {
      path: ['workflowTemplate-id', 'task-id', 'taskProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const task = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task`
   *
   * The related workflow task
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}/taskProcessingResults/{taskProcessingResult-id}/task',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflowTemplate-id', 'task-id', 'taskProcessingResult-id'],
      },
      params,
    };
  },
};
