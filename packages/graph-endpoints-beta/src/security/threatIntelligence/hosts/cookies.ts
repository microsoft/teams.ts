import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hosts/{host-id}/cookies': Operation<
    '/security/threatIntelligence/hosts/{host-id}/cookies',
    'get'
  >;
  'GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}': Operation<
    '/security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hosts/{host-id}/cookies`
 *
 * Get a list of hostCookie resources.
 */
export function list(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/cookies',
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
 * `GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}`
 *
 * The hostCookies that are associated with this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hosts/{host-id}/cookies/{hostCookie-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'host-id', in: 'path' },
      { name: 'hostCookie-id', in: 'path' },
    ],
    params,
  };
}
