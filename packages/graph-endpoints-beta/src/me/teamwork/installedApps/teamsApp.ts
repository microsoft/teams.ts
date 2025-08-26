import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
