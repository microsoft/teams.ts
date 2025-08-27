import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction': Operation<
    '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/primaryChannel/messages/{chatMessage-id}/setReaction',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
    ],
    params,
    body,
  };
}
