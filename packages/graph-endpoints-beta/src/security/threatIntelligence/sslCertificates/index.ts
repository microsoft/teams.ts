export * as relatedHosts from './relatedHosts';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/sslCertificates': Operation<
    '/security/threatIntelligence/sslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/sslCertificates': Operation<
    '/security/threatIntelligence/sslCertificates',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'delete',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'sslCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/sslCertificates`
 *
 * Get a list of sslCertificate objects and their properties.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/sslCertificates']['response']> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates',
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
 * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 * Get the properties and relationships of an sslCertificate object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sslCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/sslCertificates/{sslCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'patch',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}',
    paramDefs: [{ name: 'sslCertificate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/sslCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/sslCertificates']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/sslCertificates']['parameters']
): EndpointRequest<IEndpoints['POST /security/threatIntelligence/sslCertificates']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/security/threatIntelligence/sslCertificates',
    paramDefs: [],
    params,
    body,
  };
}
