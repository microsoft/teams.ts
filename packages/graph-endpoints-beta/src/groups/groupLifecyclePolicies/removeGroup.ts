import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup': Operation<
    '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    'post'
  >;
}

/**
 * `POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup`
 *
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['body'],
  params?: IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    paramDefs: [
      { name: 'group-id', in: 'path' },
      { name: 'groupLifecyclePolicy-id', in: 'path' },
    ],
    params,
    body,
  };
}
