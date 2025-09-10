export * as plans from './plans';
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
    method: 'delete',
    path: '/users/{user-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
  };
}

/**
 * `GET /users/{user-id}/planner`
 *
 * Entry-point to the Planner resource that might exist for a user. Read-only.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/planner']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/planner',
    paramDefs: {
      path: ['user-id'],
      query: ['$select', '$expand'],
    },
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
    method: 'patch',
    path: '/users/{user-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['user-id'],
    },
    params,
    body,
  };
}
