import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/groupLifecyclePolicies/renewGroup': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/renewGroup',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/groupLifecyclePolicies/renewGroup`
 *
 * Renew a group&#x27;s expiration. When a group is renewed, the group expiration is extended by the number of days defined in the policy.
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/renewGroup']['body'],
  params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/renewGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/renewGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/groupLifecyclePolicies/renewGroup',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
