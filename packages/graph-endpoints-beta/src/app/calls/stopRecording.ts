import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/stopRecording': Operation<
    '/app/calls/{call-id}/stopRecording',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/stopRecording`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/stopRecording']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/stopRecording']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/stopRecording']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/stopRecording',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
