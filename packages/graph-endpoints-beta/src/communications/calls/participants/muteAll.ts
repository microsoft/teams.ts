import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/participants/muteAll': Operation<
    '/communications/calls/{call-id}/participants/muteAll',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/participants/muteAll`
 *
 * Mute all participants in the call.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/participants/muteAll']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/participants/muteAll']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/participants/muteAll']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/participants/muteAll',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
