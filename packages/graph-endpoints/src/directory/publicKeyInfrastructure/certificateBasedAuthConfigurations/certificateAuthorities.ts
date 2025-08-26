import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'delete'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    'get'
  >;
  'GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'get'
  >;
  'PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    'patch'
  >;
  'POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities': Operation<
    '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    'post'
  >;
}

/**
 * `DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
 *
 * Delete a certificateAuthorityDetail object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
> {
  return {
    method: 'delete',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedAuthPki-id', in: 'path' },
      { name: 'certificateAuthorityDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities`
 *
 * Get a list of the certificateAuthorityDetail objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['response']
> {
  return {
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedAuthPki-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
 *
 * The collection of certificate authorities contained in this public key infrastructure resource.
 */
export function get(
  params?: IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
> {
  return {
    method: 'get',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedAuthPki-id', in: 'path' },
      { name: 'certificateAuthorityDetail-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['body'],
  params?: IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}']['response']
> {
  return {
    method: 'patch',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities/{certificateAuthorityDetail-id}',
    paramDefs: [
      { name: 'certificateBasedAuthPki-id', in: 'path' },
      { name: 'certificateAuthorityDetail-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities`
 *
 * Create a new certificateAuthorityDetail object.
 */
export function create(
  body: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['body'],
  params?: IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities']['response']
> {
  return {
    method: 'post',
    path: '/directory/publicKeyInfrastructure/certificateBasedAuthConfigurations/{certificateBasedAuthPki-id}/certificateAuthorities',
    paramDefs: [{ name: 'certificateBasedAuthPki-id', in: 'path' }],
    params,
    body,
  };
}
