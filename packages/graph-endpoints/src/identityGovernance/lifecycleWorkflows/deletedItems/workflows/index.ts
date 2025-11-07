export * as createdBy from './createdBy';
export * as lastModifiedBy from './lastModifiedBy';
export * as runs from './runs';
export * as taskReports from './taskReports';
export * as tasks from './tasks';
export * as userProcessingResults from './userProcessingResults';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}`
 *
 * Delete a workflow object.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}']['response']
> {
  return {
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workflow-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows`
 *
 * Get a list of the deleted workflow objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}`
 *
 * Retrieve a deleted workflow object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const executionScope = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope`
   *
   * The list of users that meet the workflowExecutionConditions of a workflow.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workflow-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}`
   *
   * The list of users that meet the workflowExecutionConditions of a workflow.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/executionScope/{userProcessingResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'userProcessingResult-id'],
      },
      params,
    };
  },
};
