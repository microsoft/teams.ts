import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'delete'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'get'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'patch'
  >;
  'POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'post'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 * Delete a certificateAuthorityAsEntity object. You can&#x27;t delete all items in the collection because this collection requires at least one object that is a root authority to always persist.
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
      { name: 'certificateAuthorityAsEntity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
 *
 * List the trusted certificate authorities in a certificateBasedApplicationConfiguration object.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 * Read the properties and relationships of a certificateAuthorityAsEntity object.
 */
export function get(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
      { name: 'certificateAuthorityAsEntity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 * Update the properties of a certificateAuthorityAsEntity object.
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['body'],
  params?: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    paramDefs: [
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
      { name: 'certificateAuthorityAsEntity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
 *
 * Create a new trusted certificate authority in a certificateBasedApplicationConfiguration object.
 */
export function create(
  body: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['body'],
  params?: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    paramDefs: [{ name: 'certificateBasedApplicationConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
