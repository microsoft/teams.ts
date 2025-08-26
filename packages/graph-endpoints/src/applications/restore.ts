import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /applications/{application-id}/restore': Operation<
    '/applications/{application-id}/restore',
    'post'
  >;
}

/**
  * `POST /applications/{application-id}/restore`
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
  body: IEndpoints['POST /applications/{application-id}/restore']['body'],
  params?: IEndpoints['POST /applications/{application-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /applications/{application-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/applications/{application-id}/restore',
    paramDefs: [{ name: 'application-id', in: 'path' }],
    params,
    body,
  };
}
