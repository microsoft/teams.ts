import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/participants/muteAll': Operation<
    '/app/calls/{call-id}/participants/muteAll',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/participants/muteAll`
 *
 * Mute all participants in the call.
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/participants/muteAll']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/participants/muteAll',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
