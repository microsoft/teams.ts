import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
