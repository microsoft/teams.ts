import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/mute': Operation<'/app/calls/{call-id}/mute', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/mute`
 *
 * Allows the application to mute itself. This is a server mute, meaning that the server drops all audio packets for this participant, even if the participant continues to stream audio. For more information about how to handle mute operations, see muteParticipantOperation.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/mute']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/mute']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/mute']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/mute',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
