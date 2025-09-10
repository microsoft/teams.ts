export * as subject from './subject';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults`
 *
 * The related lifecycle workflow taskProcessingResults.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults',
    paramDefs: {
      path: ['workflow-id', 'taskReport-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}`
 *
 * The related lifecycle workflow taskProcessingResults.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}']['response']
> {
  return {
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}',
    paramDefs: {
      path: ['workflow-id', 'taskReport-id', 'taskProcessingResult-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

export const task = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task`
   *
   * The related workflow task
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task']['response']
  > {
    return {
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/taskReports/{taskReport-id}/taskProcessingResults/{taskProcessingResult-id}/task',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'taskReport-id', 'taskProcessingResult-id'],
      },
      params,
    };
  },
};
