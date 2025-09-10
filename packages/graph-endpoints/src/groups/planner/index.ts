export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/planner': Operation<'/groups/{group-id}/planner', 'delete'>;
  'GET /groups/{group-id}/planner': Operation<'/groups/{group-id}/planner', 'get'>;
  'PATCH /groups/{group-id}/planner': Operation<'/groups/{group-id}/planner', 'patch'>;
}

/**
 * `DELETE /groups/{group-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /groups/{group-id}/planner']['response']> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner`
 *
 * Entry-point to Planner resource that might exist for a Unified Group.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/planner']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/planner',
    paramDefs: {
      path: ['group-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/planner']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /groups/{group-id}/planner']['response']> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id'],
    },
    params,
    body,
  };
}
