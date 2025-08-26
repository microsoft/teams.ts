import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/remove',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/remove']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/remove',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
