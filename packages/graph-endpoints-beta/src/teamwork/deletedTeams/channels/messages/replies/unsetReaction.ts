import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction': Operation<
    '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['body'],
  params?: IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teamwork/deletedTeams/{deletedTeam-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/unsetReaction',
    paramDefs: [
      { name: 'deletedTeam-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
