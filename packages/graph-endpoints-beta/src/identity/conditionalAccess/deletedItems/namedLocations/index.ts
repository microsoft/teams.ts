import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    'delete'
  >;
  'GET /identity/conditionalAccess/deletedItems/namedLocations': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations',
    'get'
  >;
  'GET /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    'get'
  >;
  'PATCH /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    'patch'
  >;
  'POST /identity/conditionalAccess/deletedItems/namedLocations': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations',
    'post'
  >;
  'POST /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore': Operation<
    '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore',
    'post'
  >;
}

/**
  * `DELETE /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}`
  *
  * Permanently delete a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function del(
  params?: IEndpoints['DELETE /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['namedLocation-id'],
    },
    params,
  };
}

/**
  * `GET /identity/conditionalAccess/deletedItems/namedLocations`
  *
  * Get a list of the policyDeletableItem objects and their properties, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function list(
  params?: IEndpoints['GET /identity/conditionalAccess/deletedItems/namedLocations']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/deletedItems/namedLocations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/deletedItems/namedLocations',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
  * `GET /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}`
  *
  * Read the properties and relationships of a policyDeletableItem object, which might be one of the following deleted policy types:
- crossTenantAccessPolicyConfigurationPartner
- crossTenantIdentitySyncPolicyPartner
- conditionalAccessPolicy
- namedLocation
  */
export function get(
  params?: IEndpoints['GET /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    paramDefs: {
      path: ['namedLocation-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['body'],
  params?: IEndpoints['PATCH /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}',
    paramDefs: {
      path: ['namedLocation-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /identity/conditionalAccess/deletedItems/namedLocations`
 *
 */
export function create(
  body: IEndpoints['POST /identity/conditionalAccess/deletedItems/namedLocations']['body']
): EndpointRequest<
  IEndpoints['POST /identity/conditionalAccess/deletedItems/namedLocations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/conditionalAccess/deletedItems/namedLocations',
    body,
  };
}

export const restore = {
  /**
   * `POST /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore`
   *
   * Restore a deleted countryNamedLocation object.
   */
  create: function create(
    params?: IEndpoints['POST /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore']['response']
  > {
    return {
      ver: 'beta',
      method: 'post',
      path: '/identity/conditionalAccess/deletedItems/namedLocations/{namedLocation-id}/restore',
      paramDefs: {
        path: ['namedLocation-id'],
      },
      params,
    };
  },
};
