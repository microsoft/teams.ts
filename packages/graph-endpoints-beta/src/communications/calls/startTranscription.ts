import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/startTranscription': Operation<
    '/communications/calls/{call-id}/startTranscription',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/startTranscription`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/startTranscription']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/startTranscription']['parameters']
): EndpointRequest<
  IEndpoints['POST /communications/calls/{call-id}/startTranscription']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/startTranscription',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
