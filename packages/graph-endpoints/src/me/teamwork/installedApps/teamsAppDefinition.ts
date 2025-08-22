import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    method: 'get',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
