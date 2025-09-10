export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/primaryChannel/planner': Operation<
    '/teams/{team-id}/primaryChannel/planner',
    'delete'
  >;
  'GET /teams/{team-id}/primaryChannel/planner': Operation<
    '/teams/{team-id}/primaryChannel/planner',
    'get'
  >;
  'PATCH /teams/{team-id}/primaryChannel/planner': Operation<
    '/teams/{team-id}/primaryChannel/planner',
    'patch'
  >;
}

/**
 * `DELETE /teams/{team-id}/primaryChannel/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner']['parameters']
): EndpointRequest<IEndpoints['DELETE /teams/{team-id}/primaryChannel/planner']['response']> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/primaryChannel/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['team-id'],
    },
    params,
  };
}

/**
 * `GET /teams/{team-id}/primaryChannel/planner`
 *
 * Selective Planner services available to this channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/primaryChannel/planner']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/primaryChannel/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/primaryChannel/planner',
    paramDefs: {
      path: ['team-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/primaryChannel/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/primaryChannel/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/primaryChannel/planner',
    paramDefs: {
      path: ['team-id'],
    },
    params,
    body,
  };
}
