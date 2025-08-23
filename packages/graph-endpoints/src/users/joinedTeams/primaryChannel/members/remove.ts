import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/members/remove',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
    ],
    params,
    body,
  };
}
