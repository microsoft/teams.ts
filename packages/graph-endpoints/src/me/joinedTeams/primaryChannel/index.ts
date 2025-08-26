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
  'DELETE /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/primaryChannel': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel',
    'patch'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/primaryChannel`
 *
 * The general channel for the team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}/primaryChannel']['response']> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/primaryChannel',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
