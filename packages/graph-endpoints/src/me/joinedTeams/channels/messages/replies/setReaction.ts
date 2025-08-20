import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
