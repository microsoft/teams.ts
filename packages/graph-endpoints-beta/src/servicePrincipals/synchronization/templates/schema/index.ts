export * as directories from './directories';
export * as parseExpression from './parseExpression';

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
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
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
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}/schema',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}
