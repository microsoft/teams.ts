import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlertRules': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantAlertRule-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: {
      path: ['managedTenantAlertRule-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}',
    paramDefs: {
      path: ['managedTenantAlertRule-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlertRules`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRules']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRules']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRules',
    body,
  };
}

export const alerts = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedTenantAlertRule-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/alerts/{managedTenantAlert-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlertRule-id', 'managedTenantAlert-id'],
      },
      params,
    };
  },
};

export const ruleDefinition = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertRules/{managedTenantAlertRule-id}/ruleDefinition',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlertRule-id'],
      },
      params,
    };
  },
};
