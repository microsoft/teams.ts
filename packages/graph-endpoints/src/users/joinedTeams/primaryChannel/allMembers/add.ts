import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/allMembers/add',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
