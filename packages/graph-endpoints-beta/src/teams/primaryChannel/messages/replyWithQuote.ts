import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/messages/replyWithQuote': Operation<
    '/teams/{team-id}/primaryChannel/messages/replyWithQuote',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages/replyWithQuote`
 *
 * Reply with quote to a single chat message or multiple chat messages in a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/messages/replyWithQuote']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages/replyWithQuote',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
