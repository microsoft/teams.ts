import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /contacts/{orgContact-id}/restore': Operation<'/contacts/{orgContact-id}/restore', 'post'>;
}

/**
  * `POST /contacts/{orgContact-id}/restore`
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
  body: IEndpoints['POST /contacts/{orgContact-id}/restore']['body'],
  params?: IEndpoints['POST /contacts/{orgContact-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /contacts/{orgContact-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/contacts/{orgContact-id}/restore',
    paramDefs: [{ name: 'orgContact-id', in: 'path' }],
    params,
    body,
  };
}
