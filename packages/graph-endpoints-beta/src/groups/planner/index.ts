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
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/planner`
 *
 * Selective Planner services available to the group. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
    ],
    params,
    body,
  };
}
