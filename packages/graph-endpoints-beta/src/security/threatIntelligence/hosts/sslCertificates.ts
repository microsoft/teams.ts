import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/sslCertificates': Operation<
    '/security/threatIntelligence/hosts/{host-id}/sslCertificates',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/sslCertificates`
 *
 * Get a list of hostSslCertificate objects from the host navigation property.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/sslCertificates',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}`
 *
 * The hostSslCertificates that are associated with this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/sslCertificates/{hostSslCertificate-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostSslCertificate-id', in: 'path' },
    ],
    params,
  };
}
