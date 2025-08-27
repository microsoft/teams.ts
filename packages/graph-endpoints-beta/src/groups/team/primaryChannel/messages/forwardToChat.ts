import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/forwardToChat',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat`
 *
 * Forward a chat message, a channel message, or a channel message reply to a chat.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/forwardToChat']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages/forwardToChat',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
