import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}': Operation<
    '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managedTenantAlertRuleDefinition-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    paramDefs: {
      path: ['managedTenantAlertRuleDefinition-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}',
    paramDefs: {
      path: ['managedTenantAlertRuleDefinition-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions',
    body,
  };
}

export const alertRules = {
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules`
   *
   */
  list: function list(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules',
      paramDefs: {
        query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
        path: ['managedTenantAlertRuleDefinition-id'],
      },
      params,
    };
  },
  /**
   * `GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managedTenantAlertRuleDefinitions/{managedTenantAlertRuleDefinition-id}/alertRules/{managedTenantAlertRule-id}',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managedTenantAlertRuleDefinition-id', 'managedTenantAlertRule-id'],
      },
      params,
    };
  },
};
