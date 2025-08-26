import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    'get'
  >;
}

/**
 * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat`
 *
 * The chat between the user and Teams app.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['response']
> {
  return {
    method: 'get',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
