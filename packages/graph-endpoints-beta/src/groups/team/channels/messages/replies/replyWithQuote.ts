import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/replyWithQuote',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
