import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/restore': Operation<'/groups/{group-id}/restore', 'post'>;
}

/**
  * `POST /groups/{group-id}/restore`
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
  body: IEndpoints['POST /groups/{group-id}/restore']['body'],
  params?: IEndpoints['POST /groups/{group-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/groups/{group-id}/restore',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
