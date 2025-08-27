import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy': Operation<
    '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    'get'
  >;
}

/**
 * `GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy`
 *
 * Policy.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/forwardingProfiles/{forwardingProfile-id}/policies/{policyLink-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'forwardingProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}
