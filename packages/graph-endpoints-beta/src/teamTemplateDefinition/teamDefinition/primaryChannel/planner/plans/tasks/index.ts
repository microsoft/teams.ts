export * as assignedToTaskBoardFormat from './assignedToTaskBoardFormat';
export * as bucketTaskBoardFormat from './bucketTaskBoardFormat';
export * as details from './details';
export * as progressTaskBoardFormat from './progressTaskBoardFormat';

import type { EndpointRequest, Operation } from './../../../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'delete'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    'get'
  >;
  'GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'get'
  >;
  'PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    'patch'
  >;
  'POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks': Operation<
    '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    'post'
  >;
}

/**
 * `DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks`
 *
 * Collection of tasks in the plan. Read-only. Nullable.
 */
export function list(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 * Collection of tasks in the plan. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['body'],
  params?: IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks/{plannerTask-id}',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks`
 *
 */
export function create(
  body: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['body'],
  params?: IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamTemplateDefinition/{teamTemplateDefinition-id}/teamDefinition/primaryChannel/planner/plans/{plannerPlan-id}/tasks',
    paramDefs: [
      { name: 'teamTemplateDefinition-id', in: 'path' },
      { name: 'plannerPlan-id', in: 'path' },
    ],
    params,
    body,
  };
}
