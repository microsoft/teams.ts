import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/team/channels/{channel-id}/unarchive': Operation<
    '/groups/{group-id}/team/channels/{channel-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/team/channels/{channel-id}/unarchive`
 *
 * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/unarchive']['body'],
  params?: IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/team/channels/{channel-id}/unarchive']['response']
> {
  return {
    method: 'post',
    path: '/groups/{group-id}/team/channels/{channel-id}/unarchive',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
