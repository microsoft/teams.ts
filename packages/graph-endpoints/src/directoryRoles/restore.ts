import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /directoryRoles/{directoryRole-id}/restore': Operation<
    '/directoryRoles/{directoryRole-id}/restore',
    'post'
  >;
}

/**
  * `POST /directoryRoles/{directoryRole-id}/restore`
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
  body: IEndpoints['POST /directoryRoles/{directoryRole-id}/restore']['body'],
  params?: IEndpoints['POST /directoryRoles/{directoryRole-id}/restore']['parameters']
): EndpointRequest<IEndpoints['POST /directoryRoles/{directoryRole-id}/restore']['response']> {
  return {
    method: 'post',
    path: '/directoryRoles/{directoryRole-id}/restore',
    paramDefs: [{ name: 'directoryRole-id', in: 'path' }],
    params,
    body,
  };
}
