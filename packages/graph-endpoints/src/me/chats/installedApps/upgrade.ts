import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
 *
 * Upgrade an app installation within a chat.
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
> {
  return {
    method: 'post',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}
