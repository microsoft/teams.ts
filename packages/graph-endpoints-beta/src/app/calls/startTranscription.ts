import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/startTranscription': Operation<
    '/app/calls/{call-id}/startTranscription',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/startTranscription`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/startTranscription']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/startTranscription']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/startTranscription']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/startTranscription',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
