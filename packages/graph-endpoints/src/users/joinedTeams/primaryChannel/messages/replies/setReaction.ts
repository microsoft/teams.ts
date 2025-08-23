import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/users/{user-id}/joinedTeams/{team-id}/primaryChannel/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
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
