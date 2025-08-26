import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete`
 *
 * Delete a single chatMessage or a chat message reply in a channel or a chat.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/softDelete',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
