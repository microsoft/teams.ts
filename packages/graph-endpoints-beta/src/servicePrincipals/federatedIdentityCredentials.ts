import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'delete'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
    'get'
  >;
  'GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'get'
  >;
  'PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    'patch'
  >;
  'POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials': Operation<
    '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
    'post'
  >;
}

/**
 * `DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials`
 *
 */
export function list(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
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
 * `GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 */
export function get(
  params?: IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['body'],
  params?: IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials/{federatedIdentityCredential-id}',
    paramDefs: [
      { name: 'servicePrincipal-id', in: 'path' },
      { name: 'federatedIdentityCredential-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials`
 *
 */
export function create(
  body: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['body'],
  params?: IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['parameters']
): EndpointRequest<
  IEndpoints['POST /servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/servicePrincipals/{servicePrincipal-id}/federatedIdentityCredentials',
    paramDefs: [{ name: 'servicePrincipal-id', in: 'path' }],
    params,
    body,
  };
}
