import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy': Operation<
    '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy',
    'get'
  >;
}

/**
 * `GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy`
 *
 * Get a list of threatIntelligencePolicy objects associated with a threat intelligence policy link.
 */
export function get(
  params?: IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy']['parameters']
): EndpointRequest<
  IEndpoints['GET /networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/networkAccess/filteringProfiles/{filteringProfile-id}/policies/{policyLink-id}/policy',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'filteringProfile-id', in: 'path' },
      { name: 'policyLink-id', in: 'path' },
    ],
    params,
  };
}
