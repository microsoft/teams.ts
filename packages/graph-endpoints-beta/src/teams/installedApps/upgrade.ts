import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade': Operation<
    '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade`
 *
 * Upgrade an app installation within a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['body'],
  params?: IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/installedApps/{teamsAppInstallation-id}/upgrade',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'teamsAppInstallation-id', in: 'path' },
    ],
    params,
    body,
  };
}
