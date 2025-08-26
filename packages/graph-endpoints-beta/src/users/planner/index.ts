export * as all from './all';
export * as favoritePlans from './favoritePlans';
export * as myDayTasks from './myDayTasks';
export * as plans from './plans';
export * as recentPlans from './recentPlans';
export * as rosterPlans from './rosterPlans';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'delete'>;
  'GET /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'get'>;
  'PATCH /users/{user-id}/planner': Operation<'/users/{user-id}/planner', 'patch'>;
}

/**
 * `DELETE /users/{user-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/planner`
 *
 * Selective Planner services available to the user. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/planner']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
    ],
    params,
    body,
  };
}
