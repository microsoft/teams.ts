import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects',
    'post'
  >;
}

/**
  * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects`
  *
  * Return all IDs for the groups, administrative units, and directory roles that an object of one of the following types is a member of:
- user
- group
- service principal
- organizational contact
- device
- directory object This function is transitive. Only users and role-enabled groups can be members of directory roles.
  */
export function create(
  body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}
