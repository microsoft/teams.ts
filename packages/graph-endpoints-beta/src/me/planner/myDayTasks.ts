import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /me/planner/myDayTasks': Operation<'/me/planner/myDayTasks', 'get'>;
  'GET /me/planner/myDayTasks/{plannerTask-id}': Operation<
    '/me/planner/myDayTasks/{plannerTask-id}',
    'get'
  >;
}

/**
 * `GET /me/planner/myDayTasks`
 *
 * Retrieve a list of plannerTask objects to be shown in the user&#x27;s My Day view within Planner. This method returns the list of tasks that the user added to the My Day view or that are due today.
 */
export function list(
  params?: IEndpoints['GET /me/planner/myDayTasks']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/myDayTasks']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/myDayTasks',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/planner/myDayTasks/{plannerTask-id}`
 *
 * Read-only. Nullable. Returns the plannerTasks to be shown in the My Day view of the user.
 */
export function get(
  params?: IEndpoints['GET /me/planner/myDayTasks/{plannerTask-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner/myDayTasks/{plannerTask-id}']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner/myDayTasks/{plannerTask-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'plannerTask-id', in: 'path' },
    ],
    params,
  };
}
