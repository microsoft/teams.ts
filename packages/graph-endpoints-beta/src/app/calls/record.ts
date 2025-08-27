import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/record': Operation<'/app/calls/{call-id}/record', 'post'>;
}

/**
 * `POST /app/calls/{call-id}/record`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/record']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/record']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/record']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/record',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
