import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/participants/{participant-id}/mute': Operation<
    '/communications/calls/{call-id}/participants/{participant-id}/mute',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/participants/{participant-id}/mute`
 *
 * Mute a specific participant in the call. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/participants/{participant-id}/mute']['response']
> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/participants/{participant-id}/mute',
    paramDefs: [
      { name: 'call-id', in: 'path' },
      { name: 'participant-id', in: 'path' },
    ],
    params,
    body,
  };
}
