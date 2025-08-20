import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/myRoles': Operation<
    '/tenantRelationships/managedTenants/myRoles',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}': Operation<
    '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/myRoles': Operation<
    '/tenantRelationships/managedTenants/myRoles',
    'post'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'myRole-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
  * `GET /tenantRelationships/managedTenants/myRoles`
  *
  * Get the roles that a signed-in user has through a delegated relationship across managed tenants. For information on the types of delegated relationships between a Managed Service Provider (MSP) who uses Microsoft 365 Lighthouse, and their business customers with Microsoft 365 Business Premium tenants, see the following articles on the Partner Center:
- Delegated administration privileges (DAP)
- Granular delegated admin privileges (GDAP)
  */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/myRoles']['parameters']
): EndpointRequest<IEndpoints['GET /tenantRelationships/managedTenants/myRoles']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/myRoles',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
 *
 * The collection of role assignments to a signed-in user for a managed tenant.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'myRole-tenantId', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/myRoles/{myRole-tenantId}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/myRoles/{myRole-tenantId}',
    paramDefs: [{ name: 'myRole-tenantId', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/myRoles`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/myRoles']['body'],
  params?: IEndpoints['POST /tenantRelationships/managedTenants/myRoles']['parameters']
): EndpointRequest<IEndpoints['POST /tenantRelationships/managedTenants/myRoles']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/myRoles',
    paramDefs: [],
    params,
    body,
  };
}
