import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/{organization-id}/checkMemberObjects': Operation<
    '/organization/{organization-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /organization/{organization-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/checkMemberObjects',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
