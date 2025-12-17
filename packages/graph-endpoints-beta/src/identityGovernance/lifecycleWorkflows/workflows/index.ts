export * as createdBy from './createdBy';
export * as lastModifiedBy from './lastModifiedBy';
export * as runs from './runs';
export * as taskReports from './taskReports';
export * as tasks from './tasks';
export * as userProcessingResults from './userProcessingResults';
export * as versions from './versions';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    'patch'
  >;
  'POST /identityGovernance/lifecycleWorkflows/workflows': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows',
    'post'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}',
    'get'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}`
 *
 * Delete a workflow object and its associated tasks, taskProcessingResults and versions. You can restore a deleted workflow and its associated objects within 30 days of deletion.
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workflow-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows`
 *
 * Get a list of workflow resources that are associated with lifecycle workflows.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows']['parameters']
): EndpointRequest<IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}`
 *
 * Read the properties and relationships of a workflow object.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}`
 *
 * Update the properties of a workflow object. Only the properties listed in the request body table can be updated. To update any other workflow properties, see workflow: createNewVersion.
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}',
    paramDefs: {
      path: ['workflow-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/lifecycleWorkflows/workflows`
 *
 * Create a new workflow object. You can create up to 100 workflows in a tenant.
 */
export function create(
  body: IEndpoints['POST /identityGovernance/lifecycleWorkflows/workflows']['body']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/lifecycleWorkflows/workflows']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/lifecycleWorkflows/workflows',
    body,
  };
}

export const executionScope = {
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope`
   *
   * The list of users that meet the workflowExecutionConditions of a workflow.
   */
  get: function get(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['workflow-id'],
      },
      params,
    };
  },
  /**
   * `GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}`
   *
   * The list of users that meet the workflowExecutionConditions of a workflow.
   */
  get$1: function get$1(
    params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/identityGovernance/lifecycleWorkflows/workflows/{workflow-id}/executionScope/{userProcessingResult-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['workflow-id', 'userProcessingResult-id'],
      },
      params,
    };
  },
};
