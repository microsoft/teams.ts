export * as chat from './chat';
export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'delete'
  >;
  'GET /me/teamwork/installedApps': Operation<'/me/teamwork/installedApps', 'get'>;
  'GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'get'
  >;
  'PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}': Operation<
    '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    'patch'
  >;
  'POST /me/teamwork/installedApps': Operation<'/me/teamwork/installedApps', 'post'>;
}

/**
 * `DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /me/teamwork/installedApps`
 *
 * The apps installed in the personal scope of this user.
 */
export function list(
  params?: IEndpoints['GET /me/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /me/teamwork/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/teamwork/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 * The apps installed in the personal scope of this user.
 */
export function get(
  params?: IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'userScopeTeamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/me/teamwork/installedApps/{userScopeTeamsAppInstallation-id}',
    paramDefs: [{ name: 'userScopeTeamsAppInstallation-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /me/teamwork/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /me/teamwork/installedApps']['body'],
  params?: IEndpoints['POST /me/teamwork/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /me/teamwork/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/teamwork/installedApps',
    paramDefs: [],
    params,
    body,
  };
}
