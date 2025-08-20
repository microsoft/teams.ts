import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/mute': Operation<
    '/communications/calls/{call-id}/mute',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/mute`
 *
 * Allows the application to mute itself. This is a server mute, meaning that the server will drop all audio packets for this participant, even if the participant continues to stream audio. For more details about how to handle mute operations, see muteParticipantOperation
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/mute']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/mute']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/mute']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/mute',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
