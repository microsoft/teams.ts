import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/subscribeToTone': Operation<
    '/communications/calls/{call-id}/subscribeToTone',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/subscribeToTone`
 *
 * Subscribe to DTMF (dual-tone multi-frequency signaling) to allow you to be notified when the user presses keys on a dialpad. This action is supported only for calls that are initiated with serviceHostedMediaConfig.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/subscribeToTone',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
