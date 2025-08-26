import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'delete'
  >;
  'GET /directory/federationConfigurations': Operation<
    '/directory/federationConfigurations',
    'get'
  >;
  'GET /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'get'
  >;
  'PATCH /directory/federationConfigurations/{identityProviderBase-id}': Operation<
    '/directory/federationConfigurations/{identityProviderBase-id}',
    'patch'
  >;
  'POST /directory/federationConfigurations': Operation<
    '/directory/federationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /directory/federationConfigurations/{identityProviderBase-id}`
 *
 * Delete a samlOrWsFedExternalDomainFederation object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/federationConfigurations/{identityProviderBase-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/federationConfigurations/{identityProviderBase-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'identityProviderBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/federationConfigurations`
 *
 * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
 */
export function list(
  params?: IEndpoints['GET /directory/federationConfigurations']['parameters']
): EndpointRequest<IEndpoints['GET /directory/federationConfigurations']['response']> {
  return {
    method: 'get',
    path: '/directory/federationConfigurations',
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
 * `GET /directory/federationConfigurations/{identityProviderBase-id}`
 *
 * Configure domain federation with organizations whose identity provider (IdP) supports either the SAML or WS-Fed protocol.
 */
export function get(
  params?: IEndpoints['GET /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/federationConfigurations/{identityProviderBase-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/federationConfigurations/{identityProviderBase-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'identityProviderBase-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/federationConfigurations/{identityProviderBase-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['body'],
  params?: IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/federationConfigurations/{identityProviderBase-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/federationConfigurations/{identityProviderBase-id}',
    paramDefs: [{ name: 'identityProviderBase-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/federationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /directory/federationConfigurations']['body'],
  params?: IEndpoints['POST /directory/federationConfigurations']['parameters']
): EndpointRequest<IEndpoints['POST /directory/federationConfigurations']['response']> {
  return {
    method: 'post',
    path: '/directory/federationConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
