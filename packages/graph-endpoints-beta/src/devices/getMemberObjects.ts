import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/{device-id}/getMemberObjects': Operation<
    '/devices/{device-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /devices/{device-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /devices/{device-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /devices/{device-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/devices/{device-id}/getMemberObjects',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
