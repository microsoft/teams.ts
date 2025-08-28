import type { EndpointRequest, Operation } from './../../../types/common.ts';

export interface IEndpoints {
  'GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition': Operation<
    '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition',
    'get'
  >;
}

/**
 * `GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition`
 *
 * The associated group policy definition with the value.
 */
export function get(
  params?: IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition']['parameters']
): EndpointRequest<
  IEndpoints['GET /deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition']['response']
> {
  return {
    ver: 'beta',
    method: 'get',
    path: '/deviceManagement/groupPolicyConfigurations/{groupPolicyConfiguration-id}/definitionValues/{groupPolicyDefinitionValue-id}/definition',
    paramDefs: [
      { name: '$select', in: 'query' },
      { name: '$expand', in: 'query' },
      { name: 'groupPolicyConfiguration-id', in: 'path' },
      { name: 'groupPolicyDefinitionValue-id', in: 'path' },
    ],
    params,
  };
}
