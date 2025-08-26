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
  'DELETE /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'get'>;
  'GET /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams': Operation<'/users/{user-id}/joinedTeams', 'post'>;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams`
 *
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['parameters']
): EndpointRequest<IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}']['response']> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/joinedTeams']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
