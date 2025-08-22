import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/restore',
    'post'
  >;
}

/**
  * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore`
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
  body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['body'],
  params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['response']
> {
  return {
    method: 'post',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/restore',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}
