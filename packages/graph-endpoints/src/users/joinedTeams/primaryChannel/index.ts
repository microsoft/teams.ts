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
  'DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
    'patch'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel`
 *
 * The general channel for the team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
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
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/primaryChannel']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
