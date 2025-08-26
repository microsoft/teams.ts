export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /teams/{team-id}/installedApps': Operation<'/teams/{team-id}/installedApps', 'get'>;
  'GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /teams/{team-id}/installedApps': Operation<'/teams/{team-id}/installedApps', 'post'>;
}

/**
 * `DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Uninstalls an app from the specified team.
 */
export function del(
  params?: IEndpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/installedApps`
 *
 * Retrieve the list of apps installed in the specified team.
 */
export function list(
  params?: IEndpoints['GET /teams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /teams/{team-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 * Retrieve the app installed in the specified team.
 */
export function get(
  params?: IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /teams/{team-id}/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /teams/{team-id}/installedApps`
 *
 * Install an app to the specified team.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/installedApps']['body'],
  params?: IEndpoints['POST /teams/{team-id}/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/installedApps']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/installedApps',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
