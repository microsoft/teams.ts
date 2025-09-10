export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults`
 *
 * Get the task processing result from a userProcessingResult either directly or through a run.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults',
    paramDefs: {
      path: ['workflow-id', 'run-id', 'userProcessingResult-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}`
 *
 * The associated individual task execution.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'run-id', 'userProcessingResult-id', 'taskProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const task = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task`
   *
   * The related workflow task
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}/taskProcessingResults/{taskProcessingResult-id}/task',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'run-id', 'userProcessingResult-id', 'taskProcessingResult-id'],
      },
      params,
    };
  },
};
