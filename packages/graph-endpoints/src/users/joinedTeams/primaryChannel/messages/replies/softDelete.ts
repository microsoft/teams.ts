import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete`
 *
 * Delete a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/softDelete',
    paramDefs: [
      { name: 'user-id', in: 'path' },
      { name: 'team-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
