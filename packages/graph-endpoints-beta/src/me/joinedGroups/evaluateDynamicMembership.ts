import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'POST /me/joinedGroups/evaluateDynamicMembership': Operation<
    '/me/joinedGroups/evaluateDynamicMembership',
    'post'
  >;
}

/**
 * `POST /me/joinedGroups/evaluateDynamicMembership`
 *
 */
export function create(
  body: IEndpoints['POST /me/joinedGroups/evaluateDynamicMembership']['body'],
  params?: IEndpoints['POST /me/joinedGroups/evaluateDynamicMembership']['parameters']
): EndpointRequest<IEndpoints['POST /me/joinedGroups/evaluateDynamicMembership']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/me/joinedGroups/evaluateDynamicMembership',
    paramDefs: [],
    params,
    body,
  };
}
