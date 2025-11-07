import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/deletedItems/policies': Operation<
    '/identity/conditionalAccess/deletedItems/policies',
    'get'
  >;
  'GET /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}': Operation<
    '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/deletedItems/policies': Operation<
    '/identity/conditionalAccess/deletedItems/policies',
    'post'
  >;
  'POST /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore': Operation<
    '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore',
    'post'
  >;
}

/**
  * `DELETE /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}`
  *
  * Permanently delete a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['conditionalAccessPolicy-id'],
    },
    params,
  };
}

/**
  * `GET /identity/conditionalAccess/deletedItems/policies`
  *
  * Get a list of the policyDeletableItem objects and their properties, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/deletedItems/policies']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/deletedItems/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/deletedItems/policies',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}`
  *
  * Read the properties and relationships of a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}',
    paramDefs: {
      path: ['conditionalAccessPolicy-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/deletedItems/policies`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/deletedItems/policies']['body']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/deletedItems/policies']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/deletedItems/policies',
    body,
  };
}

export const restore = {
  /**
   * `POST /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore`
   *
   * Restore a deleted conditionalAccessPolicy object.
   */
  create: function create(
    params?: IEndpoints['POST /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/deletedItems/policies/{conditionalAccessPolicy-id}/restore',
      paramDefs: {
        path: ['conditionalAccessPolicy-id'],
      },
      params,
    };
  },
};
