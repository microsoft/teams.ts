import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/checkMemberObjects': Operation<
    '/groups/{group-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /groups/{group-id}/checkMemberObjects']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/checkMemberObjects']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/checkMemberObjects',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
