import type { EndpointRequest, Operation } from './../../../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy': Operation<
    '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    'get'
  >;
}

/**
 * `GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy`
 *
 * Policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/connectivity/remoteNetworks/{remoteNetwork-id}/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'remoteNetwork-id', in: 'path' },
      { name: 'forwardingProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}
