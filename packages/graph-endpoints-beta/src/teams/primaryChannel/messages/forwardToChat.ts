import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/messages/forwardToChat': Operation<
    '/teams/{team-id}/primaryChannel/messages/forwardToChat',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/messages/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/primaryChannel/messages/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/messages/forwardToChat',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
