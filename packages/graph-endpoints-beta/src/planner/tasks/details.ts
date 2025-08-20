import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /planner/tasks/{plannerTask-id}/details': Operation<
    '/planner/tasks/{plannerTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /planner/tasks/{plannerTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['DELETE /planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /planner/tasks/{plannerTask-id}/details`
 *
 * Retrieve the properties and relationships of a plannerTaskDetails object.
 */
export function list(
  params?: IEndpoints['GET /planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['GET /planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /planner/tasks/{plannerTask-id}/details`
 *
 * Update the properties of plannerTaskDetails object.
 */
export function update(
  body: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['body'],
  params?: IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['PATCH /planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
