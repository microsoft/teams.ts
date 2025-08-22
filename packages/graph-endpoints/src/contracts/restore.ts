import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contracts/{contract-id}/restore': Operation<'/contracts/{contract-id}/restore', 'post'>;
}

/**
  * `POST /contracts/{contract-id}/restore`
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
  body: IEndpoints['POST /contracts/{contract-id}/restore']['body'],
  params?: IEndpoints['POST /contracts/{contract-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /contracts/{contract-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/contracts/{contract-id}/restore',
    paramDefs: [{ name: 'contract-id', in: 'path' }],
    params,
    body,
  };
}
