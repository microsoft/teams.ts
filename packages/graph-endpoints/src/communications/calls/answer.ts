import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/answer': Operation<
    '/communications/calls/{call-id}/answer',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/answer`
 *
 * Enable a bot to answer an incoming call. The incoming call request can be an invitation from a participant in a group call or a peer-to-peer call. If an invitation to a group call is received, the notification contains the chatInfo and meetingInfo parameters. The bot is expected to answer, reject, or redirect the call before the call times out. The current timeout value is 15 seconds for regular scenarios and 5 seconds for policy-based recording scenarios. This API supports the following PSTN scenarios:
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/answer']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/answer']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/answer']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/answer',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
