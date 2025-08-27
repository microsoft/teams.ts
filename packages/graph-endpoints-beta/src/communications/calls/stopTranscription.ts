import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/stopTranscription': Operation<
    '/communications/calls/{call-id}/stopTranscription',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/stopTranscription`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/stopTranscription']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/stopTranscription']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/stopTranscription']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/stopTranscription',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
