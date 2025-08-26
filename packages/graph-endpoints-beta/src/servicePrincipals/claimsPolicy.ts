import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'patch'
  >;
  'PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy': Operation<
    '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    'put'
  >;
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
 *
 * Get the properties and relationships of a customClaimsPolicy object.
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
 *
 * Create a new customClaimsPolicy object if it doesn&#x27;t exist, or replace an existing one.
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy`
 *
 * Create a new customClaimsPolicy object if it doesn&#x27;t exist, or replace an existing one.
 */
export function set(
  body: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['body'],
  params?: IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['parameters']
): EndpointRequest<
  IEndpoints['PUT /servicePrincipals/{servicePrincipal-id}/claimsPolicy']['response']
> {
  return {
    ver: 'beta',
    method: 'put',
    path: '/servicePrincipals/{servicePrincipal-id}/claimsPolicy',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
