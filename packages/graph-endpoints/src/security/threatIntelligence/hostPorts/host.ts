import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostPorts/{hostPort-id}/host': Operation<
    '/security/threatIntelligence/hostPorts/{hostPort-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostPorts/{hostPort-id}/host`
 *
 * The host related to this hostPort. This is a reverse navigation property. When you navigate to hostPorts from a host, assume that this is a return reference.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostPorts/{hostPort-id}/host']['response']
> {
  return {
    method: 'get',
    path: '/security/threatIntelligence/hostPorts/{hostPort-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostPort-id', in: 'path' },
    ],
    params,
  };
}
