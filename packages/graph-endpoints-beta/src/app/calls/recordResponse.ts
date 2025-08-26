import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/recordResponse': Operation<
    '/app/calls/{call-id}/recordResponse',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/recordResponse`
 *
 * Record a short audio response from the caller. A bot can use this API to capture a voice response from a caller after they&#x27;re prompted for a response. For more information about how to handle operations, see commsOperation. This action isn&#x27;t intended to record the entire call. The maximum length of recording is 2 minutes.The Cloud Communications Platform doesn&#x27;t save the recording permanently and discards it shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value provided in the completed notification.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/recordResponse']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/recordResponse']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/recordResponse']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/recordResponse',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
