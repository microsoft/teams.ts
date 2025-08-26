import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    'get'
  >;
}

/**
 * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat`
 *
 * Retrieve the chat of the specified user and Teams app.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat']['response']
> {
  return {
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}/chat',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
