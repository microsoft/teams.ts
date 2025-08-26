import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate`
 *
 * The most recent sslCertificate used to communicate on the port.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}/mostRecentSslCertificate',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPort-id', in: 'path' },
    ],
    params,
  };
}
