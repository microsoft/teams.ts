export * as allChannels from './allChannels';
export * as archive from './archive';
export * as channels from './channels';
export * as clone from './clone';
export * as completeMigration from './completeMigration';
export * as group from './group';
export * as incomingChannels from './incomingChannels';
export * as installedApps from './installedApps';
export * as members from './members';
export * as operations from './operations';
export * as permissionGrants from './permissionGrants';
export * as photo from './photo';
export * as primaryChannel from './primaryChannel';
export * as schedule from './schedule';
export * as sendActivityNotification from './sendActivityNotification';
export * as tags from './tags';
export * as template from './template';
export * as unarchive from './unarchive';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'delete'>;
  'GET /me/joinedTeams': Operation<'/me/joinedTeams', 'get'>;
  'GET /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'get'>;
  'PATCH /me/joinedTeams/{team-id}': Operation<'/me/joinedTeams/{team-id}', 'patch'>;
  'POST /me/joinedTeams': Operation<'/me/joinedTeams', 'post'>;
}

/**
 * `DELETE /me/joinedTeams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams`
 *
 * Get the teams in Microsoft Teams that the user is a direct member of.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /me/joinedTeams/{team-id}']['response']> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams']['body'],
  params?: IEndpoints['POST /me/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams',
    paramDefs: [],
    params,
    body,
  };
}
