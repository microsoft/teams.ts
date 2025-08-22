import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
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
