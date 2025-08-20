import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category`
 *
 * The group policy category associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/nextVersionDefinition/category',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
