import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/restore': Operation<'/users/{user-id}/restore', 'post'>;
}

/**
  * `POST /users/{user-id}/restore`
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
  body: IEndpoints['POST /users/{user-id}/restore']['body'],
  params?: IEndpoints['POST /users/{user-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /users/{user-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/users/{user-id}/restore',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
