import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/stopRecording': Operation<
    '/communications/calls/{call-id}/stopRecording',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/stopRecording`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/stopRecording']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/stopRecording']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/stopRecording']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/stopRecording',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
