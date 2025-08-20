import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade`
 *
 * Upgrade an app installation within a chat.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/installedApps/{teamsAppInstallation-id}/upgrade',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}
