import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupLifecyclePolicies/renewGroup': Operation<
    '/groupLifecyclePolicies/renewGroup',
    'post'
  >;
}

/**
 * `POST /groupLifecyclePolicies/renewGroup`
 *
 * Renew a group&#x27;s expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.
 */
export function create(
  body: IEndpoints['POST /groupLifecyclePolicies/renewGroup']['body'],
  params?: IEndpoints['POST /groupLifecyclePolicies/renewGroup']['parameters']
): EndpointRequest<IEndpoints['POST /groupLifecyclePolicies/renewGroup']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groupLifecyclePolicies/renewGroup',
    paramDefs: [],
    params,
    body,
  };
}
