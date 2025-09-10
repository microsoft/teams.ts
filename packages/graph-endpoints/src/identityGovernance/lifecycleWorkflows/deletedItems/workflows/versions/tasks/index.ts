export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    'patch'
  >;
  'POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workflow-id', 'workflowVersion-versionNumber', 'task-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks`
 *
 * The tasks in the workflow.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}`
 *
 * The tasks in the workflow.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber', 'task-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}']['response']
> {
  return {
    method: 'patch',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks/{task-id}',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber', 'task-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks']['body'],
  params?: IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks']['response']
> {
  return {
    method: 'post',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}/tasks',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber'],
    },
    params,
    body,
  };
}
