export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/channels/{channel-id}/planner': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner',
    'delete'
  >;
  'GET /teams/{team-id}/channels/{channel-id}/planner': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner',
    'get'
  >;
  'PATCH /teams/{team-id}/channels/{channel-id}/planner': Operation<
    '/teams/{team-id}/channels/{channel-id}/planner',
    'patch'
  >;
}

/**
 * `DELETE /teams/{team-id}/channels/{channel-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/channels/{channel-id}/planner`
 *
 * Selective Planner services available to this channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/channels/{channel-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/channels/{channel-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<IEndpoints['PATCH /teams/{team-id}/channels/{channel-id}/planner']['response']> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
