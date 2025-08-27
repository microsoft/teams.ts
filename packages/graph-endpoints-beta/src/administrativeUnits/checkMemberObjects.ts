import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects': Operation<
    '/administrativeUnits/{administrativeUnit-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/checkMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits/{administrativeUnit-id}/checkMemberObjects',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
