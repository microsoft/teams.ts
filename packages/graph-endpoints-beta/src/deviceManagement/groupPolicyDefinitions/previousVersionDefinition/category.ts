import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category`
 *
 * The group policy category associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/category',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
