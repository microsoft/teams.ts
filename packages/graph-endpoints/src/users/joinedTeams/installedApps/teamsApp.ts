import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/joinedTeams/{team-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
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
