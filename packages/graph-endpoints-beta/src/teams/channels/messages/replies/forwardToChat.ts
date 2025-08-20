import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages/{chatMessage-id}/replies/forwardToChat',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
