import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction': Operation<
    '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/me/joinedTeams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
