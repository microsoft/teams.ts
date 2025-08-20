import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
