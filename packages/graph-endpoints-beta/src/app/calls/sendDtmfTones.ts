import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /app/calls/{call-id}/sendDtmfTones': Operation<
    '/app/calls/{call-id}/sendDtmfTones',
    'post'
  >;
}

/**
 * `POST /app/calls/{call-id}/sendDtmfTones`
 *
 */
export function create(
  body: IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['body'],
  params?: IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['parameters']
): EndpointRequest<IEndpoints['POST /app/calls/{call-id}/sendDtmfTones']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/app/calls/{call-id}/sendDtmfTones',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
