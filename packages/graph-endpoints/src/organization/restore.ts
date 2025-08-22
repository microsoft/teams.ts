import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /organization/{organization-id}/restore': Operation<
    '/organization/{organization-id}/restore',
    'post'
  >;
}

/**
  * `POST /organization/{organization-id}/restore`
  *
  * Restore a recently deleted application, group, servicePrincipal, administrative unit, or user object from deleted items.  Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- group
- servicePrincipal
  */
export function create(
  body: IEndpoints['POST /organization/{organization-id}/restore']['body'],
  params?: IEndpoints['POST /organization/{organization-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /organization/{organization-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/organization/{organization-id}/restore',
    paramDefs: [{ name: 'organization-id', in: 'path' }],
    params,
    body,
  };
}
