import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
