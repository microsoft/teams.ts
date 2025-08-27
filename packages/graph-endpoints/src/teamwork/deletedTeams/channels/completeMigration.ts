import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import additional messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration']['response']
> {
  return {
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/completeMigration',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
