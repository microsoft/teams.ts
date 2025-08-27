import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects': Operation<
    '/administrativeUnits/{administrativeUnit-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /administrativeUnits/{administrativeUnit-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/administrativeUnits/{administrativeUnit-id}/getMemberObjects',
    paramDefs: [{ name: 'administrativeUnit-id', in: 'path' }],
    params,
    body,
  };
}
