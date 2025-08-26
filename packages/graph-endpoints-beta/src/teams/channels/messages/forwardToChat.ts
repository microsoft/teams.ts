import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/forwardToChat',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages/forwardToChat',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
