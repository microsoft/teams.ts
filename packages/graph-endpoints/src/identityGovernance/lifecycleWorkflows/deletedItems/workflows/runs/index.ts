export * as taskProcessingResults from './taskProcessingResults';
export * as userProcessingResults from './userProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs`
 *
 * Workflow runs.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}`
 *
 * Workflow runs.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/runs/{run-id}',
    paramDefs: {
      path: ['workflow-id', 'run-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
