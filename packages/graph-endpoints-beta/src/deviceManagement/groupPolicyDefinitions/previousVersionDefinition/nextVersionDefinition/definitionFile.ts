import type { EndpointRequest, Operation } from './../../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile`
 *
 * The group policy file associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/previousVersionDefinition/nextVersionDefinition/definitionFile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
