import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateSteps': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managementTemplateStep-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: {
      path: ['managementTemplateStep-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}',
    paramDefs: {
      path: ['managementTemplateStep-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateSteps`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateSteps']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateSteps']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateSteps',
    body,
  };
}

export const acceptedVersion = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/acceptedVersion',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStep-id'],
      },
      params,
    };
  },
};

export const managementTemplate = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/managementTemplate',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStep-id'],
      },
      params,
    };
  },
};

export const versions = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managementTemplateStep-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateSteps/{managementTemplateStep-id}/versions/{managementTemplateStepVersion-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStep-id', 'managementTemplateStepVersion-id'],
      },
      params,
    };
  },
};
