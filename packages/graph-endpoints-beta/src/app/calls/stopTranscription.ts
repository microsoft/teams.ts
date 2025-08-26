import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/stopTranscription': Operation<
    '/app/calls/{call-id}/stopTranscription',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/stopTranscription`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/stopTranscription']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/stopTranscription']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/stopTranscription']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/stopTranscription',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
