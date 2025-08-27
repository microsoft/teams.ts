import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /devices/{device-id}/checkMemberObjects': Operation<
    '/devices/{device-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /devices/{device-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /devices/{device-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /devices/{device-id}/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /devices/{device-id}/checkMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/devices/{device-id}/checkMemberObjects',
    paramDefs: [{ name: 'device-id', in: 'path' }],
    params,
    body,
  };
}
