import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/getMemberObjects': Operation<
    '/groups/{group-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /groups/{group-id}/getMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/getMemberObjects']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/getMemberObjects',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
