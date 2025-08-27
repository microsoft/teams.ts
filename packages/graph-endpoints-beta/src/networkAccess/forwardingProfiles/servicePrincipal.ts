import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
 *
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}
