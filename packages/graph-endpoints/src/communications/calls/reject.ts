import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/reject': Operation<
    '/communications/calls/{call-id}/reject',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/reject`
 *
 * Enable a bot to reject an incoming call. The incoming call request can be an invite from a participant in a group call or a peer-to-peer call. If an invite to a group call is received, the notification will contain the chatInfo and meetingInfo parameters. The bot is expected to answer or reject the call before the call times out. The current timeout value is 15 seconds. This API does not end existing calls that have already been answered. Use delete call to end a call.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/reject']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/reject']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/reject']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/reject',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
