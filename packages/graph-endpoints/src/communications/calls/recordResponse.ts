import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/recordResponse': Operation<
    '/communications/calls/{call-id}/recordResponse',
    'post'
  >;
}

/**
  * `POST /communications/calls/{call-id}/recordResponse`
  *
  * Records a short audio response from the caller.
A bot can utilize this to capture a voice response from a caller after they are prompted for a response. For further information on how to handle operations, please review commsOperation This action is not intended to record the entire call. The maximum length of recording is 2 minutes. The recording is not saved permanently by the Cloud Communications Platform and is discarded shortly after the call ends. The bot must download the recording promptly after the recording operation finishes by using the recordingLocation value that&#x27;s given in the completed notification.
  */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/recordResponse']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/recordResponse']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/recordResponse']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/recordResponse',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
