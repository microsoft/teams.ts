import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host': Operation<
    '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host`
 *
 * The host for this hostSslCertificate.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostSslCertificates/{hostSslCertificate-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostSslCertificate-id', in: 'path' },
    ],
    params,
  };
}
