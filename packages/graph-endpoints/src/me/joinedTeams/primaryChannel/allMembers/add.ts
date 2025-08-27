import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/allMembers/add',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add`
 *
 * Add multiple members in a single request to a team. The response provides details about which memberships could and couldn&#x27;t be created.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/allMembers/add']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/allMembers/add',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
