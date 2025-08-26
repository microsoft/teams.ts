import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/unmute': Operation<'/app/calls/{call-id}/unmute', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/unmute`
 *
 * Allow the application to unmute itself. This is a server unmute, meaning that the server will start sending audio packets for this participant to other participants again. For more information about how to handle unmute operations, see unmuteParticipantOperation.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/unmute']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/unmute']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/unmute']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/unmute',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
