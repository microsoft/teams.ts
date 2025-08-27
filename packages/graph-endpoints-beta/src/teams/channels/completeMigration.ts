import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/completeMigration': Operation<
    '/teams/{team-id}/channels/{channel-id}/completeMigration',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/completeMigration`
 *
 * Complete the message migration process by removing migration mode from a channel in a team. Migration mode is a special state that prevents certain operations, like sending messages and adding members, during the data migration process. After a completeMigration request is made, you can&#x27;t import more messages into the team. You can add members to the team after the request returns a successful response.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/completeMigration']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/completeMigration']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/completeMigration']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/completeMigration',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
