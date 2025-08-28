import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions',
    'get'
  >;
  'GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}': Operation<
    '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions`
 *
 * The immediate GroupPolicyDefinition children of the category
 */
export function list(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions',
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
 * `GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}`
 *
 * The immediate GroupPolicyDefinition children of the category
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyCategories/{groupPolicyCategory-id}/definitions/{groupPolicyDefinition-id}',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyCategory-id', in: 'path' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
