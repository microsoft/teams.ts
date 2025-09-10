export * as subject from './subject';
export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults`
 *
 * Get user processing results of a workflow run object.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults',
    paramDefs: {
      path: ['workflow-id', 'run-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}`
 *
 * Get the user processing result of a user processing result of a run.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/runs/{run-id}/userProcessingResults/{userProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'run-id', 'userProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
