import type { EndpointRequest, Operation } from './../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile': Operation<
    '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile`
 *
 * The group policy file associated with the definition.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyDefinitions/{groupPolicyDefinition-id}/definitionFile',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyDefinition-id', in: 'path' },
    ],
    params,
  };
}
