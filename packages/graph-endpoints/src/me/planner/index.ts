export * as plans from './plans';
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
    method: 'delete',
    path: '/me/planner',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
  };
}

/**
 * `GET /me/planner`
 *
 * Entry-point to the Planner resource that might exist for a user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /me/planner']['parameters']
): EndpointRequest<IEndpoints['GET /me/planner']['response']> {
  return {
    method: 'get',
    path: '/me/planner',
    paramDefs: {
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /me/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/planner']['body'],
  params?: IEndpoints['PATCH /me/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/planner']['response']> {
  return {
    method: 'patch',
    path: '/me/planner',
    paramDefs: {
      header: ['If-Match'],
    },
    params,
    body,
  };
}
