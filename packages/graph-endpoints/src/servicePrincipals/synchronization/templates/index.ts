export * as schema from './schema';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization/templates',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates`
 *
 * List the synchronization templates associated with a given application or service principal.
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 * Preconfigured synchronization settings for a particular application.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
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
 * `PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates/{synchronizationTemplate-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'synchronizationTemplate-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/synchronization/templates']['response']
> {
  return {
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization/templates',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
