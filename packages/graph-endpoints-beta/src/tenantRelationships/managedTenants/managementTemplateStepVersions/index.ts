export * as deployments from './deployments';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'delete'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'get'
  >;
  'PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    'patch'
  >;
  'POST /tenantRelationships/managedTenants/managementTemplateStepVersions': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    'post'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor',
    'get'
  >;
  'GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep': Operation<
    '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep',
    'get'
  >;
}

/**
 * `DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: {
      header: ['If-Match'],
      path: ['managementTemplateStepVersion-id'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions`
 *
 */
export function list(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    paramDefs: {
      query: ['$top', '$skip', '$search', '$filter', '$count', '$orderby', '$select', '$expand'],
    },
    params,
  };
}

/**
 * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: {
      path: ['managementTemplateStepVersion-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['body'],
  params?: IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}',
    paramDefs: {
      path: ['managementTemplateStepVersion-id'],
    },
    params,
    body,
  };
}

/**
 * `POST /tenantRelationships/managedTenants/managementTemplateStepVersions`
 *
 */
export function create(
  body: IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepVersions']['body']
): EndpointRequest<
  IEndpoints['POST /tenantRelationships/managedTenants/managementTemplateStepVersions']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/tenantRelationships/managedTenants/managementTemplateStepVersions',
    body,
  };
}

export const acceptedFor = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/acceptedFor',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStepVersion-id'],
      },
      params,
    };
  },
};

export const templateStep = {
  /**
   * `GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep`
   *
   */
  get: function get(
    params?: IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep']['parameters']
  ): EndpointRequest<
    IEndpoints['GET /tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep']['response']
  > {
    return {
      ver: 'beta',
      method: 'get',
      path: '/tenantRelationships/managedTenants/managementTemplateStepVersions/{managementTemplateStepVersion-id}/templateStep',
      paramDefs: {
        query: ['$select', '$expand'],
        path: ['managementTemplateStepVersion-id'],
      },
      params,
    };
  },
};
