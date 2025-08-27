export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps': Operation<
    '/me/joinedTeams/{team-id}/installedApps',
    'get'
  >;
  'GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/joinedTeams/{team-id}/installedApps': Operation<
    '/me/joinedTeams/{team-id}/installedApps',
    'post'
  >;
}

/**
 * `DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/joinedTeams/{team-id}/installedApps']['response']> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/joinedTeams/{team-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedTeams/{team-id}/installedApps']['response']> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/installedApps',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
