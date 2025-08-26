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
 */
export function create(
  body: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['body'],
  params?: IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['parameters']
): EndpointRequest<
  IEndpoints['POST /permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/permissionGrants/{resourceSpecificPermissionGrant-id}/getMemberObjects',
    paramDefs: [{ name: 'resourceSpecificPermissionGrant-id', in: 'path' }],
    params,
    body,
  };
}
