export * as acquireAccessToken from './acquireAccessToken';
export * as jobs from './jobs';
export * as secrets from './secrets';
export * as templates from './templates';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'get'
  >;
  'PUT /servicePrincipals/{servicePrincipal-id}/synchronization': Operation<
    '/servicePrincipals/{servicePrincipal-id}/synchronization',
    'put'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 * Represents the capability for Microsoft Entra identity synchronization through the Microsoft Graph API.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PUT /servicePrincipals/{servicePrincipal-id}/synchronization`
 *
 */
export function set(
  body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['body'],
  params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['parameters']
): EndpointRequest<
  IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/synchronization']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/servicePrincipals/{servicePrincipal-id}/synchronization',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
