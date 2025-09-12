export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks`
 *
 * Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks',
    paramDefs: {
      path: ['workflowTemplate-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}`
 *
 * Represents the configured tasks to execute and their execution sequence within a workflow. This relationship is expanded by default.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflowTemplates/{workflowTemplate-id}/tasks/{task-id}',
    paramDefs: {
      path: ['workflowTemplate-id', 'task-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
