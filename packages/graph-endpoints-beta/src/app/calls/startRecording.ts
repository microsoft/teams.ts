import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/startRecording': Operation<
    '/app/calls/{call-id}/startRecording',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/startRecording`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/startRecording']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/startRecording']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/startRecording']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/startRecording',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
