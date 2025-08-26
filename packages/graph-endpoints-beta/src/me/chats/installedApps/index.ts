export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/chats/{chat-id}/installedApps': Operation<'/me/chats/{chat-id}/installedApps', 'get'>;
  'GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/chats/{chat-id}/installedApps': Operation<'/me/chats/{chat-id}/installedApps', 'post'>;
}

/**
 * `DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/chats/{chat-id}/installedApps`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function list(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps',
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
 * `GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 * A collection of all the apps in the chat. Nullable.
 */
export function get(
  params?: IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
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
 * `PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/chats/{chat-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'chat-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /me/chats/{chat-id}/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/chats/{chat-id}/installedApps']['body'],
  params?: IEndpoints['POST /me/chats/{chat-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/chats/{chat-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/chats/{chat-id}/installedApps',
    paramDefs: [{ name: 'chat-id', in: 'path' }],
    params,
    body,
  };
}
