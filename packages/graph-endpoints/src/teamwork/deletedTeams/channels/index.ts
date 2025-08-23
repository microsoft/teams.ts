export * as allMembers from './allMembers';
export * as archive from './archive';
export * as completeMigration from './completeMigration';
export * as filesFolder from './filesFolder';
export * as members from './members';
export * as messages from './messages';
export * as provisionEmail from './provisionEmail';
export * as removeEmail from './removeEmail';
export * as sharedWithTeams from './sharedWithTeams';
export * as tabs from './tabs';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'delete'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    'get'
  >;
  'GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'get'
  >;
  'PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    'patch'
  >;
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    'post'
  >;
}

/**
 * `DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'delete',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels`
 *
 * The channels that are either shared with this deleted team or created in this deleted team.
 */
export function list(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters']
): EndpointRequest<IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'deletedTeam-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 * The channels that are either shared with this deleted team or created in this deleted team.
 */
export function get(
  params?: IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'get',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
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
 * `PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['body'],
  params?: IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}']['response']
> {
  return {
    method: 'patch',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels']['response']
> {
  return {
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels',
    paramDefs: [{ name: 'deletedTeam-id', in: 'path' }],
    params,
    body,
  };
}
