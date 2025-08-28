import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    'post'
  >;
}

/**
 * `POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup`
 *
 */
export function create(
  body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['body'],
  params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/removeGroup',
    paramDefs: [{ name: 'groupLifecyclePolicy-id', in: 'path' }],
    params,
    body,
  };
}
