export * as all from './all';
export * as favoritePlans from './favoritePlans';
export * as myDayTasks from './myDayTasks';
export * as plans from './plans';
export * as recentPlans from './recentPlans';
export * as rosterPlans from './rosterPlans';
export * as tasks from './tasks';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/planner': Operation<'/me/planner', 'delete'>;
  'GET /me/planner': Operation<'/me/planner', 'get'>;
  'PATCH /me/planner': Operation<'/me/planner', 'patch'>;
}

/**
 * `DELETE /me/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/planner',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
  };
}

/**
 * `GET /me/planner`
 *
 * Retrieve the properties and relationships of a plannerUser object. The returned properties include the user&#x27;s favorite plans and recently viewed plans.
 */
export function get(
  params?: IEndpoints['GET /me/planner']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `PATCH /me/planner`
 *
 * Update the properties of a plannerUser object. You can use this operation to add or remove plans from a user&#x27;s favorite plans list, and to indicate which plans the user has recently viewed.
 */
export function update(
  body: IEndpoints['PATCH /me/planner']['body'],
  params?: IEndpoints['PATCH /me/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/planner',
    paramDefs: [{ name: 'If-Match', in: 'header' }],
    params,
    body,
  };
}
