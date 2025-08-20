import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    'get'
  >;
}

/**
 * `GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition`
 *
 * The details of this version of the app.
 */
export function get(
  params?: IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['parameters']
): EndpointRequest<
  IEndpoints['GET /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition']['response']
> {
  return {
    method: 'get',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/teamsAppDefinition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
  };
}
