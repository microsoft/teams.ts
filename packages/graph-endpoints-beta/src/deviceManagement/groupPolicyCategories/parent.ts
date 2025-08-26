import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent`
 *
 * The parent category
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/parent',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
    ],
    params,
  };
}
