import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'delete'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'get'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    'patch'
  >;
  'POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    'post'
  >;
}

/**
 * `DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
      { name: 'certificateAuthorityAsEntity-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
 *
 * Collection of trusted certificate authorities.
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
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
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 * Collection of trusted certificate authorities.
 */
export function get(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
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
 * `PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['body'],
  params?: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities/{certificateAuthorityAsEntity-id}',
    paramDefs: [
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
      { name: 'certificateAuthorityAsEntity-id', in: 'path' },
    ],
    params,
    body,
  };
}

/**
 * `POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities`
 *
 */
export function create(
  body: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['body'],
  params?: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['parameters']
): EndpointRequest<
  IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}/trustedCertificateAuthorities',
    paramDefs: [{ name: 'certificateBasedApplicationConfiguration-id', in: 'path' }],
    params,
    body,
  };
}
