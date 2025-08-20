import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/startRecording': Operation<
    '/communications/calls/{call-id}/startRecording',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/startRecording`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/startRecording']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/startRecording']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/startRecording']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/startRecording',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
