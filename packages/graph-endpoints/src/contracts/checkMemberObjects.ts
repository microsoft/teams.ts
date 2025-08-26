import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/{contract-id}/checkMemberObjects': Operation<
    '/contracts/{contract-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /contracts/{contract-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/checkMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/contracts/{contract-id}/checkMemberObjects',
    paramDefs: [{ name: 'contract-id', in: 'path' }],
    params,
    body,
  };
}
