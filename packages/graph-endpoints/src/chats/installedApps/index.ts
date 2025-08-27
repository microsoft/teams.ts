export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /chats/{chat-id}/installedApps': Operation<'/chats/{chat-id}/installedApps', 'get'>;
  'GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /chats/{chat-id}/installedApps': Operation<'/chats/{chat-id}/installedApps', 'post'>;
}

/**
 * `DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Uninstall an app installed within a chat.
 */
export function del(
  params?: IEndpoints['DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/installedApps`
 *
 * List all app installations within a chat.
 */
export function list(
  params?: IEndpoints['GET /chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /chats/{chat-id}/installedApps']['response']> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Get an app installed in a chat.
 */
export function get(
  params?: IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /chats/{chat-id}/installedApps`
 *
 * Install a teamsApp to the specified chat.
 */
export function create(
  body: IEndpoints['POST /chats/{chat-id}/installedApps']['body'],
  params?: IEndpoints['POST /chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /chats/{chat-id}/installedApps']['response']> {
  return {
    method: 'post',
    path: '/chats/{chat-id}/installedApps',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
