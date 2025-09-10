export * as taskProcessingResults from './taskProcessingResults';

import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    'delete'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks',
    'get'
  >;
  'GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    'get'
  >;
  'PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    'patch'
  >;
  'POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks': Operation<
    '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['workflow-id', 'task-id'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks`
 *
 * The tasks in the workflow.
 */
export function list(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks',
    paramDefs: {
      path: ['workflow-id'],
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}`
 *
 * The tasks in the workflow.
 */
export function get(
  params?: IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    paramDefs: {
      path: ['workflow-id', 'task-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['body'],
  params?: IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks/{task-id}',
    paramDefs: {
      path: ['workflow-id', 'task-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks']['body'],
  params?: IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identityGovernance/lifecycleWorkflows/deletedItems/workflows/{workflow-id}/tasks',
    paramDefs: {
      path: ['workflow-id'],
    },
    params,
    body,
  };
}
