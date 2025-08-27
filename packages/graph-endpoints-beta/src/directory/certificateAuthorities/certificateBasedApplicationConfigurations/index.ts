export * as trustedCertificateAuthorities from './trustedCertificateAuthorities';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'delete'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    'get'
  >;
  'GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'get'
  >;
  'PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    'patch'
  >;
  'POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations': Operation<
    '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    'post'
  >;
}

/**
 * `DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Delete the properties and relationships of a certificateBasedApplicationConfiguration object.
 */
export function del(
  params?: IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 * Get a list of certificateBasedApplicationConfiguration objects.
 */
export function list(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
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
 * `GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Read the properties and relationships of a certificateBasedApplicationConfiguration object.
 */
export function get(
  params?: IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'certificateBasedApplicationConfiguration-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}`
 *
 * Update the properties of a certificateBasedApplicationConfiguration object. To update the trustedCertificateAuthorities within a certificateBasedApplicationConfiguration object, use the Update certificateAuthorityAsEntity operation.
 */
export function update(
  body: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['body'],
  params?: IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations/{certificateBasedApplicationConfiguration-id}',
    paramDefs: [{ name: 'certificateBasedApplicationConfiguration-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations`
 *
 */
export function create(
  body: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['body'],
  params?: IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['parameters']
): EndpointRequest<
  IEndpoints['POST /directory/certificateAuthorities/certificateBasedApplicationConfigurations']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/directory/certificateAuthorities/certificateBasedApplicationConfigurations',
    paramDefs: [],
    params,
    body,
  };
}
