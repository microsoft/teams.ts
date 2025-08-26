import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/ports': Operation<
    '/security/threatIntelligence/hosts/{host-id}/ports',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/ports`
 *
 * Get the list of hostPort resources associated with a host.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/ports',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}`
 *
 * The hostPorts associated with a host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/ports/{hostPort-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostPort-id', in: 'path' },
    ],
    params,
  };
}
