import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp`
 *
 * The app that is installed.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsApp',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
