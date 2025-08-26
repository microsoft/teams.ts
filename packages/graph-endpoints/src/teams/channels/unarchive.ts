import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/channels/{channel-id}/unarchive': Operation<
    '/teams/{team-id}/channels/{channel-id}/unarchive',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/channels/{channel-id}/unarchive`
 *
 * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['body'],
  params?: IEndpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['parameters']
): EndpointRequest<
  IEndpoints['POST /teams/{team-id}/channels/{channel-id}/unarchive']['response']
> {
  return {
    method: 'post',
    path: '/teams/{team-id}/channels/{channel-id}/unarchive',
    paramDefs: [
      { name: 'team-id', in: 'path' },
      { name: 'channel-id', in: 'path' },
    ],
    params,
    body,
  };
}
