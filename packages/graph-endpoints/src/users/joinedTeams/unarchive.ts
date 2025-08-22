import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/unarchive': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/unarchive`
 *
 * Restore an archived team. This API restores users&#x27; ability to send messages and edit the team, abiding by tenant and team settings. A Team is archived using the archive API. Unarchiving is an async operation. A team is unarchived once the async operation completes successfully, which might occur subsequent to a response from this API.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/unarchive']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/unarchive']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/unarchive',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
