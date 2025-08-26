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
  * Restore a recently deleted directory object from deleted items. The following types are supported:
- administrativeUnit
- application
- certificateBasedAuthPki
- certificateAuthorityDetail
- externalUserProfile
- group
- pendingExternalUserProfile
- servicePrincipal
- user If an item was accidentally deleted, you can fully restore the item. This isn&#x27;t applicable to security groups, which are deleted permanently. Also, restoring an application doesn&#x27;t restore the associated service principal automatically. You must call this API to explicitly restore the deleted service principal. A recently deleted item remains available for up to 30 days. After 30 days, the item is permanently deleted.
  */
export function create(
  body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['body'],
  params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/restore']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/restore',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}
