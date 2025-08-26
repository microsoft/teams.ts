export * as host from './host';
export * as sslCertificate from './sslCertificate';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'delete'
  >;
  'GET /security/threatIntelligence/hostSslCertificates': Operation<
    '/security/threatIntelligence/hostSslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'get'
  >;
  'PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    'patch'
  >;
  'POST /security/threatIntelligence/hostSslCertificates': Operation<
    '/security/threatIntelligence/hostSslCertificates',
    'post'
  >;
}

/**
 * `DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 */
export function del(
  params?: IEndpoints['DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['DELETE /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'delete',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: [
      { name: 'If-Match', in: 'header' },
      { name: 'hostSslCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hostSslCertificates`
 *
 * Get the properties and relationships of a hostSslCertificate object.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates']['parameters']
): EndpointRequest<IEndpoints['GET /security/threatIntelligence/hostSslCertificates']['response']> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates',
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
 * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 * Get the properties and relationships of a hostSslCertificate object.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostSslCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}`
 *
 */
export function update(
  body: IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['body'],
  params?: IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['PATCH /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    method: 'patch',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}',
    paramDefs: [{ name: 'hostSslCertificate-id', in: 'path' }],
    params,
    body,
  };
}

/**
 * `POST /security/threatIntelligence/hostSslCertificates`
 *
 */
export function create(
  body: IEndpoints['POST /security/threatIntelligence/hostSslCertificates']['body'],
  params?: IEndpoints['POST /security/threatIntelligence/hostSslCertificates']['parameters']
): EndpointRequest<
  IEndpoints['POST /security/threatIntelligence/hostSslCertificates']['response']
> {
  return {
    method: 'post',
    path: '/security/threatIntelligence/hostSslCertificates',
    paramDefs: [],
    params,
    body,
  };
}
