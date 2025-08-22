import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/me/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
