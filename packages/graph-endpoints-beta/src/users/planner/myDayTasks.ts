import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/planner/myDayTasks': Operation<
    '/users/{user-id}/planner/myDayTasks',
    'get'
  >;
  'GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}': Operation<
    '/users/{user-id}/planner/myDayTasks/{plannerTask-id}',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/planner/myDayTasks`
 *
 * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/planner/myDayTasks']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner/myDayTasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/myDayTasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/planner/myDayTasks/{plannerTask-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner/myDayTasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}
