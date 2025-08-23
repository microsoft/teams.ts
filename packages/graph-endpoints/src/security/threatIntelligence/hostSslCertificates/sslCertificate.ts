import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate`
 *
 * The sslCertificate for this hostSslCertificate.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/sslCertificate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostSslCertificate-id', in: 'path' },
    ],
    params,
  };
}
