export * as createdBy from './createdBy';
export * as lastModifiedBy from './lastModifiedBy';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}',
    'get'
  >;
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions`
 *
 * The workflow versions that are available.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}`
 *
 * The workflow versions that are available.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/versions/{workflowVersion-versionNumber}',
    paramDefs: {
      path: ['workflow-id', 'workflowVersion-versionNumber'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
