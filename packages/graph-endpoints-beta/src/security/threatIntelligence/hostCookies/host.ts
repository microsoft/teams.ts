import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host': Operation<
    '/security/threatIntelligence/hostCookies/{hostCookie-id}/host',
    'get'
  >;
}

/**
 * `GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host`
 *
 * Indicates that a cookie of this name and domain was found related to this host.
 */
export function get(
  params?: IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host']['parameters']
): EndpointRequest<
  IEndpoints['GET /security/threatIntelligence/hostCookies/{hostCookie-id}/host']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/security/threatIntelligence/hostCookies/{hostCookie-id}/host',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'hostCookie-id', in: 'path' },
    ],
    params,
  };
}
