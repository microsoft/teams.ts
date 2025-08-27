import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /users/{user-id}/joinedGroups/evaluateDynamicMembership': Operation<
    '/users/{user-id}/joinedGroups/evaluateDynamicMembership',
    'post'
  >;
}

/**
 * `POST /users/{user-id}/joinedGroups/evaluateDynamicMembership`
 *
 */
export function create(
  body: IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['body'],
  params?: IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['parameters']
): EndpointRequest<
  IEndpoints['POST /users/{user-id}/joinedGroups/evaluateDynamicMembership']['response']
> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/users/{user-id}/joinedGroups/evaluateDynamicMembership',
    paramDefs: [{ name: 'user-id', in: 'path' }],
    params,
    body,
  };
}
