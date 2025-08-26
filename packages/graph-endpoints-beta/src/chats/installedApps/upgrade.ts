import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade`
 *
 * Upgrade an app installation within a chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}
