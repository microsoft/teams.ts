import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete': Operation<
    '/me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
 *
 * Delete a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
