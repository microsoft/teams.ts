import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/channels/{channel-id}/allMembers/add',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
