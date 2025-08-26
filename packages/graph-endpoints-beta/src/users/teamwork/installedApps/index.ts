export * as chat from './chat';
export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'delete'
  >;
  'GET /users/{user-id}/teamwork/installedApps': Operation<
    '/users/{user-id}/teamwork/installedApps',
    'get'
  >;
  'GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'get'
  >;
  'PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'patch'
  >;
  'POST /users/{user-id}/teamwork/installedApps': Operation<
    '/users/{user-id}/teamwork/installedApps',
    'post'
  >;
}

/**
 * `DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * Uninstall an app from the personal scope of the specified user.
 */
export function del(
  params?: IEndpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'user-id', in: 'path' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/installedApps`
 *
 * Retrieve the list of apps installed in the personal scope of the specified user.
 */
export function list(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /users/{user-id}/teamwork/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * Retrieve the app installed in the personal scope of the specified user.
 */
export function get(
  params?: IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'user-id', in: 'path' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/users/{user-id}/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /users/{user-id}/teamwork/installedApps`
 *
 * Install an app in the personal scope of the specified user.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/teamwork/installedApps']['body'],
  params?: IEndpoints['POST /users/{user-id}/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/teamwork/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/teamwork/installedApps',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
