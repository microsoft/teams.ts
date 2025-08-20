import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote': Operation<
    '/teams/{team-id}/channels/{channel-id}/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/messages/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/messages/replyWithQuote',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
