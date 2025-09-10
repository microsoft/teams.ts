export * as subject from './subject';
export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults`
 *
 * Per-user workflow execution results.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}`
 *
 * Per-user workflow execution results.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/userProcessingResults/{userProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'userProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
