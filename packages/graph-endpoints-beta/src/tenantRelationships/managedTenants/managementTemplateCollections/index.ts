import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managementTemplateCollection-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: {
      path: ['managementTemplateCollection-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}',
    paramDefs: {
      path: ['managementTemplateCollection-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateCollections`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollections']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateCollections']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateCollections',
    body,
  };
}

export const managementTemplates = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managementTemplateCollection-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateCollections/{managementTemplateCollection-id}/managementTemplates/{managementTemplate-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateCollection-id', 'managementTemplate-id'],
      },
      params,
    };
  },
};
