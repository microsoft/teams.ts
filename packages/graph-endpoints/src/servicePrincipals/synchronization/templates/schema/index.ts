export * as directories from './directories';

import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      header: ['If-Match'],
      path: ['servicePrincipal-id', 'synchronizationTemplate-id'],
    },
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 * Default synchronization schema for the jobs based on this template.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationTemplate-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: {
      path: ['servicePrincipal-id', 'synchronizationTemplate-id'],
    },
    params,
    body,
  };
}

export const parseExpression = {
  /**
   * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression`
   *
   * Parse a given string expression into an attributeMappingSource object. For more information about expressions, see Writing Expressions for Attribute Mappings in Microsoft Entra ID.
   */
  create: function create(
    body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['body'],
    params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['parameters']
  ): EndpointRequest<
    IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression']['response']
  > {
    return {
      method: 'post',
      path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema/parseExpression',
      paramDefs: {
        path: ['servicePrincipal-id', 'synchronizationTemplate-id'],
      },
      params,
      body,
    };
  },
};
