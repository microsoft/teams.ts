import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/unsetReaction',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
