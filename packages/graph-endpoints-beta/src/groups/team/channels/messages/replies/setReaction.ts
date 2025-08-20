import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/messages/{chatMessage-id}/replies/{chatMessage-id1}/setReaction',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
      { name: 'chatMessage-id', in: 'path' },
      { name: 'chatMessage-id1', in: 'path' },
    ],
    params,
    body,
  };
}
