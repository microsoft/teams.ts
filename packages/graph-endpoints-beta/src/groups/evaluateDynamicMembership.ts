import type { EndpointRequest, Operation } from './../types/common.ts';

export interface IEndpoints {
  'POST /groups/evaluateDynamicMembership': Operation<'/groups/evaluateDynamicMembership', 'post'>;
  'POST /groups/{group-id}/evaluateDynamicMembership': Operation<
    '/groups/{group-id}/evaluateDynamicMembership',
    'post'
  >;
}

/**
 * `POST /groups/evaluateDynamicMembership`
 *
 */
export function create$1(
  body: IEndpoints['POST /groups/evaluateDynamicMembership']['body'],
  params?: IEndpoints['POST /groups/evaluateDynamicMembership']['parameters']
): EndpointRequest<IEndpoints['POST /groups/evaluateDynamicMembership']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/evaluateDynamicMembership',
    paramDefs: [],
    params,
    body,
  };
}

/**
 * `POST /groups/{group-id}/evaluateDynamicMembership`
 *
 * Evaluate whether a user or device is or would be a member of a dynamic group. The membership rule is returned along with other details that were used in the evaluation. You can complete this operation in the following ways:
 */
export function create(
  body: IEndpoints['POST /groups/{group-id}/evaluateDynamicMembership']['body'],
  params?: IEndpoints['POST /groups/{group-id}/evaluateDynamicMembership']['parameters']
): EndpointRequest<IEndpoints['POST /groups/{group-id}/evaluateDynamicMembership']['response']> {
  return {
    ver: 'beta',
    method: 'post',
    path: '/groups/{group-id}/evaluateDynamicMembership',
    paramDefs: [{ name: 'group-id', in: 'path' }],
    params,
    body,
  };
}
