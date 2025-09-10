export * as applications from './applications';

import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions': Operation<
    '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions',
    'get'
  >;
}

/**
 * `GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions`
 *
 * The conditions representing the context of the authentication request that&#x27;s used to decide whether the events policy is invoked.  Supports $filter (eq). See support for filtering on user flows for syntax information.
 */
export function list(
  params?: IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions']['parameters']
): EndpointRequest<
  IEndpoints['GET /identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/identity/authenticationEventsFlows/{authenticationEventsFlow-id}/conditions',
    paramDefs: {
      path: ['authenticationEventsFlow-id'],
      query: ['$select', '$expand'],
    },
    params,
  };
}
