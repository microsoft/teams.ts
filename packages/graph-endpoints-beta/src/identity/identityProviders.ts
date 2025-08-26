import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'delete'
  >;
  'GET /identity/identityProviders': Operation<'/identity/identityProviders', 'get'>;
  'GET /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'get'
  >;
  'PATCH /identity/identityProviders/{identityProviderBase-id}': Operation<
    '/identity/identityProviders/{identityProviderBase-id}',
    'patch'
  >;
  'POST /identity/identityProviders': Operation<'/identity/identityProviders', 'post'>;
}

/**
 * `DELETE /identity/identityProviders/{identityProviderBase-id}`
 *
 * Delete an identity provider resource that is of the type specified by the id in the request. Among the types of providers derived from identityProviderBase, you can currently delete a socialIdentityProvider resource in Microsoft Entra ID. In Azure AD B2C, this operation can currently delete a socialIdentityProvider, openIdConnectIdentityProvider, or an appleManagedIdentityProvider resource.
 */
export function del(
  params?: IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /identity/identityProviders/{identityProviderBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/identity/identityProviders/{identityProviderBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityProviderBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /identity/identityProviders`
 *
 * Get a collection of identity provider resources that are configured for a tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra External ID, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an oidcIdentityProvider resource. In Azure AD B2C, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
 */
export function list(
  params?: IEndpoints['GET /identity/identityProviders']['parameters']
): EndpointRequest<IEndpoints['GET /identity/identityProviders']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/identityProviders',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
    ],
    params,
  };
}

/**
 * `GET /identity/identityProviders/{identityProviderBase-id}`
 *
 * Get the properties and relationships of the specified identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can get a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), builtinIdentityProvider, or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can get a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
 */
export function get(
  params?: IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/identityProviders/{identityProviderBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/identityProviders/{identityProviderBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityProviderBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /identity/identityProviders/{identityProviderBase-id}`
 *
 * Update the properties of the specified external identity provider configured in the tenant. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can update a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can update a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
 */
export function update(
  body: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['body'],
  params?: IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /identity/identityProviders/{identityProviderBase-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/identity/identityProviders/{identityProviderBase-id}',
    paramDefs: [{ name: 'identityProviderBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /identity/identityProviders`
 *
 * Create an identity provider object that is of the type specified in the request body. Among the types of providers derived from identityProviderBase, in Microsoft Entra, this operation can create a socialIdentityProvider, appleManagedIdentityProvider (external tenant only), or an oidcIdentityProvider (external tenant only) resource. In Azure AD B2C, this operation can create a socialIdentityProvider, appleManagedIdentityProvider, builtinIdentityProvider, or an openIdConnectIdentityProvider resource.
 */
export function create(
  body: IEndpoints['POST /identity/identityProviders']['body'],
  params?: IEndpoints['POST /identity/identityProviders']['parameters']
): EndpointRequest<IEndpoints['POST /identity/identityProviders']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/identity/identityProviders',
    paramDefs: [],
    params,
    body,
  };
}
