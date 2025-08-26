import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/members/remove': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/members/remove',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/members/remove`
 *
 * Remove multiple members from a team in a single request. The response provides details about which memberships could and couldn&#x27;t be removed.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/members/remove']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/members/remove',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
