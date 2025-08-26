import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /teams/{team-id}/primaryChannel/unarchive': Operation<
    '/teams/{team-id}/primaryChannel/unarchive',
    'post'
  >;
}

/**
 * `POST /teams/{team-id}/primaryChannel/unarchive`
 *
 * Restore an archived channel. Unarchiving restores the ability for users to send messages and edit the channel. Channels are archived via the channel: archive method. Unarchiving is an asynchronous operation; a channel is unarchived when the asynchronous unarchiving operation completes successfully, which might occur after this method responds.
 */
export function create(
  body: IEndpoints['POST /teams/{team-id}/primaryChannel/unarchive']['body'],
  params?: IEndpoints['POST /teams/{team-id}/primaryChannel/unarchive']['parameters']
): EndpointRequest<IEndpoints['POST /teams/{team-id}/primaryChannel/unarchive']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/teams/{team-id}/primaryChannel/unarchive',
    paramDefs: [{ name: 'team-id', in: 'path' }],
    params,
    body,
  };
}
