import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup': Operation<
    '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    'post'
  >;
}

/**
 * `POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup`
 *
 */
export function create(
  body: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['body'],
  params?: IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['parameters']
): EndpointRequest<
  IEndpoints['POST /groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groupLifecyclePolicies/{groupLifecyclePolicy-id}/addGroup',
    paramDefs: [{ name: 'groupLifecyclePolicy-id', in: 'path' }],
    params,
    body,
  };
}
