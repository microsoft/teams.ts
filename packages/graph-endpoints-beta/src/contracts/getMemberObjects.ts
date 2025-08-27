import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/{contract-id}/getMemberObjects': Operation<
    '/contracts/{contract-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /contracts/{contract-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/contracts/{contract-id}/getMemberObjects',
    paramDefs: [{ name: 'contract-id', in: 'path' }],
    params,
    body,
  };
}
