import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /communications/calls/{call-id}/sendDtmfTones': Operation<
    '/communications/calls/{call-id}/sendDtmfTones',
    'post'
  >;
}

/**
 * `POST /communications/calls/{call-id}/sendDtmfTones`
 *
 */
export function create(
  body: IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['body'],
  params?: IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['parameters']
): EndpointRequest<IEndpoints['POST /communications/calls/{call-id}/sendDtmfTones']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/communications/calls/{call-id}/sendDtmfTones',
    paramDefs: [{ name: 'call-id', in: 'path' }],
    params,
    body,
  };
}
