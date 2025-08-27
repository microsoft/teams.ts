import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/completeMigration',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/completeMigration']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/completeMigration',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
