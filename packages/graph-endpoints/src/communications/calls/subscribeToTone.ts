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
 * Subscribe to DTMF (dual-tone multi-frequency signaling) which allows you to be notified when the user presses keys on a &#x27;dialpad&#x27;.
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/subscribeToTone']['response']> {
  return {
    method: 'post',
    path: '/communications/calls/{call-id}/subscribeToTone',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
