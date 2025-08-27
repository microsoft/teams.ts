export * as teamsApp from './teamsApp';
export * as teamsAppDefinition from './teamsAppDefinition';
export * as upgrade from './upgrade';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'delete'
  >;
  'GET /groups/{group-id}/team/installedApps': Operation<
    '/groups/{group-id}/team/installedApps',
    'get'
  >;
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'get'
  >;
  'PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    'patch'
  >;
  'POST /groups/{group-id}/team/installedApps': Operation<
    '/groups/{group-id}/team/installedApps',
    'post'
  >;
}

/**
 * `DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'delete',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/installedApps`
 *
 * The apps installed in this team.
 */
export function list(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps']['parameters']
): EndpointRequest<IEndpoints['GET /groups/{group-id}/team/installedApps']['response']> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 * The apps installed in this team.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['body'],
  params?: IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}']['response']
> {
  return {
    method: 'patch',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/team/installedApps`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/installedApps']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/installedApps']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/team/installedApps']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/installedApps',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
