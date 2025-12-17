export * as subject from './subject';
export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults`
 *
 * Get the userProcessingResult resources for a workflow.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}`
 *
 * Per-user workflow execution results.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'userProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const reprocessedRuns = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns`
   *
   * The related reprocessed workflow run.
   * @deprecated
   */
  list: function list(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workflow-id', 'userProcessingResult-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}`
   *
   * The related reprocessed workflow run.
   * @deprecated
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}/reprocessedRuns/{run-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'userProcessingResult-id', 'run-id'],
      },
      params,
    };
  },
};
