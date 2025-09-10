import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplates',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplates': Operation<
    '/tenantRelationships/managedTenants/managementTemplates',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managementTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates`
 *
 * Get a list of the managementTemplate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 * Read the properties and relationships of a managementTemplate object.
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: {
      path: ['managementTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}',
    paramDefs: {
      path: ['managementTemplate-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplates`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplates']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplates']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplates',
    body,
  };
}

export const managementTemplateCollections = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managementTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateCollections/{managementTemplateCollection-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplate-id', 'managementTemplateCollection-id'],
      },
      params,
    };
  },
};

export const managementTemplateSteps = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managementTemplate-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplates/{managementTemplate-id}/managementTemplateSteps/{managementTemplateStep-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplate-id', 'managementTemplateStep-id'],
      },
      params,
    };
  },
};
