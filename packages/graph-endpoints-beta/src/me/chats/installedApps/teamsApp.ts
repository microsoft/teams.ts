import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
