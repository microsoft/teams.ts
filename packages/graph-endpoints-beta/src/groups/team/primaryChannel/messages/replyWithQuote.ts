import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages/replyWithQuote',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
