export * as trustedCertificateAuthorities from './trustedCertificateAuthorities';

import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'delete'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations',
    'get'
  >;
  'GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'get'
  >;
  'PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'patch'
  >;
  'POST /certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/certificateAuthorities/certificateBasedApplicationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 * Defines the trusted certificate authorities for certificates that can be added to apps and service principals in the tenant.
 */
export function list(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations',
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
 * `GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Defines the trusted certificate authorities for certificates that can be added to apps and service principals in the tenant.
 */
export function get(
  params?: IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [{ name: 'certificateBasedApplicationConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations']['body'],
  params?: IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/certificateAuthorities/certificateBasedApplicationConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
