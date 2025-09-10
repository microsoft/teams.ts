export * as postAttributeCollection from './postAttributeCollection';
export * as postFederationSignup from './postFederationSignup';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration': Operation<
    '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration',
    'get'
  >;
}

/**
 * `GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration`
 *
 * Get the apiConnectorConfiguration property in a b2xIdentityUserFlow to detail the API connectors enabled for the user flow.
 */
export function get(
  params?: IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration']['response']
> {
  return {
    method: 'get',
    path: '/identity/b2xUserFlows/{b2xIdentityUserFlow-id}/apiConnectorConfiguration',
    paramDefs: {
      path: ['b2xIdentityUserFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
