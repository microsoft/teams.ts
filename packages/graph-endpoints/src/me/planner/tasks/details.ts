import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'delete'
  >;
  'GET /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'get'
  >;
  'PATCH /me/planner/tasks/{plannerTask-id}/details': Operation<
    '/me/planner/tasks/{plannerTask-id}/details',
    'patch'
  >;
}

/**
 * `DELETE /me/planner/tasks/{plannerTask-id}/details`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    method: 'delete',
    path: '/me/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/tasks/{plannerTask-id}/details`
 *
 * Read-only. Nullable. More details about the task.
 */
export function list(
  params?: IEndpoints['GET /me/planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    method: 'get',
    path: '/me/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner/tasks/{plannerTask-id}/details`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['body'],
  params?: IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner/tasks/{plannerTask-id}/details']['response']> {
  return {
    method: 'patch',
    path: '/me/planner/tasks/{plannerTask-id}/details',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
    body,
  };
}
