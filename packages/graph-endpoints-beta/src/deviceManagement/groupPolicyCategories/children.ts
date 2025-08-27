import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children`
 *
 * The children categories
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children',
    paramDefs: [
      { name: '$top', in: 'query' },
      { name: '$skip', in: 'query' },
      { name: '$search', in: 'query' },
      { name: '$filter', in: 'query' },
      { name: '$count', in: 'query' },
      { name: '$orderby', in: 'query' },
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
    ],
    params,
  };
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}`
 *
 * The children categories
 */
export function get$1(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/children/{groupPolicyCategory-id1}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
      { name: 'groupPolicyCategory-id1', in: 'path' },
    ],
    params,
  };
}
