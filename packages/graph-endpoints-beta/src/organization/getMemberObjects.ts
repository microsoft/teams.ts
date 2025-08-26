import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/{organization-id}/getMemberObjects': Operation<
    '/organization/{organization-id}/getMemberObjects',
    'post'
  >;
}

/**
 * `POST /organization/{organization-id}/getMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /organization/{organization-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/organization/{organization-id}/getMemberObjects',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
