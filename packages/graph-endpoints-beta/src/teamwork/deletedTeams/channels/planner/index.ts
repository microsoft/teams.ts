export * as plans from './plans';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    'patch'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner`
 *
 * Selective Planner services available to this channel. Currently, only shared channels are supported. Read-only. Nullable.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/planner',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
