import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /me/restore': Operation<'/me/restore', 'post'>;
}

/**
  * `POST /me/restore`
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
  body: IEndpoints['POST /me/restore']['body'],
  params?: IEndpoints['POST /me/restore']['parameters']
): EndpointRequest<IEndpoints['POST /me/restore']['response']> {
  return {
    method: 'post',
    path: '/me/restore',
    paramDefs: [],
    params,
    body,
  };
}
