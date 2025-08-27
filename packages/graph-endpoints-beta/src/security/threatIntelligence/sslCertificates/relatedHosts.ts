import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts',
    'get'
  >;
  'GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}': Operation<
    '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts`
 *
 * Get a list of related host resources associated with an sslCertificate.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sslCertificate-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}`
 *
 * The host resources related with this sslCertificate.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/sslCertificates/{sslCertificate-id}/relatedHosts/{host-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'sslCertificate-id', in: 'path' },
      { name: 'host-id', in: 'path' },
    ],
    params,
  };
}
