export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/installedApps': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps',
    'get'
  >;
  'GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /users/{user-id}/joinedTeams/{team-id}/installedApps': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps',
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
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/installedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/installedApps']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
