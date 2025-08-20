import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    'get'
  >;
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal`
 *
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/servicePrincipal',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
    ],
    params,
  };
}
