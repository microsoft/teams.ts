import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/record': Operation<
    '/communications/calls/{call-id}/record',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/record`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/record']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/record']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/record']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/record',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
