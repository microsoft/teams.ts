export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'delete'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    'get'
  >;
  'GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'get'
  >;
  'PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    'patch'
  >;
  'POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks': Operation<
    '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    'post'
  >;
}

/**
 * `DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Delete a businessScenarioTask object.
 */
export function del(
  params?: IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks`
 *
 * Get a list of the businessScenarioTask objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Read the properties and relationships of a businessScenarioTask object.
 */
export function get(
  params?: IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}`
 *
 * Update the properties of a businessScenarioTask object.
 */
export function update(
  body: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['body'],
  params?: IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks/{businessScenarioTask-id}',
    paramDefs: [
      { name: 'businessScenario-id', in: 'path' },
      { name: 'businessScenarioTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks`
 *
 * Create a new businessScenarioTask object.
 */
export function create(
  body: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['body'],
  params?: IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /solutions/businessScenarios/{businessScenario-id}/planner/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/solutions/businessScenarios/{businessScenario-id}/planner/tasks',
    paramDefs: [{ name: 'businessScenario-id', in: 'path' }],
    params,
    body,
  };
}
