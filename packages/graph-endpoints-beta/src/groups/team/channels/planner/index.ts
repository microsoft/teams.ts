export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/channels/{channel-id}/planner': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner',
    'delete'
  >;
  'GET /groups/{group-id}/team/channels/{channel-id}/planner': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner',
    'get'
  >;
  'PATCH /groups/{group-id}/team/channels/{channel-id}/planner': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/planner',
    'patch'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/channels/{channel-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner',
    paramDefs: {
      header: ['If-Match'],
      path: ['group-id', 'channel-id'],
    },
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/channels/{channel-id}/planner`
 *
 * Selective Planner services available to this channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner',
    paramDefs: {
      path: ['group-id', 'channel-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/channels/{channel-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/groups/{group-id}/team/channels/{channel-id}/planner',
    paramDefs: {
      path: ['group-id', 'channel-id'],
    },
    params,
    body,
  };
}
