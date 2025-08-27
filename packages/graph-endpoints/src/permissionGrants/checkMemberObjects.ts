import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects': Operation<
    '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects',
    'post'
  >;
}

/**
 * `POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects`
 *
 */
export function create(
  body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['body'],
  params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects']['response']
> {
  return {
    method: 'post',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/checkMemberObjects',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}
